import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import Card from '../../src/components/Card.astro';

describe('Card Component', () => {
  it('Renders correctly with all props', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Card, {
        props: {
            "title": "Test Title",
            "place": "Test Place",
            "href": "https://example.com",
        }
    });

    expect(result).toContain('Test Title');
    expect(result).toContain('Test Place');
    expect(result).toContain('https://example.com');
  });
});