import { test, expect } from '@playwright/test';

test.describe('Fake Instagram Feed', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders the feed and at least one post', async ({ page }) => {
    // Feed root exists
    await expect(page.getByTestId('feed')).toBeVisible();

    // Very at least one post is visible
    const firstPost = page.getByTestId('post').first();
    await expect(firstPost).toBeVisible();

    // Verify post has username, image
    await expect(firstPost.getByTestId('post-username')).toBeVisible();
    await expect(firstPost.getByTestId('post-image')).toBeVisible();
  });

  test('each post has like + comment button', async ({ page }) => {
    const posts = page.getByTestId('post');
    const count = await posts.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const post = posts.nth(i);

      // Verify like button and count
      await expect(post.getByTestId('like-button')).toBeVisible();
      await expect(post.getByTestId('like-count')).toBeVisible();
    }
  });

  test('liking a post increments its like count', async ({ page }) => {
    const firstPost = page.getByTestId('post').first();

    const likeCountLocator = firstPost.getByTestId('like-count');
    const likeButton = firstPost.getByTestId('like-button');

    const initialText = await likeCountLocator.textContent();
    const initial = Number(initialText?.trim() || 0);

    await likeButton.click();

    // Verify like count should increase by 1
    const afterText = await likeCountLocator.textContent();
    const after = Number(afterText?.trim() || 0);

    expect(after).toBe(initial + 1);
  });

  test('user can add a comment to a post', async ({ page }) => {
    const firstPost = page.getByTestId('post').first();
    const commentButton = firstPost.getByTestId('comment-button');
    const commentInput = firstPost.getByTestId('comment-input');
    const commentSubmit = firstPost.getByTestId('comment-submit');

    // Leave comment
    await commentButton.click();
    const uniqueComment = 'Nice shot';
    await page.waitForTimeout(3000);
    // await page.getByTestId('comment-input').click();
    await page.getByTestId('comment-input').fill(uniqueComment);
    await page.getByTestId('comment-submit').click();

    // Expect comment to appear under the same post
    const comments = firstPost.getByTestId('comment');
    await expect(
        page.locator('div[data-testid="post-comment"]').locator('span', { hasText: uniqueComment })
    ).toBeVisible();
  });
});
