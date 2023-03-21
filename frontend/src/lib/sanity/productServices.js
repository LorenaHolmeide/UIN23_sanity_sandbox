import { client } from "./client";
export const fetchAllProducts = async () => {
    const data = await client.fetch(`*[_type=="products"]{product_title, slug}`)
    return data
}