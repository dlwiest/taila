import { Button } from '..';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

export default {
    title: 'Components/Button',
    component: Button,
};

export const Color = () => (
    <div className="space-x-1 space-y-1">
        <Button color="slate">Slate</Button>
        <Button color="gray">Gray</Button>
        <Button color="zinc">Zinc</Button>
        <Button color="neutral">Neutral</Button>
        <Button color="stone">Stone</Button>
        <Button color="red">Red</Button>
        <Button color="orange">Orange</Button>
        <Button color="amber">Amber</Button>
        <Button color="yellow">Yellow</Button>
        <Button color="lime">Lime</Button>
        <Button color="green">Green</Button>
        <Button color="emerald">Emerald</Button>
        <Button color="teal">Teal</Button>
        <Button color="cyan">Cyan</Button>
        <Button color="sky">Sky</Button>
        <Button color="blue">Blue</Button>
        <Button color="indigo">Indigo</Button>
        <Button color="violet">Violet</Button>
        <Button color="purple">Purple</Button>
        <Button color="fuchsia">Fuchsia</Button>
        <Button color="pink">Pink</Button>
        <Button color="rose">Rose</Button>
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