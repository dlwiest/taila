import { Button } from '..';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { textColorClasses } from '../shared/tailwindClases';

export default {
    title: 'Components/Button',
    component: Button,
};

export const Color = () => (
    <div className="space-y-1 space-x-1">
        {Object.keys(textColorClasses).map((color) => (
            <Button key={color} color={color as keyof typeof textColorClasses}>{color.charAt(0).toUpperCase() + color.slice(1)}</Button>
        ))}
    </div>
);

export const Size = () => (
    <div className="space-x-1 space-y-1">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
    </div>
);

export const Variant = () => (
    <div className="space-x-1 space-y-1">
        <Button>Default</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="outline">Outline</Button>
        <Button rounded>Rounded</Button>
        <Button isDisabled>Disabled</Button>
    </div>
);

export const Icon = () => (
    <div className="space-x-1 space-y-1 flex-wrap items-end">
        <div className="inline-block align-bottom">
            <Button>
                <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Before
            </Button>
        </div>

        <div className="inline-block align-bottom">
            <Button>
                After
                <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            </Button>
        </div>
    </div>
);

