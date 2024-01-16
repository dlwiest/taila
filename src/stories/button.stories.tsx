import { Button } from '..';

export default {
    title: 'Components/Button',
    component: Button,
};

export const Color = () => (
    <div className="space-x-1">
        <Button color="indigo">Indigo</Button>
        <Button color="sky">Sky</Button>
        <Button color="teal">Teal</Button>
        <Button color="lime">Lime</Button>
        <Button color="rose">Rose</Button>
    </div>
);

export const Size = () => (
    <div className="space-x-1">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
    </div>
);

export const Variant = () => (
    <div className="space-x-1">
        <Button>Default</Button>
        <Button variant="soft">Soft</Button>
    </div>
);