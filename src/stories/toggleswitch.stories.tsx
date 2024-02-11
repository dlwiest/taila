import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { ToggleSwitch } from '..';
import { textColorClasses } from '../shared/tailwindClases';
import { useState } from 'react';

export default {
    title: 'Components/ToggleSwitch',
    component: ToggleSwitch,
};

export const Color = () => (
    <div className="space-y-1 flex flex-col">
        {Object.keys(textColorClasses).map((color) => (
            <div key={color} className="flex items-center">
                <span className="text-gray-800 dark:text-gray-100 w-24 capitalize">{color}</span>
                <ToggleSwitch color={color as keyof typeof textColorClasses} />
            </div>
        ))}
    </div>
);

export const Error = () => <ToggleSwitch hasError />;

export const Disabled = () => (
    <div className="space-y-1 flex flex-col">
        <div className="flex items-center">
            <span className="text-gray-800 dark:text-gray-100 w-24">Normal</span>
            <ToggleSwitch />
        </div>

        <div className="flex items-center">
            <span className="text-gray-800 dark:text-gray-100 w-24">Disabled</span>
            <ToggleSwitch isDisabled />
        </div>
    </div>
);

export const Icon = () => {
    const [darkMode, setDarkMode] = useState(false);
    console.log(darkMode);

    return (
        <ToggleSwitch onChange={setDarkMode} focusColor="blue" color={darkMode ? 'purple' : 'yellow'}>
            {darkMode ? (
                <MoonIcon className="h-4 w-4 mt-0.5 ml-0.5" aria-hidden="true" data-testid="icon" />
            ) : (
                <SunIcon className="h-4 w-4 mt-0.5 ml-0.5" aria-hidden="true" data-testid="icon" />
            )}
        </ToggleSwitch>
    );
};
