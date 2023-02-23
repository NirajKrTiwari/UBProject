import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient(
    {
        projectId: "5stz9231",
        dataset: "production",
        apiVersion: "2023-02-08",
        useCdn: true,
        token:"sk4ilZp5Yp03Rtd9OY6tx50X8hmHbsgnKAJRbaGAm8zswAVoph7HZ1VMCLdclVCPdspQsaG0bqyP7V3n9lez5IByMsuZlYjAyqhnPLhPXypdQrdip6gmRo5W3fSuOkxfmG64m32lLxD3i7cygfAj8KxbpHu7DZI896HmDok71bhawx2s8akb"
    }
)

const builder = ImageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source);