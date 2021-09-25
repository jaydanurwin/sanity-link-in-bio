export const linksPage = `{
  LinksPage(id: "linksPage") {
    linksPageProfileImage{
      alt
      asset{
        url
      }
    }
    name
    twitterURL
    instagramURL
    youtubeURL
    githubURL
    linksButtonList{
      linkText
      linkURL
    }
  }
}`;