import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sunrise Safeguarding',

  projectId: '2vw3tpvg',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // ─────────────────────────
            // SINGLETON PAGES
            // ─────────────────────────

            S.listItem()
              .title('About Page')
              .child(S.document().schemaType('about').documentId('aboutPage')),

            S.listItem()
              .title('FAQ Page')
              .child(S.document().schemaType('faqPage').documentId('faqPage')),

            S.listItem()
              .title('Resources Page')
              .child(S.document().schemaType('resourcesPage').documentId('resourcesPage')),

            S.divider(),

            // ─────────────────────────
            // BLOG
            // ─────────────────────────

            S.listItem()
              .title('Blog Posts')
              .schemaType('post')
              .child(S.documentTypeList('post').title('Blog Posts')),

            S.divider(),

            // ─────────────────────────
            // RESOURCES
            // ─────────────────────────

            S.listItem()
              .title('Resources')
              .schemaType('resource')
              .child(S.documentTypeList('resource').title('Resources')),

            S.divider(),

            // ─────────────────────────
            // EVERYTHING ELSE
            // ─────────────────────────

            ...S.documentTypeListItems().filter(
              (item) =>
                !['about', 'faqPage', 'resourcesPage', 'post', 'resource'].includes(item.getId()),
            ),
          ]),
    }),

    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
