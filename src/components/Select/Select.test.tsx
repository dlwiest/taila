import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './Select';
import SelectItem from '../SelectItem/SelectItem';

describe('Select Component', () => {
    const items = [
        { id: '1', name: 'Option 1' },
        { id: '2', name: 'Option 2' },
        { id: '3', name: 'Option 3' },
    ];

    test('Renders with placeholder text', () => {
        render(<Select placeholder="Select an item" aria-label="Select an item" />);

        expect(screen.getByText(/select an item/i)).toBeInTheDocument();
    });

    test('Opens and closes the popover', async () => {
        render(
            <Select items={items} onSelectionChange={jest.fn()} aria-label="Select an item">
                {items.map((item) => (
                    <SelectItem key={item.id} id={item.id} textValue={item.name}>
                        {item.name}
                    </SelectItem>
                ))}
            </Select>
        );

        const button = screen.getByRole('button');

        act(() => {
            userEvent.click(button);
        });

        const option = await screen.findByRole('option', { name: /option 1/i });
        expect(option).toBeInTheDocument();

        act(() => {
            userEvent.click(button);
        });

        await waitFor(() => expect(screen.queryByRole('option', { name: /option 1/i })).not.toBeInTheDocument());
    });

    test('Selects items and updates selection', async () => {
        render(
            <Select items={items} onSelectionChange={jest.fn()} aria-label="Select an item">
                {items.map((item) => (
                    <SelectItem key={item.id} id={item.id} textValue={item.name}>
                        {item.name}
                    </SelectItem>
                ))}
            </Select>
        );

        const button = screen.getByRole('button');

        act(() => {
            userEvent.click(button);
        });

        const option = await screen.findByRole('option', { name: /option 1/i });

        act(() => {
            userEvent.click(option);
        });

        await waitFor(() => {
            expect(button).toHaveTextContent(/option 1/i);
        });
    });

    test('Is disabled when isDisabled prop is true', () => {
        render(<Select isDisabled aria-label="Disabled select" />);

        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    test('Shows error state', () => {
        render(<Select hasError aria-label="Error select" />);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('ring-red-600');
    });

    test('Displays custom placeholder text', () => {
        render(<Select placeholder="Choose options" aria-label="Select an item" />);

        expect(screen.getByText(/choose options/i)).toBeInTheDocument();
    });
});