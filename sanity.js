import { createClient } from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = createClient ({
    projectId: 'npcegap4',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2025-07-01',


})
const builder = imageBuilder(client);

export const urlFor = source=> builder.image(source);

export default client;
