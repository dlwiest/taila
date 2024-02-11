import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToggleSwitch from './ToggleSwitch';

describe('ToggleSwitch Component', () => {
    test('Renders correctly', () => {
        render(<ToggleSwitch aria-label="Toggle switch" />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('Is disabled when isDisabled prop is true', () => {
        render(<ToggleSwitch isDisabled aria-label="Disabled toggle switch" />);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    test('Toggles isSelected state on click', () => {
        render(<ToggleSwitch aria-label="Toggle switch" />);
        const toggleButton = screen.getByRole('button');
        fireEvent.click(toggleButton);

        expect(toggleButton).toHaveAttribute('aria-pressed', 'true');
    });

    test('Renders children correctly', () => {
        render(
            <ToggleSwitch aria-label="Toggle switch with icon">
                <span data-testid="child-icon"></span>
            </ToggleSwitch>
        );
        expect(screen.getByTestId('child-icon')).toBeInTheDocument();
    });
});