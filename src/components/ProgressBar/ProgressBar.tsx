import { ProgressBarProps } from './ProgressBar.types';
import { ProgressBar as AriaProgressBar } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { bgColorClasses } from '../../shared/tailwindClases';

const ProgressBar = ({ className, color = 'blue', ...rest }: ProgressBarProps) => {
    const outerBarClasses = twMerge('h-2 w-full bg-gray-200 rounded-md', className);
    const innerBarClasses = twMerge('h-full rounded-md', bgColorClasses[color]);

    return (
        <AriaProgressBar {...rest}>
            {({ percentage }) => (
                <div className={outerBarClasses} data-testid="progress-bar-outer">
                    <div className={innerBarClasses} style={{ width: `${percentage}%` }} data-testid="progress-bar-inner" />
                </div>
            )}
        </AriaProgressBar>
    );
};

export default ProgressBar;
