import { useEffect, useRef, useState } from 'react';
import { Select as AriaSelect, SelectValue, Button, Popover, ListBox } from 'react-aria-components';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { SelectProps } from './Select.types';
import { disabledInput, focusInnerRingClasses, innerRingClasses } from '../../shared/tailwindClases';
import { getEffectiveBackgroundColor } from '../../utility';

const Select = <T extends object>({ children, className, focusColor = 'blue', hasError, items, placeholder, ...rest }: SelectProps<T>) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const [buttonWidth, setButtonWidth] = useState(0);
    const [buttonBackgroundColor, setButtonBackgroundColor] = useState('');

    useEffect(() => {
        if (buttonRef.current) {
            setButtonWidth(buttonRef.current.clientWidth);
            setButtonBackgroundColor(getEffectiveBackgroundColor(buttonRef.current));
        }
    }, [buttonRef]);

    useEffect(() => {
        if (isOpen && buttonRef.current) {
            setButtonWidth(buttonRef.current.clientWidth);
            setButtonBackgroundColor(getEffectiveBackgroundColor(buttonRef.current));
        }
    }, [isOpen]);

    const buttonClasses = twMerge(
        clsx(
            'relative w-full rounded-md py-1.5 pl-3 pr-10 text-left bg-transparent text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:outline-none sm:text-sm sm:leading-6',
            disabledInput,
            {
                [innerRingClasses['red']]: hasError,
                [focusInnerRingClasses['red']]: hasError,
                [focusInnerRingClasses[focusColor]]: !hasError,
            },
        ),
        className,
    );

    return (
        <AriaSelect {...rest}>
            {({ isOpen }) => {
                setTimeout(() => {
                    setIsOpen(isOpen);
                });

                return (
                    <>
                        <Button
                            className={buttonClasses}
                            ref={buttonRef}
                        >
                            <SelectValue>
                                {({ isPlaceholder, selectedText }) => {
                                    const buttonText = isPlaceholder ? <span className="text-gray-400 dark:text-gray-500">{placeholder || 'Select an item'}</span> : selectedText;

                                    return (
                                        <>
                                            <span className="block truncate">{buttonText}</span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                                            </span>
                                        </>
                                    );
                                }}
                            </SelectValue>
                        </Button>

                        <Popover
                            className={({ isEntering, isExiting }) => clsx(
                                'rounded-md shadow-sm ring-1 ring-gray-300 dark:ring-gray-600',
                                {
                                    'animate-in fade-in ease-out duration-200': isEntering,
                                    'animate-out fade-out ease-in duration-150': isExiting,
                                }
                            )}
                            style={{ width: `${buttonWidth}px`, backgroundColor: buttonBackgroundColor }}
                        >
                            <ListBox className="w-full max-h-60 overflow-auto bg-whitetext-base focus:outline-none sm:text-sm" items={items}>
                                {children}
                            </ListBox>
                        </Popover>
                    </>
                );
            }}

        </AriaSelect>
    );
};

export default Select;