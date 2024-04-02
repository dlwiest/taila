import { Spinner } from '..';
import { textColorClasses } from '../shared/tailwindClases';

export default {
    title: 'Components/Spinner',
    component: Spinner,
};

export const Color = () => (
    <div className="flex items-end space-x-1">
        {Object.keys(textColorClasses).map((color) => (
            <Spinner key={color} color={color as keyof typeof textColorClasses} />
        ))}
    </div>
);

export const Size = () => (
    <div className="flex items-end space-x-2">
        <Spinner className="h-2 w-2" />
        <Spinner className="h-4 w-4" />
        <Spinner className="h-6 w-6" />

        <div className="h-8 w-8">
            <Spinner className="h-full w-full" />
        </div>
    </div>
);
