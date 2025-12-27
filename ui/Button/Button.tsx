import React from 'react'
import { ButtonProps } from './Button.types'
import clsx from 'clsx'

const Button: React.FC<ButtonProps> = ({ children, variant, color }) => {
    const colorClasses = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        accent: 'bg-accent',
    }
    
    const outlineColorClasses = {
        primary: 'outline-primary',
        secondary: 'outline-secondary',
        accent: 'outline-accent',
    }

    let buttonClasses = clsx(
        'rounded-lg px-4 py-2 font-body text-white min-w-32 cursor-pointer transition-all duration-300',
        colorClasses[color],
        {
            [`outline outline-2 ${outlineColorClasses[color]} hover:brightness-150`]: variant === 'outline',
            [`outline outline-2 hover:brightness-150`]: variant === 'soft',
            [`hover:brightness-150`]: variant === 'solid',
        }
    )

    return (
        <button className={buttonClasses}>{children}</button>
    )
}

export default Button