import { render, screen } from '@testing-library/react';

import { Container } from './container';

describe('Container', () => {
  it('renders its children', () => {
    render(
      <Container>
        <span>Starter content</span>
      </Container>
    );

    expect(screen.getByText('Starter content')).toBeInTheDocument();
  });

  it('merges additional class names', () => {
    const { container } = render(<Container className="custom-class">Content</Container>);

    expect(container.firstChild).toHaveClass('mx-auto', 'max-w-7xl', 'custom-class');
  });
});
