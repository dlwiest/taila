import { Button as AriaButton } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './Button.types';
import { baseBgColorClasses, baseTextColorClasses, darkBgColorClasses, darkHoverBgColorClasses, hoverBgColorClasses, softBaseBgColorClasses, softHoverBgColorClasses, baseInnerRingClasses, darkInnerRingClasses } from '../../shared/tailwindClases';

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
            backgroundColorClass: baseBgColorClasses[color],
            hoverColorClass: hoverBgColorClasses[color],
            darkBackgroundColorClass: darkBgColorClasses[color],
            darkHoverColorClass: darkHoverBgColorClasses[color],
            ringClass: '',
            darkRingClass: '',
        },
        soft: {
            textColorClass: baseTextColorClasses[color],
            backgroundColorClass: softBaseBgColorClasses[color],
            hoverColorClass: softHoverBgColorClasses[color],
            darkBackgroundColorClass: softBaseBgColorClasses[color], // TODO - We may want to add a dark mode variant for these
            darkHoverColorClass: softHoverBgColorClasses[color], // ^
            ringClass: '',
            darkRingClass: '',
        },
        outline: {
            textColorClass: baseTextColorClasses[color],
            backgroundColorClass: '',
            hoverColorClass: hoverBgColorClasses[color],
            darkBackgroundColorClass: darkBgColorClasses[color],
            darkHoverColorClass: darkHoverBgColorClasses[color],
            ringClass: baseInnerRingClasses[color],
            darkRingClass: darkInnerRingClasses[color],

        },
    };

    const { textColorClass, backgroundColorClass, hoverColorClass, darkBackgroundColorClass, darkHoverColorClass, ringClass, darkRingClass } = variants[variant];
    const sizeClass = sizeClasses[size];

    return (
        <AriaButton
            className={twMerge(`rounded ${backgroundColorClass} ${darkBackgroundColorClass} ${sizeClass} font-semibold ${textColorClass} shadow-sm ${hoverColorClass} ${darkHoverColorClass} inline-flex items-center gap-x-1.5 disabled:opacity-50 disabled:cursor-not-allowed ${ringClass} ${darkRingClass}`, className)}
            {...rest}
        >
            {children}
        </AriaButton>
    );
};

export default Button;