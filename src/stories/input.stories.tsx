import { Input } from '..';
import { textColorClasses } from '../shared/tailwindClases';

export default {
    title: 'Components/Input',
    component: Input,
};

export const Color = () => (
    <div className="space-y-1">
        {Object.keys(textColorClasses).map((color) => (
            <Input key={color} focusColor={color as keyof typeof textColorClasses} placeholder={color.charAt(0).toUpperCase() + color.slice(1)} className="w-96" />
        ))}
    </div>
);

export const Error = () => (
    <Input placeholder="Error" hasError className="w-96" />
)

export const Disabled = () => (
    <div className="space-y-1">
        <Input placeholder="Normal" className="w-96" />
        <Input placeholder="Disabled with Placeholder" disabled className="w-96" />
        <Input value="Disabled with Value" disabled className="w-96" />
    </div>
)