import { Button as AriaButton } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './Button.types';
import { textColorClasses, bgColorClasses, hoverBgColorClasses, softBgColorClasses, softHoverBgColorClasses, outlineHoverBgColorClasses, innerRingClasses } from '../../shared/tailwindClases';

const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-2 py-1 text-sm',
    md: 'px-2.5 py-1.5 text-sm',
    lg: 'px-3 py-2 text-sm',
    xl: 'px-3.5 py-2.5 text-sm',
};

const Button = ({ className, color = "blue", size = 'md', variant = 'default', children, ...rest }: ButtonProps) => {
    const variants = {
        default: {
            textColorClass: 'text-white',
            backgroundColorClass: bgColorClasses[color],
            hoverColorClass: hoverBgColorClasses[color],
            ringClass: '',
        },
        soft: {
            textColorClass: textColorClasses[color],
            backgroundColorClass: softBgColorClasses[color],
            hoverColorClass: softHoverBgColorClasses[color],
            ringClass: '',
        },
        outline: {
            textColorClass: `${textColorClasses[color]} hover:text-white`,
            backgroundColorClass: '',
            hoverColorClass: outlineHoverBgColorClasses[color],
            ringClass: innerRingClasses[color],

        },
    };

    const { textColorClass, backgroundColorClass, hoverColorClass, ringClass } = variants[variant];
    const sizeClass = sizeClasses[size];

    return (
        <AriaButton
            className={twMerge(`rounded ${backgroundColorClass} ${sizeClass} font-semibold ${textColorClass} shadow-sm ${hoverColorClass} inline-flex items-center gap-x-1.5 disabled:opacity-50 disabled:cursor-not-allowed ${ringClass}`, className)}
            {...rest}
        >
            {children}
        </AriaButton>
    );
};

export default Button;