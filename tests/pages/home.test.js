import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import index from '../../src/pages/index.astro';

describe('Home Page', () => {
  it('Renders correctly', async () => {
    const container = await AstroContainer.create();
    const response = await container.renderToResponse(index);

    expect(response.url).toBe("");
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('text/html');
  });

  it('Renders with correct title', async () => {
    const container = await AstroContainer.create();
    const renderedResponse = await container.renderToString(index);
    const expectedTitle = "Galeria by";
    const expectedTitleSpan = "Campos";

    expect(renderedResponse).toContain(expectedTitle);
    expect(renderedResponse).toContain(expectedTitleSpan);
  });
});