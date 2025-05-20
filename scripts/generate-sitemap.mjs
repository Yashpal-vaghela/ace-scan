import fs from "fs";
import { url } from "inspector";
import path from "path";

const baseUrl = "https://acedigitaldentallaboratory.com/"

const staticPage = [
    {url: "", changefreq: "daily", priority: 1.0},
    {url: "about-us", changefreq: "weekly", priority: 0.8},
    {url: "contact-us", changefreq: "weekly", priority: 0.8},
    {url: "support", changefreq: "weekly", priority: 0.8},
    {url: "materials", changefreq: "weekly", priority: 0.8},
    {url: "product/digital-workflow", changefreq: "weekly", priority: 0.8},
    {url: "product/cad-cam", changefreq: "weekly", priority: 0.8},
    {url: "product/implants", changefreq: "weekly", priority: 0.8},
    {url: "product/crowns-bridges", changefreq: "weekly", priority: 0.8}
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPage
        .map(
            ({ url, changefreq, priority}) => `
        <url>
            <loc>${baseUrl}/${url}</loc>
            <changefreq>${changefreq}</changefreq>
            <priority>${priority}</priority>
        </url>`        
        )
    }
</urlset>`;

const filepath = path.resolve("public","sitemap.xml");
fs.writeFileSync(filepath, sitemap);
