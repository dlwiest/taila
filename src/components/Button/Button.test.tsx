import { render, screen } from '@testing-library/react';
import Button from './Button';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { ButtonVariants } from './Button.types';

describe('Button Component', () => {
    test('Renders button with text', () => {
        render(<Button>Test Button</Button>);
        expect(screen.getByRole('button', { name: /test button/i })).toBeInTheDocument();
    });

    test('Applies color class', () => {
        render(<Button color="red">Color Test</Button>);
        const button = screen.getByRole('button', { name: /color test/i });
        expect(button).toHaveClass('bg-red-600');
    });

    test('Changes size based on size prop', () => {
        render(<Button size="lg">Large Button</Button>);
        const button = screen.getByRole('button', { name: /large button/i });
        expect(button).toHaveClass('px-3 py-2');
    });

    test.each([
        ['default', 'text-white'],
        ['soft', 'dark:text-white'],
        ['outline', 'hover:text-white'],
    ])('Renders %s variant with correct text color class', (variant, expectedClass) => {
        render(<Button variant={variant as ButtonVariants}>Variant Test</Button>);
        const button = screen.getByRole('button', { name: /variant test/i });
        expect(button).toHaveClass(expectedClass);
    });

    test('Renders rounded button', () => {
        render(<Button rounded>Rounded Button</Button>);
        const button = screen.getByRole('button', { name: /rounded button/i });
        expect(button).toHaveClass('rounded-full');
    });

    test('Button is disabled when isDisabled prop is true', () => {
        render(<Button isDisabled>Disabled Button</Button>);
        const button = screen.getByRole('button', { name: /disabled button/i });
        expect(button).toBeDisabled();
    });

    test('Renders button with icon', () => {
        render(
            <Button>
                <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" data-testid="icon" />
                Icon Button
            </Button>
        );

        expect(screen.getByRole('button', { name: /icon button/i })).toBeInTheDocument();
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
});
