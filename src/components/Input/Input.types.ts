import { InputProps as AriaInputProps } from 'react-aria-components';
import { TailwindColor } from '../../shared/tailwind.types';

interface InputProps extends AriaInputProps {
    className?: string;
    focusColor?: TailwindColor;
    hasError?: boolean;
    rounded?: boolean;
};

export type { InputProps }
