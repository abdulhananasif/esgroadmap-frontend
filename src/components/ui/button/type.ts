export type Variant = 'primary' | 'secondary' | 'danger';

export type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: Variant;
  disabled?: boolean;
  className?: string;
};
