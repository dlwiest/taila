import { Button as AriaButton } from 'react-aria-components';
import { ButtonProps } from './Button.types';
import { baseBgColorClasses, baseTextColorClasses, darkBgColorClasses, darkHoverBgColorClasses, hoverBgColorClasses, softBaseBgColorClasses, softHoverBgColorClasses } from '../../shared/tailwindClases';

const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-2 py-1 text-sm',
    md: 'px-2.5 py-1.5 text-sm',
    lg: 'px-3 py-2 text-sm',
    xl: 'px-3.5 py-2.5 text-sm',
};

const Button = ({ color = "blue", size = 'md', variant = 'default', children, ...rest }: ButtonProps) => {
    const variants = {
        default: {
            textColorClass: 'text-white',
            backgroundColorClass: baseBgColorClasses[color],
            hoverColorClass: hoverBgColorClasses[color],
            darkBackgroundColorClass: darkBgColorClasses[color],
            darkHoverColorClass: darkHoverBgColorClasses[color],
        },
        soft: {
            textColorClass: baseTextColorClasses[color],
            backgroundColorClass: softBaseBgColorClasses[color],
            hoverColorClass: softHoverBgColorClasses[color],
            darkBackgroundColorClass: softBaseBgColorClasses[color], // TODO - We may want to add a dark mode variant for these
            darkHoverColorClass: softHoverBgColorClasses[color], // ^
        }
    }

    const { textColorClass, backgroundColorClass, hoverColorClass, darkBackgroundColorClass, darkHoverColorClass } = variants[variant];
    const sizeClass = sizeClasses[size];

    return (
        <AriaButton
            className={`rounded ${backgroundColorClass} ${darkBackgroundColorClass} ${sizeClass} font-semibold ${textColorClass} shadow-sm ${hoverColorClass} ${darkHoverColorClass}`}
            {...rest}
        >
            {children}
        </AriaButton>
    );
};

export default Button;