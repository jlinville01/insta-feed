import { test, expect } from '@playwright/test';

test.describe('Fake Instagram Feed', () => {
  test.beforeEach(async ({ page }) => {
    console.log('BASE_URL is:', process.env.BASE_URL);
    await page.goto('/');
  });

  test('renders the feed and at least one post', async ({ page }) => {
    // Feed root exists
    await expect(page.getByTestId('feed')).toBeVisible();

    // Very at least one post is visible
    const firstPost = page.getByTestId('post').first();
    await expect(firstPost).toBeVisible();

    // Verify post has username + image
    await expect(firstPost.getByTestId('post-username')).toBeVisible();
    await expect(firstPost.getByTestId('post-image')).toBeVisible();
  });

  test('each post has actions (like + comment)', async ({ page }) => {
    const posts = page.getByTestId('post');
    const count = await posts.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const post = posts.nth(i);

      // Very like button, like count, comment input and submit button
      await expect(post.getByTestId('like-button')).toBeVisible();
      await expect(post.getByTestId('like-count')).toBeVisible();
      await expect(post.getByTestId('comment-input')).toBeVisible();
      await expect(post.getByTestId('comment-submit')).toBeVisible();
    }
  });
});
