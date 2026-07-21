import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';

import HomePage from './page';

describe('HomePage', () => {
  it('identifies BODY32 and the foundation status', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', {name: /Decode Your Body/i})
    ).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent(
      'Application foundation ready'
    );
  });
});
