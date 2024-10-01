

export const revalidate = 3600 // one hour


export async function generateSitemaps() {
  
  // Fetch the total number of products and calculate the number of sitemaps needed
  // Fetch the total number of products
  const totalProducts = 55

  // Calculate the number of sitemaps needed (3 products per sitemap)
  const productsPerSitemap = 50000;
  const numberOfSitemaps = Math.ceil(totalProducts / productsPerSitemap);

  // Generate an array of sitemap objects
  const sitemaps = Array.from({ length: numberOfSitemaps }, (_, index) => ({ id: index }));

  return sitemaps;
}
const mockProducts = Array.from({ length: 55 }, (_, index) => ({
  id: index + 1,
  slug: `product-${index + 1}`,
  updated_at: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24), // Simulate random update times within the last 24 hours
  created_at: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 48), // Simulate random creation times within the last 48 hours
}));

export default async function sitemap({id}:any) {
  const start = id * 5000
  const limit = 5000


const products = mockProducts.slice(start, start + limit);
  
  const formattedProducts = products.map((product:any) => ({
    url: `${process.env.NEXT_WEBSITE_URL}/product/${product.slug}`,
    lastModified: product.updated_at || product.created_at,
    changefreq: "monthly",
    priority: 0.6,
  }));

  return formattedProducts;
  
}