import { useEffect, useRef, useState } from 'react';
import { Button, Popover, ListBox, DialogTrigger, Selection } from 'react-aria-components';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { MultiSelectProps } from './MultiSelect.types';
import { disabledInput, focusInnerRingClasses, innerRingClasses } from '../../shared/tailwindClases';
import { getEffectiveBackgroundColor } from '../../utility';

const MultiSelect = ({ children, className, defaultSelectedKeys, focusColor = 'blue', hasError, isDisabled, items, placeholder = 'Select an item', ...rest }: MultiSelectProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const listBoxRef = useRef<HTMLDivElement>(null);
    const labelMapRef = useRef<Map<number | string, string>>();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState<(number | string)[]>([]);
    const [buttonLabel, setButtonLabel] = useState('');
    const [buttonWidth, setButtonWidth] = useState(0);
    const [buttonBackgroundColor, setButtonBackgroundColor] = useState('');

    useEffect(() => {
        if (defaultSelectedKeys) {
            setSelectedKeys(defaultSelectedKeys);
        }
    }, [defaultSelectedKeys]);

    useEffect(() => {
        if (buttonRef.current) {
            setButtonWidth(buttonRef.current.clientWidth);
            setButtonBackgroundColor(getEffectiveBackgroundColor(buttonRef.current));
        }
    }, [buttonRef]);

    useEffect(() => {
        if (buttonRef.current && isOpen) {
            setButtonWidth(buttonRef.current.clientWidth);
            setButtonBackgroundColor(getEffectiveBackgroundColor(buttonRef.current));
        }
    }, [isOpen]);

    useEffect(() => {
        const keyToLabelMap = new Map();
        if (items) {
            for (let item of items) {
                keyToLabelMap.set(item.id, item.name);
            }
        } else if (children && Array.isArray(children)) {
            children.forEach((child) => {
                if (child.props?.id && child.props?.textValue) {
                    keyToLabelMap.set(child.props.id, child.props.textValue);
                }
            });
        }

        if (keyToLabelMap.size) {
            labelMapRef.current = keyToLabelMap;
        }
    }, [items, children]);

    useEffect(() => {
        const labels: string[] = [];

        selectedKeys.forEach((key) => {
            if (labelMapRef.current) {
                const label = labelMapRef.current.get(key);
                if (label) {
                    labels.push(label);
                }
            }
        });

        setButtonLabel(labels.join(', '));
    }, [selectedKeys, labelMapRef]);

    const handleSelectionChange = (keys: Selection) => {
        setSelectedKeys(Array.from(keys));
    };

    const buttonClasses = twMerge(
        clsx(
            'relative w-full rounded-md py-1.5 pl-3 pr-10 text-left bg-transparent text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:outline-none sm:text-sm sm:leading-6',
            disabledInput,
            {
                [innerRingClasses['red']]: hasError,
                [focusInnerRingClasses['red']]: hasError,
                [focusInnerRingClasses[focusColor as keyof typeof focusInnerRingClasses]]: !hasError,
            },
        ),
        className,
    );

    return (
        <DialogTrigger>
            <Button className={buttonClasses} ref={buttonRef} isDisabled={isDisabled}>
                <span className="block truncate">
                    {!selectedKeys.length ? <span className="text-gray-400 dark:text-gray-500">{placeholder}</span> : buttonLabel}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                </span>
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
                {({ isEntering, isExiting }) => {
                    if (isEntering && !isOpen) {
                        setTimeout(() => setIsOpen(true));
                    } else if (isExiting && isOpen) {
                        setTimeout(() => setIsOpen(false));
                    }

                    return (
                        <ListBox ref={listBoxRef} className="w-full max-h-60 overflow-auto bg-whitetext-base focus:outline-none sm:text-sm" items={items} onSelectionChange={handleSelectionChange} selectedKeys={selectedKeys} selectionMode="multiple" selectionBehavior="toggle" {...rest}>
                            {children}
                        </ListBox>
                    );
                }}

            </Popover>
        </DialogTrigger>
    );
};

export default MultiSelect;
