import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '2vw3tpvg',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token:
    'skBZRDTZFoGdFGFz5ZFKXwQhPuAYGoChLRdIf6axduKRun0VWfHKH3n7mziaGq4VVdfZOyKXxoPSXGxRdDaZWi73J0uGlaxAM9U9125Cs3zUbBod9kS5OIlC0Gc8KA0UMc9an2N8v1KFos6qA91GHALz9u2j7dLZQhym9rnhCttLdBGOMd3P', // <-- safer
  useCdn: true,
})

async function seedResources() {
  console.log('🌱 Seeding Resources Page...')

  // 1️⃣ Create / Replace Resources Page Singleton
  await client.createOrReplace({
    _id: 'resourcesPage',
    _type: 'resourcesPage',

    heroTitle: 'Resources',
    heroText:
      'Free downloadable tools, checklists, and guides to help your organisation build a stronger safeguarding culture.',
  })

  console.log('✅ Resources Page created')

  // 2️⃣ Create Sample Resource Documents
  const resources = [
    {
      _id: 'resource-safeguarding-checklist',
      _type: 'resource',
      title: 'Safeguarding Policy Checklist',
      description:
        'A practical self-assessment tool covering policy, governance, recruitment, training, safe environments, and organisational culture — designed for South African schools, NGOs, faith-based organisations, and corporates.',
      typeLabel: 'Free Checklist',
      year: '2025',
      pages: '2',
      order: 1,
    },

    {
      _id: 'resource-sa-legal-guide',
      _type: 'resource',
      title: 'Safeguarding Legal Compliance Guide (South Africa)',
      description:
        'A simple overview of safeguarding-related legal duties under South African law, including reporting obligations and organisational responsibilities.',
      typeLabel: 'Free Guide',
      year: '2025',
      pages: '4',
      order: 2,
    },

    {
      _id: 'resource-governance-audit',
      _type: 'resource',
      title: 'Governance & Leadership Safeguarding Audit',
      description:
        'A leadership-level tool to assess safeguarding culture, accountability, risk management, and reporting systems within your organisation.',
      typeLabel: 'Audit Tool',
      year: '2025',
      pages: '3',
      order: 3,
    },
  ]

  for (const resource of resources) {
    await client.createOrReplace(resource)
    console.log(`✅ Created: ${resource.title}`)
  }

  console.log('🎉 Resources fully seeded successfully.')
}

seedResources().catch(console.error)
