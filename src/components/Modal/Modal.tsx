import { Modal as AriaModal, ModalOverlay, Dialog, Heading } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { ModalProps } from './Modal.types';
import clsx from 'clsx';

const sizeValues = {
    sm: "300px",
    md: "500px",
    lg: "800px",
    xl: "1140px",
};

const Modal = ({ ariaLabel, ariaLabeledBy, children, className, overlayClassName, footer, header, isOpen = true, size = 'md', ...rest }: ModalProps) => { 
    return (
        <ModalOverlay
            isOpen={isOpen}
            isDismissable
            className={({ isEntering, isExiting }) => twMerge(clsx(
                    'bg-gray-500 bg-opacity-75 fixed w-screen h-screen top-0 left-0',
                    {
                        'animate-in fade-in ease-out duration-200': isEntering,
                        'animate-out fade-out ease-in duration-150': isExiting,
                    }
                ), overlayClassName)
            }
            {...rest}
        >
            {({ isEntering, isExiting }) => (
                <div className="flex justify-center items-center h-full w-full">
                    <AriaModal className="w-full px-1 flex justify-center" style={{ marginTop: '-20vh' }}>
                        <Dialog
                            className={twMerge(clsx(
                                "bg-white dark:bg-zinc-900 outline-none rounded-lg px-4 py-4 shadow-xl max-w-full",
                                {
                                    'animate-in zoom-in-95 ease-out duration-200': isEntering,
                                    'animate-out zoom-out-95 ease-in duration-150': isExiting,
                                }
                            ), className)}
                            style={{ width: sizeValues[size]}}
                            aria-label={ariaLabel}
                            aria-labelledby={ariaLabeledBy}
                        >
                            {header &&
                                <Heading slot="title" className="mb-2">
                                    {header}
                                </Heading>
                            }
                            {children}
                            {footer &&
                                <div className="mt-4">
                                    {footer}
                                </div>
                            }
                        </Dialog>
                    </AriaModal>
                </div>
            )}

        </ModalOverlay>
    );
};

export default Modal;
