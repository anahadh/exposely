type ButtonVariant = 'solid' | 'soft' | 'outline';
type ButtonColor = 'primary' | 'secondary' | 'accent';

export interface ButtonProps {
    children: React.ReactNode;
    variant: ButtonVariant;
    color: ButtonColor;
}