import { render, screen, act } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
    test('Renders correctly', () => {
        render(<Input />);
        const inputElement = screen.getByRole('textbox');

        expect(inputElement).toBeInTheDocument();
    });

    test('Is disabled when isDisabled prop is true', () => {
        render(<Input isDisabled />);
        const inputElement = screen.getByRole('textbox');

        expect(inputElement).toBeDisabled();
    });

    test('Shows error state', () => {
        render(<Input hasError />);
        const inputElement = screen.getByRole('textbox');

        expect(inputElement).toHaveClass('ring-red-600');
    });

    test('Changes focus color based on focusColor prop', () => {
        render(<Input focusColor="green" />);
        const inputElement = screen.getByRole('textbox');

        act(() => {
        inputElement.focus();
        });

        expect(inputElement).toHaveClass('focus:ring-green-600');
    });

    test('Becomes rounded when rounded prop is true', () => {
        render(<Input rounded />);
        const inputElement = screen.getByRole('textbox');

        expect(inputElement).toHaveClass('rounded-full');
    });

    test('Applies custom class', () => {
        const customClass = 'my-custom-class';
        render(<Input className={customClass} />);
        const inputElement = screen.getByRole('textbox');
        
        expect(inputElement).toHaveClass(customClass);
    });
});
