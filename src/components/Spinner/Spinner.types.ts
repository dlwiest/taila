import { ProgressBarProps } from 'react-aria-components';
import { TailwindColor } from '../../shared/tailwind.types';

interface SpinnerProps extends ProgressBarProps {
    className?: string;
    color?: TailwindColor;
};

export type { SpinnerProps }
