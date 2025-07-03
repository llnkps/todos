import { useState } from 'react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div
			className='bg-black/50 fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-50'
			onClick={onClose}
		>
			<div
				className='bg-white p-5 rounded-lg relative max-w-lg w-[90%] m-h-[90%] overflow-y-auto'
				onClick={event => event.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};
