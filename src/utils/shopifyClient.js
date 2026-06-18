// Headless Shopify Storefront API Fetch Client
// Sourced from Shopify Developer API 2024-01

const SHOPIFY_STORE_URL = "stackyourgold.myshopify.com"; // Replace with your myshopify URL
const STOREFRONT_ACCESS_TOKEN = "your_storefront_access_token"; // We will inject this live

export async function shopifyFetch(query, variables = {}) {
  try {
    const response = await fetch(`https://${SHOPIFY_STORE_URL}/api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });

    const result = await response.json();
    if (result.errors) {
      console.error("Shopify Storefront GraphQL Errors:", result.errors);
      return null;
    }
    return result.data;
  } catch (error) {
    console.error("Shopify Connection Failed:", error);
    return null;
  }
}

// GraphQL Query to fetch products from your "Stack Swag" collection
export const GET_SWAG_COLLECTION = `
  query getProducts {
    collection(handle: "stack-swag") {
      products(first: 20) {
        edges {
          node {
            id
            title
            description
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  price {
                    amount
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
