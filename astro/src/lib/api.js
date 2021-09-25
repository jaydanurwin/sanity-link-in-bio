export const linksPage = `{
  LinksPage(id: "linksPage") {
    linksPageProfileImage{
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