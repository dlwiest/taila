import { useEffect, useRef, useState } from 'react';
import { SelectValue, Button, Popover, ListBox, DialogTrigger, OverlayArrow, Dialog, ListBoxItem, Selection } from 'react-aria-components';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { MultiSelectProps } from './MultiSelect.types';
import { disabledInput, focusInnerRingClasses, innerRingClasses } from '../../shared/tailwindClases';
import { getEffectiveBackgroundColor } from '../../utility';

const MultiSelect = <T extends object>({ children, className, focusColor = 'blue', hasError, items, ...rest }: MultiSelectProps<T>) => {
    const listBoxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log('listBoxRef or children changed');
        console.log(listBoxRef.current);
        if (listBoxRef.current) {
            const options = listBoxRef.current.querySelectorAll('[role="option"]');
            const keyToLabelMap = new Map();
            options.forEach((option: Element) => {
                const key = option.getAttribute('data-key');
                const label = option.textContent;
                if (key) {
                    keyToLabelMap.set(key, label);
                }
            });
            console.log(keyToLabelMap);
        }
    }, [listBoxRef, children]);

    const handleSelectionChange = (keys: Selection) => {
        const values = Array.from(keys);
        console.log('selected values', values);
    };
    return (
        <DialogTrigger>
            <Button>Test</Button>
            <Popover
                className={({ isEntering, isExiting }) => clsx(
                    'rounded-md shadow-sm ring-1 ring-gray-300 dark:ring-gray-600',
                    {
                        'animate-in fade-in ease-out duration-200': isEntering,
                        'animate-out fade-out ease-in duration-150': isExiting,
                    }
                )}
                style={/*{ width: `${buttonWidth}px`, backgroundColor: buttonBackgroundColor }*/{}}
            >
                <ListBox ref={listBoxRef} className="w-full max-h-60 overflow-auto bg-whitetext-base focus:outline-none sm:text-sm" items={items} onSelectionChange={handleSelectionChange} selectionMode="multiple" selectionBehavior="toggle">
                    {children}
                </ListBox>
            </Popover>
        </DialogTrigger>
    );
};

export default MultiSelect;
