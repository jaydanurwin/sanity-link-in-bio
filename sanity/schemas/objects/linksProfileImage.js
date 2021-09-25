export default {
    name: 'linksProfileImage',
    type: 'image',
    title: 'Links Profile Image',
    options: {
      hotspot: true
    },
    fields: [
      {
        name: 'alt',
        type: 'string',
        title: 'Alternative text',
        description: 'Important for SEO and accessiblity.',
        validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
        options: {
          isHighlighted: true
        }
      }
    ],
    preview: {
      select: {
        imageUrl: 'asset.url',
        title: 'caption'
      }
    }
  }
  