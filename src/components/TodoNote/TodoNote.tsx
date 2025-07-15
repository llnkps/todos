import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import type { TodoItemProps } from '../../types/components';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { Tag } from '../Tag/Tag';

export const TodoNote = ({ todo, onEdit, onDelete }: TodoItemProps) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const [newTitle, setNewTitle] = useState('');
	const [newTags, setNewTags] = useState('');
	const [errors, setErrors] = useState<{ title?: string; tags?: string }>({});

	const handleOpenModal = () => {
		setNewTitle(todo.title);
		setNewTags(todo.tags.join(','));
		setErrors({});
		setIsModalOpen(true);
	};

	const validateForm = () => {
		const newErrors: { title?: string; tags?: string } = {};

		if (!newTitle.trim()) {
			newErrors.title = 'Title is required';
		} else if (newTitle.trim().length < 3) {
			newErrors.title = 'Title must be at least 3 characters';
		} else if (newTitle.trim().length > 100) {
			newErrors.title = 'Title must be less than 100 characters';
		}

		if (newTags.trim()) {
			const tags = newTags
				.split(',')
				.map(tag => tag.trim())
				.filter(tag => tag);

			if (tags.length > 5) {
				newErrors.tags = 'Maximum 5 tags allowed';
			}

			const invalidTags = tags.filter(tag => tag.length > 10);
			if (invalidTags.length > 0) {
				newErrors.tags = 'Each tag must be less than 10 characters';
			}

			const duplicateTags = tags.filter(
				(tag, index) => tags.indexOf(tag) !== index
			);
			if (duplicateTags.length > 0) {
				newErrors.tags = 'Duplicate tags are not allowed';
			}
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSave = () => {
		if (!validateForm()) {
			return;
		}

		if (onEdit) {
			const tags = newTags
				.split(',')
				.map(tag => tag.trim())
				.filter(tag => tag);

			onEdit(todo.id, {
				title: newTitle.trim(),
				tags: tags,
			});
		}

		setIsModalOpen(false);
	};

	return (
		<>
			<div className='flex flex-col py-2 border-b border-gray-400'>
				<div className='flex justify-between mb-2'>
					<h4 className='text-black text-lg'>{todo.title}</h4>
					<div className='flex gap-2'>
						{onEdit && (
							<button
								onClick={handleOpenModal}
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
					{todo.tags.map((tag, index) => (
						<Tag key={index} tag={tag} />
					))}
				</div>
			</div>

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<div className='flex flex-col gap-4'>
					<h2 className='text-black text-xl font-bold'>Edit note</h2>
					<div className='flex gap-2'>
						<div className='flex flex-col gap-1'>
							<label className='text-sm font-medium text-gray-700'>
								Title *
							</label>
							<input
								type='text'
								value={newTitle}
								onChange={e => setNewTitle(e.target.value)}
								className={`border-2 p-2 rounded-xl ${
									errors.title ? 'border-red-500' : 'border-primary'
								}`}
								placeholder='Enter title...'
							/>
							{errors.title && (
								<p className='text-red-500 text-sm'>{errors.title}</p>
							)}
						</div>

						<div className='flex flex-col gap-1'>
							<label className='text-sm font-medium text-gray-700'>
								Tags (comma separated)
							</label>
							<input
								type='text'
								value={newTags}
								onChange={e => setNewTags(e.target.value)}
								className={`border-2 p-2 rounded-xl ${
									errors.tags ? 'border-red-500' : 'border-primary'
								}`}
								placeholder='tag1, tag2, tag3...'
							/>
							{errors.tags && (
								<p className='text-red-500 text-sm'>{errors.tags}</p>
							)}
							<p className='text-xs text-gray-500'>
								Max 10 tags, each up to 20 characters
							</p>
						</div>
					</div>

					<div className='flex gap-4'>
						<button
							onClick={handleSave}
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
