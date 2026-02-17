import { MetadataRoute } from 'next';

const BASE_URL = 'https://hamad-portfolio-liard.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    // Standard static routes
    const routes = [
        '',
        '/blog',
        '/projects',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic blog posts (currently hardcoded based on project structure, 
    // can be extended to fetch from a CMS or filesystem in the future)
    const blogs = [
        '/spinevision-ai-architecture',
    ].map((slug) => ({
        url: `${BASE_URL}/blog${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...blogs];
}
