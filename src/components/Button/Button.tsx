import { Button as AriaButton } from 'react-aria-components';
import { ButtonProps } from './Button.types';
import { baseColorClasses, darkColorClasses, darkFocusClasses, darkHoverColorClasses, focusClasses, hoverColorClasses } from '../../shared/tailwindClases';

const Button = ({ color = "blue", children, ...rest }: ButtonProps) => {
    const colorKey = color as keyof typeof baseColorClasses;
    const colorClass = baseColorClasses[colorKey] || 'bg-blue-600';
    const hoverColorClass = hoverColorClasses[colorKey] || 'hover:bg-blue-500';
    const darkColorClass = darkColorClasses[colorKey] || 'dark:bg-blue-500';
    const darkHoverColorClass = darkHoverColorClasses[colorKey] || 'dark:hover:bg-blue-400';
    const focusClass = focusClasses[colorKey] || 'focus-visible:outline-blue-600';
    const darkFocusClass = darkFocusClasses[colorKey] || 'dark:focus-visible:outline-blue-500';

    return (
        <AriaButton
        className={`rounded ${colorClass} ${darkColorClass} px-2 py-1 text-xs font-semibold text-white shadow-sm ${hoverColorClass} ${darkHoverColorClass} ${focusClass} ${darkFocusClass}`}
            {...rest}
        >
            {children}
        </AriaButton>
    );
};

export default Button;