# Sanity Links Page

This is a repo using Sanity to create and manage the data for a custom links page for social media profiles you'll often see in Instagram (ex. bio.link, linktree, etc.)

## Features

- A CMS schema in Sanity to manage the content for a links page
- An example using [Astro](https://astro.build) and its top-level fetch to fetch the data from Sanity
- An example of a web component built with [Lit](https://lit.dev) that is a completely self-contained 

## Get Started

Watch my [step-by-step tutorial on YouTube]()

**Or** 

Follow the manual steps below:

### Initial Sanity Setup

1. [Create a repo from this template](https://github.com/jaydanurwin/sanity-links-page/generate)
2. If you don't have the Sanity CLI already run `npm install -g @sanity/cli`
3. Open a terminal from root folder of the project
4. `cd sanity`
5. `sanity install`
6. `sanity init` and follow the prompts (you will need to create a Sanity account if you haven't already)
7. `npm run graphql-deploy`
   1. Take note of the graphql API url it outputs once finished
8. Navigate to the astro folder
7. Rename `.env.template` to `.env` and 
8. Replace the SANITY_PROJECT_ID value with your token ID
9. Replace the SANITY_GRAPHQL_URL value with your GraphQL URL
10. Navigate to the lit-component folder
11. Replace the sanity url value in the `sanity-links-page.ts` file

**Note:** You will want to add http://localhost:3000 to your allowed CORS orgins in your Sanity project settings at [https://manage.sanity.io](https://manage.sanity.io)
 
### To run your Sanity Studio

1. Open a terminal located at the sanity folder
2. `sanity install`
3. `sanity start`
4. Your studio should be running on [http://localhost:3333](http://localhost:3333)
5.  Open [http://localhost:3333](http://localhost:3333) and copy the project ID from the Project info section

### To run your Astro site

1.  Open a terminal located at the astro folder
2.  `npm install`
3.  `npm start`
4.  Your Astro site should be running on [http://localhost:3000](http://localhost:3000)
5.  `npm run build` to build to production locally

### To run the Lit Example

1.  Open a terminal located at the lit-component folder
2.  `npm install`
3.  `npm start`
4.  The example page with the component should be running on [http://localhost:3000](http://localhost:3000)

