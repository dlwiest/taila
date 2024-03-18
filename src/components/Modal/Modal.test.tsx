import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
    test('renders modal when isOpen is true', () => {
        render(
            <Modal
                isOpen={true}
                ariaLabel="Test Modal"
                header={<span>Test Header</span>}
                footer={<button>Close</button>}
            >
                <p>Modal Content</p>
            </Modal>
        );

        expect(screen.getByText('Modal Content')).toBeInTheDocument();
        expect(screen.getByText('Test Header')).toBeInTheDocument();
        expect(screen.getByText('Close')).toBeInTheDocument();
    });

    test('does not render modal when isOpen is false', () => {
        render(
            <Modal
                isOpen={false}
                ariaLabel="Test Modal"
                header={<span>Test Header</span>}
                footer={<button>Close</button>}
            >
                <p>Modal Content</p>
            </Modal>
        );

        // Check if the modal content is not rendered
        expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });

    test('modal size changes according to the size prop', () => {
        const { rerender } = render(
            <Modal
                isOpen={true}
                size="sm"
                ariaLabel="Test Modal"
            >
                <p>Modal Content</p>
            </Modal>
        );

        expect(screen.getByRole('dialog')).toHaveStyle({ width: '300px' });

        rerender(
            <Modal
                isOpen={true}
                size="lg"
                ariaLabel="Test Modal"
            >
                <p>Modal Content</p>
            </Modal>
        );

        expect(screen.getByRole('dialog')).toHaveStyle({ width: '800px' });
    });

    test('closes modal on close button click', () => {
        const onClose = jest.fn();
        render(
            <Modal
                isOpen={true}
                onOpenChange={onClose}
                ariaLabel="Test Modal"
                footer={<button onClick={onClose}>Close</button>}
            >
                <p>Modal Content</p>
            </Modal>
        );

        fireEvent.click(screen.getByText('Close'));

        expect(onClose).toHaveBeenCalled();
    });
});