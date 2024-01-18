import { Input as AriaInput } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { InputProps } from './Input.types';
import { focusInnerRingClasses, innerRingClasses } from '../../shared/tailwindClases';

const Input = ({ className, focusColor = 'blue', hasError, ...rest }: InputProps) => {
    const innerRingClass = hasError ? innerRingClasses['red'] : '';
    const focusInnerRingClass = hasError ? focusInnerRingClasses['red'] : focusInnerRingClasses[focusColor];

    return (
        <AriaInput
            className={twMerge(`block w-full rounded-md border-0 py-1.5 px-3 bg-transparent text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none ${innerRingClass} ${focusInnerRingClass} sm:text-sm sm:leading-6`, className)}
            {...rest}
        />
    )
};

export default Input;