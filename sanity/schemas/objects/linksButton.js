export default {
    name: 'linksButton',
    title: 'Links Page Buttons',
    type: 'document',
    fields: [
      {
        name: 'linkText',
        title: 'Link Text',
        type: 'string',
        validation: Rule => Rule.error( 'Title is required' ).required(),
      },
      {
        name: 'linkURL',
        title: 'Link URL',
        type: 'url',
        validation: Rule => Rule.error( 'URL is required' ).required(),
      }
    ],
    preview: {
        select: {
          title: 'linkText',
        }
      },
  }