import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: '2kxd9hp8',
    dataset: 'production',
    useCdn: true,
    //se sanityprosjekt-> vision-> API vision
    apiVersion: '2021-10-21',

})