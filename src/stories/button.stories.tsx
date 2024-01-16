import { Button } from '..';

export default {
    title: 'Components/Button',
    component: Button,
}

export const Color = () => (
    <div className="space-x-1">
        <Button color="blue">Blue</Button>
        <Button color="green">Green</Button>
        <Button color="red">Red</Button>
    </div>
);