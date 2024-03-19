import { ReactNode } from 'react';
import { ModalOverlayProps } from 'react-aria-components';
import { Sizes } from '../../shared/tailwind.types';

interface ModalProps extends ModalOverlayProps, React.RefAttributes<HTMLDivElement> {
    ariaLabel?: string;
    ariaLabeledBy?: string;
    children?: ReactNode;
    className?: string;
    footer?: ReactNode;
    header?: ReactNode;
    isOpen?: boolean;
    overlayClassName?: string;
    size?: Exclude<Sizes, 'xs'>;
};

export type { ModalProps }
