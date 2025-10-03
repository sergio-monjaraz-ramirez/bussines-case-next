// src/app/page.test.tsx
import { test, expect } from '@playwright/test';

test.describe('Page Component Integration Tests', () => {
 
  test('renders the page with initial data', async ({ page }) => {
    await page.goto('/');

    // Check if filters and search bar are rendered
    await expect(page.getByTestId('search-bar')).toBeVisible();
    await expect(page.getByTestId('filters-container')).toBeVisible();

    // Check if products are rendered
    await expect(page.getByTestId('product-card-1')).toBeVisible();
    await expect(page.getByTestId('product-card-2')).toBeVisible();

    // Check if pagination controls are rendered
    await expect(page.getByTestId('pagination-container')).toBeVisible();
  });

  test('filters products by category', async ({ page }) => {
    await page.goto('/');

    // Select a category
    await page.getByTestId('filters-container').getByTestId('category-select').selectOption('Beauty');
    await expect(page.getByTestId('product-card-1')).toBeVisible();
    // Verify API call and UI update
    const productCards = page.getByTestId('products-list').locator('a');
    const productCount = await productCards.count();

    expect(productCount).toBe(5); // Assuming 5 products in Beauty category
  });

      test('searches for products', async ({ page }) => {
        await page.goto('/');

        // Type in the search bar
        await page.getByTestId('search-bar').getByRole('textbox').fill('Red Lipstick');

        await page.waitForTimeout(500); 

        await expect(page.getByTestId('product-card-4')).toBeVisible();

        // Verify API call and UI update
      const productCards = page.getByTestId('products-list').locator('a');
      const productCount = await productCards.count();
       expect(productCount).toBe(1);
      });

  test('navigates between pages', async ({ page }) => {
    await page.goto('/');

     await expect(page.getByTestId('product-card-1')).toBeVisible();
      await expect(page.getByTestId('product-card-21')).not.toBeVisible();


    // Click next page
    await page.getByTestId('next-button').click();

    // Verify API call and UI update
   await expect(page.getByTestId('product-card-1')).not.toBeVisible();
    await expect(page.getByTestId('product-card-21')).toBeVisible();
  });

  test('navigates to product detail page and checks metadata', async ({ page }) => {
    const response = await page.goto('/products/1');
    const html = await response!.text();


    // Expect to be on the product detail page
    await expect(page).toHaveURL(/\/products\/1/);

    // Check for product detail elements
     await expect(page.getByTestId('product-thumbnail')).toBeVisible();
    await expect(page.getByTestId('product-title')).toBeVisible();
    await expect(page.getByTestId('product-description')).toBeVisible();


    
    // Check metadata: title and description
    expect(html).toContain(`<title>Essence Mascara Lash Princess</title>`);
    expect(html).toContain(`<meta name="description" content="The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula."/>`);
  });
});