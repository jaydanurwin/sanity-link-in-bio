import { client } from '../lib/sanityClient.js';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export function sanityGraphqlQuery(query) {
    return `${process.env.SANITY_GRAPHQL_URL}?query=${query}`;
}

export function getSanityImageUrl(source) {
    return builder.image(source);
}