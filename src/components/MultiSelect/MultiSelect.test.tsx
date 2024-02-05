import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MultiSelect from './MultiSelect';
import SelectItem from '../SelectItem/SelectItem';

describe('MultiSelect Component', () => {
    test('Renders with placeholder text', () => {
        render(<MultiSelect placeholder="Select an item" />);

        expect(screen.getByText(/select an item/i)).toBeInTheDocument();
    });

    test('Opens and closes the popover', async () => {
        render(
            <MultiSelect items={[{ id: '1', name: 'Option 1' }]} onSelectionChange={jest.fn()} aria-label="Select an item">
                <SelectItem key="1" id="1" textValue="Option 1">
                    Option 1
                </SelectItem>
            </MultiSelect>
        );

        const button = screen.getByRole('button');

        act(() => {
            userEvent.click(button);
        });

        const option = await screen.findByText(/option 1/i);
        expect(option).toBeInTheDocument();

        act(() => {
            userEvent.click(button);
        });

        await waitFor(() => expect(screen.queryByText(/option 1/i)).not.toBeInTheDocument());
    });

    test('Selects items and updates selection', async () => {
        render(
            <MultiSelect items={[{ id: '1', name: 'Option 1' }]} onSelectionChange={jest.fn()} aria-label="Select an item">
                <SelectItem key="1" id="1" textValue="Option 1">
                    Option 1
                </SelectItem>
            </MultiSelect>
        );

        const button = screen.getByRole('button');

        act(() => {
            userEvent.click(button);
        });

        const option = await screen.findByText(/option 1/i);

        act(() => {
            userEvent.click(option);
        });

        await waitFor(() => {
            expect(button).toHaveTextContent(/option 1/i);
        });
    });

    test('Is disabled when isDisabled prop is true', () => {
        render(<MultiSelect isDisabled aria-label="Disabled select" />);
        
        const button = screen.getByRole('button');

        expect(button).toBeDisabled();
    });

    test('Shows error state', () => {
        render(<MultiSelect hasError aria-label="Error select" />);

        const button = screen.getByRole('button');

        expect(button).toHaveClass('ring-red-600');
    });

    test('Displays custom placeholder text', () => {
        render(<MultiSelect placeholder="Choose options" aria-label="Select an item" />);

        expect(screen.getByText(/choose options/i)).toBeInTheDocument();
    });
});