import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ToggleButton } from 'react-aria-components';
import { ToggleSwitchProps } from './ToggleSwitch.types';
import { bgColorClasses, innerRingClasses, ringColorClasses, textColorClasses } from '../../shared/tailwindClases';

const ToggleSwitch = ({ children, className, color = 'blue', hasError, ...rest }: ToggleSwitchProps) => {
    return (
        <ToggleButton {...rest} className="focus:outline-none">
            {({ isSelected, isFocused }) => (
                <div className={clsx(
                        clsx(
                            isFocused ? `ring-2 ${ringColorClasses[hasError ? 'red' : color]}` : 'ring-0',
                            hasError ? innerRingClasses['red'] : '',
                            rest.isDisabled ? 'opacity-50 cursor-not-allowed' : '',
                            'rounded-full pt-1',
                        )
                    )}>
                    <div className="px-1">
                        <div
                            className={twMerge(clsx(
                                isSelected ? bgColorClasses[hasError ? 'red' : color] : 'bg-gray-200 dark:bg-gray-700',
                                rest.isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
                                'relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
                            ), className)}
                        >
                            <span
                                aria-hidden="true"
                                className={clsx(
                                    isSelected ? 'translate-x-5' : 'translate-x-0',
                                    rest.isDisabled ? 'cursor-not-allowed' : '',
                                    'pointer-events-none relative inline-block items-center justify-center h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                                    textColorClasses[color],
                                )}
                            >{children}</span>
                        </div>
                    </div>
                </div>
            )}
        </ToggleButton>
    );
};

export default ToggleSwitch;