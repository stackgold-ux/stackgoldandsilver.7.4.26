
import { shopifyClient } from './src/utils/shopifyClient.js';

async function test() {
  console.log('Fetching Swag...');
  const swag = await shopifyClient.getProducts('swag');
  console.log('Swag Products:', swag.map(p => p.name));
  
  console.log('\nFetching Silver...');
  const silver = await shopifyClient.getProducts('silver');
  console.log('Silver Products:', silver.map(p => p.name));
}

test().catch(console.error);
