import { Input as AriaInput } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { InputProps } from './Input.types';
import { disabledInput, focusInnerRingClasses, innerRingClasses } from '../../shared/tailwindClases';
import clsx from 'clsx';

const Input = ({ className, focusColor = 'blue', hasError, isDisabled, rounded, ...rest }: InputProps) => {
    const classes = clsx(
        'block w-full rounded-md border-0 py-1.5 px-3 bg-transparent text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none sm:text-sm sm:leading-6 disabled:bg-black dark:disabled:bg-white disabled:bg-opacity-5 dark:disabled:bg-opacity-5 disabled:cursor-not-allowed dark:disabled:text-opacity-70 disabled:text-opacity-70',
        disabledInput,
        {
            [innerRingClasses['red']]: hasError,
            [hasError ? focusInnerRingClasses['red'] : focusInnerRingClasses[focusColor]]: true,
            'rounded-full': rounded,
        }
    );

    return (
        <AriaInput
            className={twMerge(classes, className)}
            disabled={isDisabled || rest.disabled}
            {...rest}
        />
    );
};

export default Input;