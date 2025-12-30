export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    // HERO
    {
      name: 'heroPills',
      title: 'Hero Pills',
      type: 'array',
      of: [{type: 'pill'}],
    },
    {
      name: 'heading',
      title: 'Hero Heading',
      type: 'string',
    },
    {
      name: 'heroText',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'heroCta',
      title: 'Hero Button Text',
      type: 'string',
    },

    // SERVICES
    {
      name: 'servicesTitle',
      title: 'Services Section Title',
      type: 'string',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{type: 'service'}],
    },

    // APPROACH
    {
      name: 'approachTitle',
      title: 'Approach Section Title',
      type: 'string',
    },
    {
      name: 'approachItems',
      title: 'Approach Cards',
      type: 'array',
      of: [{type: 'approachItem'}],
    },

    // VALUES
    {
      name: 'valuesTitle',
      title: 'Values Title',
      type: 'string',
    },
    {
      name: 'valuesText',
      title: 'Values Text',
      type: 'text',
      rows: 4,
    },

    // WHO WE WORK WITH
    {
      name: 'whoTitle',
      title: 'Who We Work With Title',
      type: 'string',
    },
    {
      name: 'whoText',
      title: 'Who We Work With Text',
      type: 'text',
      rows: 4,
    },

    // CONTACT
    {
      name: 'contactTitle',
      title: 'Contact Title',
      type: 'string',
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    },
  ],
}
