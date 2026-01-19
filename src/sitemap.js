import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

// Define your website base URL
const BASE_URL = 'https://yourdomain.com'; // Update this with your actual domain

// Define all routes in your application
const routes = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    url: '/project1',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: '/project2',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: '/project3',
    changefreq: 'monthly',
    priority: 0.8,
  },
];

// Function to generate sitemap
export async function generateSitemap() {
  try {
    // Create a sitemap stream
    const sitemap = new SitemapStream({ hostname: "https://yondonjamts.pro", });

    // Pipe the stream to a file
    const sitemapPath = resolve('public', 'sitemap.xml');
    const writeStream = createWriteStream(sitemapPath);

    sitemap.pipe(writeStream);

    // Add all routes to the sitemap
    routes.forEach((route) => {
      sitemap.write({
        url: route.url,
        changefreq: route.changefreq,
        priority: route.priority,
        lastmod: new Date(),
      });
    });

    // End the stream
    sitemap.end();

    // Wait for the stream to finish
    await streamToPromise(sitemap);
    console.log(`✓ Sitemap generated successfully at ${sitemapPath}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

// Execute if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap();
}