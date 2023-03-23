import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient(
    {
        projectId: "5stz9231",
        dataset: "production",
        apiVersion: "2023-02-08",
        useCdn: true,
        token: "skLvtTiNG6UWjLYcn6L25hguutyTlg6NfjNMooJ64ur4404RBAYA8POaZvz8AqMZ3jpEl6fidrfh6wYfghQBL8XvabaQ8mX123gWv8XWcXX0fYjeFkH1hXwxBgVKis3mNzGSNWT7WIxHguHqCkRj0AXM3ytVdiD8JxEr4sfOwnxkdSjOozxR"

    }
)

const builder = ImageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source);