import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "@material/mwc-circular-progress";

import { instagram, twitter, youtube, github } from "./icons";

const linksPage = `{
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

@customElement("sanity-links-page")
export class SanityLinksPage extends LitElement {
  static styles = css`
    #loading-spinner__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 80vh;
    }
    mwc-circular-progress {
      --mdc-theme-primary: var(--color-primary, #ee5353);
    }
    .links-page__section {
      padding: 1rem;
      max-width: 860px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
    }
    .profile__img {
      border-radius: 50%;
    }
    .social-icons__container {
      padding-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    .social-icons__container a {
      display: flex;
      margin-right: 1rem;
    }
    .social-icons__container a:last-of-type {
      margin-right: 0;
    }
    .social-icons__container svg {
      width: 36px;
      height: 36px;
    }
    .links-btn__container {
      width: 60%;
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
    }
    .links__btn {
      margin-bottom: 1rem;
      padding: 1rem 0.75rem;
      text-align: center;
      border: 4px solid #000000;
      border-radius: 2rem;
      font-weight: 700;
      font-size: 1.5rem;
      color: inherit;
      text-decoration: none;
      text-transform: uppercase;
      transition: background-color cubic-bezier(0.075, 0.82, 0.165, 1) 300ms;
    }
    .links__btn:hover{
        background-color: #e4e4e4;
    }
  `;

  @property({ type: String })
  sanityURL = "https://z2m8fao5.api.sanity.io/v1/graphql/production/default";

  @state()
  _isLoaded: boolean = false;
  @state()
  _linksPageData: any = [];
  @state()
  _linksButtonList: any = [];
  @state()
  _profileImageURL: string = "";

  async _sanityFetch() {
    const response = await fetch(this._sanityGraphqlQuery(linksPage));
    const data = (await response.json()).data;
    // set links page data to data.LinksPage
    this._linksPageData = data.LinksPage;
    // Set the linkCards Array
    this._linksButtonList = this._linksPageData.linksButtonList;
    // set _isLoaded to true
    this._isLoaded = true;
  }

  protected _sanityGraphqlQuery(query: string) {
    return `${this.sanityURL}?query=${query}`;
  }

  protected _init() {
    try {
      // run the fetch first
      this._sanityFetch();
    } catch (error) {
      console.error(error);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this._init();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  protected render() {
    const linkButtons = this._linksButtonList.map((linksButton: any) => {
      return html`
        <a class="links__btn" href=${linksButton.linkURL}
          >${linksButton.linkText}</a
        >
      `;
    });

    return html`
      ${this._isLoaded
        ? html`
            <section class="links-page__section">
              <img
                class="profile__img"
                width="200"
                height="200"
                src=${this._linksPageData.linksPageProfileImage.asset.url}
              />
              <h1>${this._linksPageData.name}</h1>
              <div class="social-icons__container">
                <a href=${this._linksPageData.instagramURL}> ${instagram} </a>
                <a href=${this._linksPageData.twitterURL}> ${twitter} </a>
                <a href=${this._linksPageData.youtubeURL}> ${youtube} </a>
                <a href=${this._linksPageData.githubURL}>
                  ${github}
                </a>
              </div>
              <div class="links-btn__container">${linkButtons}</div>
            </section>
          `
        : html`
            <div id="loading-spinner__container">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          `}
    `;
  }
}
