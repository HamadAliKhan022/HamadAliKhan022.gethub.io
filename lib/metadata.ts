import { Metadata } from "next";

export function constructMetadata({
    title = "Hamad Ali Khan | Software Developer & AI Advocate",
    description = "Software Developer passionate about building innovative web and mobile applications, scalable systems, and integrating AI-powered solutions.",
    image = "/assets/blog/system-architecture.png", // Fallback image
    icons = "/favicon.ico",
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
            type: "website",
            url: "https://hamadalikhan022.github.io/HamadAliKhan022.gethub.io/",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@HamadAliKhan",
        },
        icons,
        metadataBase: new URL("https://hamadalikhan022.github.io/HamadAliKhan022.gethub.io/"),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
