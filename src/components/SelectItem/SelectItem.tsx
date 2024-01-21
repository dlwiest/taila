import { ListBoxItem } from 'react-aria-components';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SelectItemProps } from './SelectItem.types';
import { bgColorClasses, textColorClasses } from '../../shared/tailwindClases';
import { CheckIcon } from '@heroicons/react/20/solid';

const SelectItem = ({ children, className, focusColor = 'blue', ...rest }: SelectItemProps) => {
    return (
        <ListBoxItem
            className={({ isHovered }) => (
                twMerge(
                    clsx(
                        'relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none cursor-pointer text-gray-900 dark:text-gray-100 hover:text-white',
                        {
                            [bgColorClasses[focusColor]]: isHovered,
                        }
                    ),
                    className
                )
            )}
            {...rest}>
            {({ isHovered, isSelected }) => (
                <>
                    <div className={clsx(
                        'block truncate',
                        {
                            'font-semibold': isSelected,
                            'font-normal': !isSelected
                        }
                    )}>
                        {children}
                    </div>

                    {isSelected ? (
                        <span
                            className={clsx(
                                'absolute inset-y-0 right-0 flex items-center pr-4',
                                {
                                    [textColorClasses[focusColor]]: !isHovered,
                                }
                            )}
                        >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                    ) : null}
                </>
            )}

        </ListBoxItem>
    );
};

export default SelectItem;
