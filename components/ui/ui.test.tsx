import {render, screen} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';

vi.mock('@/i18n/navigation', () => ({
  Link: (props: React.AnchorHTMLAttributes<HTMLAnchorElement> & {locale: string}) => {
    const {locale, ...anchorProps} = props;
    void locale;
    return <a {...anchorProps} />;
  }
}));

import {Button} from './button';
import {LanguageSwitcher} from './language-switcher';
import {Progress} from './progress';

describe('shared UI', () => {
  it('uses safe button defaults', () => {
    render(<Button>Continue</Button>);
    expect(screen.getByRole('button', {name: 'Continue'})).toHaveAttribute('type', 'button');
  });

  it('announces bounded progress', () => {
    render(<Progress label="Quiz progress" value={120} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  });

  it('marks the current locale', () => {
    render(<LanguageSwitcher locale="ko" />);
    expect(screen.getByRole('link', {name: '한국어'})).toHaveAttribute('aria-current', 'page');
  });
});
