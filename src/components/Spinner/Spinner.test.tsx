import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner Component', () => {
    test('Renders Spinner', () => {
        render(<Spinner />);
        const spinner = screen.getByRole('progressbar', {name: /loading/i});
        expect(spinner).toBeInTheDocument();
    });

    test('Applies default color class', () => {
        render(<Spinner />);
        const spinnerSvg = screen.getByTestId('spinner-svg');
        expect(spinnerSvg).toHaveClass('text-gray-600');
    });

    test('Applies specified color class', () => {
        render(<Spinner color="red" />);
        const spinnerSvg = screen.getByTestId('spinner-svg');
        expect(spinnerSvg).toHaveClass('text-red-600');
    });

    test('Merges custom class names', () => {
        render(<Spinner className="custom-class" />);
        const spinnerSvg = screen.getByTestId('spinner-svg');
        expect(spinnerSvg).toHaveClass('custom-class');
    });
});