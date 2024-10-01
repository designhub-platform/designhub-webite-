import { NextResponse } from 'next/server';


// Calculate and output sitemap URLs ex sitemap/1.xml
export async function generateSitemaps() {


    // Fetch the total number of products
    const totalProducts = 55
    // Calculate the number of sitemaps needed (10 products per sitemap)
    const productsPerSitemap = 50000;
    const numberOfSitemaps = Math.ceil(totalProducts / productsPerSitemap);
  
    // Generate an array of sitemap objects
    const sitemaps = Array.from({ length: numberOfSitemaps }, (_, index) => ({
      id: index,
      url: `${process.env.NEXT_WEBSITE_URL}/compare/sitemap/${index}.xml`
    }));
  
    return sitemaps;
  }

// cache test
export async function GET() {
  try {
    // Generate sitemaps
    const dynamicSitemaps = await generateSitemaps();

    // Combine static and dynamic sitemaps
    const sitemaps = [
      `${process.env.NEXT_WEBSITE_URL}/sitemap.xml`,
      `${process.env.NEXT_WEBSITE_URL}/lenses/sitemap.xml`,
      ...dynamicSitemaps.map(sitemap => sitemap.url)
    ];

    console.log('Generated sitemaps:', sitemaps);

    const sitemapIndexXML = await buildSitemapIndex(sitemaps);

    return new NextResponse(sitemapIndexXML, {
      headers: {
        "Content-Type": "application/xml",
        "Content-Length": Buffer.byteLength(sitemapIndexXML).toString(),
      },
    });
  } catch (error) {
    console.error('Error generating sitemap index:', error);
    return NextResponse.error();
  }
}

async function buildSitemapIndex(sitemaps: string[]) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  for (const sitemapURL of sitemaps) {
    xml += "<sitemap>";
    xml += `<loc>${sitemapURL}</loc>`;
    xml += "</sitemap>";
  }

  xml += "</sitemapindex>";
  return xml;
}