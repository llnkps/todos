import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import type { TodoItemProps } from '../../types/components';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

export const TodoNote = ({ todo, onEdit, onDelete }: TodoItemProps) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const [newTitle, setNewTitle] = useState('');
	const [newTags, setNewTags] = useState('');

	return (
		<>
			<div className='flex flex-col py-2 border-b border-gray-400'>
				<div className='flex justify-between mb-2'>
					<h4 className='text-black text-lg'>{todo.title}</h4>
					<div className='flex gap-2'>
						{onEdit && (
							<button
								onClick={() => setIsModalOpen(true)}
								className='hover:text-primary transition cursor-pointer'
								title='Edit note'
							>
								<AiOutlineEdit size={20} />
							</button>
						)}
						{onDelete && (
							<button
								onClick={() => onDelete(todo.id)}
								className='hover:text-red-500 transition cursor-pointer'
								title='Delete note'
							>
								<AiOutlineDelete size={20} />
							</button>
						)}
					</div>
				</div>
				<div className='flex gap-2'>
					{todo.tags.map(tag => (
						<p className='text-sm text-white mb-0.5 px-3 py-1.5 bg-primary rounded-xl'>
							{tag}
						</p>
					))}
				</div>
			</div>

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<div className='flex flex-col gap-4'>
					<h2 className='text-black text-xl font-bold'>Edit note</h2>
					<div className='flex gap-2'>
						<input
							type='text'
							value={newTitle}
							onChange={e => setNewTitle(e.target.value)}
							className='border-2 p-2 rounded-xl border-primary'
						/>
						<input
							type='text'
							value={newTags}
							onChange={e => setNewTags(e.target.value)}
							className='border-2 p-2 rounded-xl border-primary'
						/>
					</div>
					<div className='flex gap-4'>
						<button
							onClick={() => {
								if (onEdit) {
									onEdit(todo.id, {
										title: newTitle,
										tags: newTags.split(',').map(tag => tag.trim()),
									});
								}
								setIsModalOpen(false);
							}}
							className='py-2 px-4 bg-primary rounded-xl text-white cursor-pointer hover:brightness-90 transition'
						>
							Save
						</button>
						<button
							onClick={() => setIsModalOpen(false)}
							className='py-2 px-4 bg-red rounded-xl text-white cursor-pointer hover:brightness-90 transition'
						>
							Close
						</button>
					</div>
				</div>
			</Modal>
		</>
	);
};
