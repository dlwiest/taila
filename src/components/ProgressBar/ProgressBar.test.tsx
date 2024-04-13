import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('ProgressBar Component', () => {
    test('Renders ProgressBar with correct value', () => {
        render(<ProgressBar value={50} aria-label="Test Progress Bar" />);
        const progressBar = screen.getByRole('progressbar');
        expect(progressBar).toBeInTheDocument();
        expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    });

    test('Applies default color class', () => {
        render(<ProgressBar value={75} aria-label="Test Progress Bar" />);
        const innerBar = screen.getByTestId('progress-bar-inner');
        // Assuming "bg-blue" is the default class for blue color in your tailwind configuration
        expect(innerBar).toHaveClass('bg-blue-600');
    });

    test('Applies specified color class', () => {
        render(<ProgressBar color="red" value={25} aria-label="Test Progress Bar" />);
        const innerBar = screen.getByTestId('progress-bar-inner');
        // Assuming "bg-red" is the class for red color in your tailwind configuration
        expect(innerBar).toHaveClass('bg-red-600');
    });

    test('Renders with custom className', () => {
        render(<ProgressBar className="custom-class" value={60} aria-label="Test Progress Bar" />);
        const outerBar = screen.getByTestId('progress-bar-outer');
        expect(outerBar).toHaveClass('custom-class');
    });

    test('Inner bar width matches value prop', () => {
        const value = 30;
        render(<ProgressBar value={value} aria-label="Test Progress Bar" />);
        const innerBar = screen.getByTestId('progress-bar-inner');
        expect(innerBar).toHaveStyle(`width: ${value}%`);
    });
});