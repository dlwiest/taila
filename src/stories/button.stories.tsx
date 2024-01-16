import { Button } from '..';

export default {
    title: 'Components/Button',
    component: Button,
}

export const Color = () => (
    <div>
        <Button color="blue">Blue</Button>
        <Button color="green">Green</Button>
        <Button color="red">Red</Button>
        <Button color="red">Dark Red</Button>
    </div>
);