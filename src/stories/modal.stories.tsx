import { useReducer } from 'react';
import { Button, Modal } from '..';
import { Sizes } from '../shared/tailwind.types';

export default {
    title: 'Components/Modal',
    component: Modal,
};

type ModalSize = Exclude<Sizes, 'xs'>;

const modalSizeMap = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large',
    xl: 'Extra Large',
}

interface ModalState {
    size?: ModalSize;
    isOpen: boolean;
}

type ModalAction =
    | { type: 'set_size'; size: ModalSize; }
    | { type: 'close_modal'; };

const modalReducer = (state: ModalState, action: ModalAction) => {
    switch (action.type) {
        case 'set_size':
            return { ...state, size: action.size, isOpen: true };
        case 'close_modal':
            return { ...state, isOpen: false };
    }
};

const initialModalState: ModalState = {
    size: 'md',
    isOpen: false,
};

export const Size = () => {
    const [{ size: modalSize, isOpen: isModalOpen }, dispatch] = useReducer(modalReducer, initialModalState);

    const onOpenModal = (size: ModalSize) => () => dispatch({ type: 'set_size', size });
    const onCloseModal = () => dispatch({ type: 'close_modal' });

    return (
        <div>
            <div className="space-x-1 space-y-1">
                <Button onPress={onOpenModal('sm')}>Small</Button>
                <Button onPress={onOpenModal('md')}>Medium</Button>
                <Button onPress={onOpenModal('lg')}>Large</Button>
                <Button onPress={onOpenModal('xl')}>Extra Large</Button>
            </div>

            <Modal
                isDismissable
                isOpen={isModalOpen}
                onOpenChange={onCloseModal}
                size={modalSize}
                ariaLabel="Test Modal"
                header={<h3 className="text-lg font-semibold leading-6 text-gray-800 dark:text-gray-100">{modalSizeMap[modalSize!]} Modal</h3>}
                footer={<div className="flex flex-row-reverse"><Button variant="outline" onPress={onCloseModal}>Close</Button></div>}
            >
                <p className="text-gray-800 dark:text-gray-100">Add your modal content here.</p>
            </Modal>
        </div>
    );
};
