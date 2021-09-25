export default {
    name: 'linksPage',
    type: 'document',
    title: 'Links Page',
    fields: [
      {
        name: 'linksPageProfileImage',
        type: 'linksProfileImage',
        title: 'Links Profile Image'
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'facebookURL',
        type: 'url',
        title: 'Facebook URL',
        description: 'Link to your Facebook Page'
      },
      {
        name: 'twitterURL',
        type: 'url',
        title: 'Twitter URL',
        description: 'Link to your Facebook Page'
      },
      {
        name: 'instagramURL',
        type: 'url',
        title: 'Instagram URL',
        description: 'Link to your Facebook Page'
      },
      {
        name: 'youtubeURL',
        type: 'url',
        title: 'YouTube URL',
        description: 'Link to your Facebook Page'
      },
      {
        name: 'githubURL',
        type: 'url',
        title: 'GitHub URL',
        description: 'Link to your Facebook Page'
      },
      {
        name: 'tiktokURL',
        type: 'url',
        title: 'TikTok URL',
        description: 'Link to your Facebook Page'
      },
      {
        name: 'linksButtonList',
        title: 'Links List',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'linksButton' } }],
      }
    ]
  }
  