import type {ButtonHTMLAttributes} from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({className = '', variant = 'primary', size = 'md', type = 'button', ...props}: ButtonProps) {
  return <button className={`button button--${variant} button--${size} ${className}`.trim()} type={type} {...props} />;
}
