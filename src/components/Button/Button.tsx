import { Button as AriaButton } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './Button.types';
import { textColorClasses, bgColorClasses, hoverBgColorClasses, softBgColorClasses, softHoverBgColorClasses, outlineHoverBgColorClasses, innerRingClasses } from '../../shared/tailwindClases';
import clsx from 'clsx';

const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-2 py-1 text-sm',
    md: 'px-2.5 py-1.5 text-sm',
    lg: 'px-3 py-2 text-sm',
    xl: 'px-3.5 py-2.5 text-sm',
};

const Button = ({ className, color = "blue", rounded, size = 'md', variant = 'default', children, ...rest }: ButtonProps) => {
    const variants = {
        default: {
            textColorClass: 'text-white',
            backgroundColorClass: bgColorClasses[color],
            hoverColorClass: hoverBgColorClasses[color],
            ringClass: '',
        },
        soft: {
            textColorClass: `${textColorClasses[color]} dark:text-white`,
            backgroundColorClass: softBgColorClasses[color],
            hoverColorClass: softHoverBgColorClasses[color],
            ringClass: '',
        },
        outline: {
            textColorClass: `${textColorClasses[color]} hover:text-white dark:hover:text-white`,
            backgroundColorClass: '',
            hoverColorClass: outlineHoverBgColorClasses[color],
            ringClass: innerRingClasses[color],

        },
    };

    const { textColorClass, backgroundColorClass, hoverColorClass, ringClass } = variants[variant];
    const sizeClass = sizeClasses[size];

    const classes = clsx(
        'rounded font-semibold shadow-sm inline-flex items-center gap-x-1.5 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none',
        backgroundColorClass,
        sizeClass,
        textColorClass,
        hoverColorClass,
        ringClass,
        { 'rounded-full': rounded },
    );

    return (
        <AriaButton
            className={twMerge(classes, className)}
            {...rest}
        >
            {children}
        </AriaButton>
    );
};

export default Button;