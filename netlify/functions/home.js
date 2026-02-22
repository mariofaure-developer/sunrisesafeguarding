import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '2vw3tpvg',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export async function handler() {
  try {
    const data = await client.fetch(`
      *[_type=="home"][0]{
        heading,
        heroText,
        heroCta,
        heroPills[]{label},
        servicesTitle,
        services[]{title, description},
        approachTitle,
        approachItems[]{title, text},
        valuesTitle,
        valuesText,
        whoTitle,
        whoText,
        contactTitle,
        contactDesc,
        contactEmail
      }
    `);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        // 🔥 Edge cache
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=60',
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to load homepage' }),
    };
  }
}
