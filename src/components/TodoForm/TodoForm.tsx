import { useState } from 'react';
import type { Todo } from '../../types/Todo';

interface TodoFormProps {
	onAddTodo: (todo: Omit<Todo, 'id'>) => void;
}

export const TodoForm = ({ onAddTodo }: TodoFormProps) => {
	const [title, setTitle] = useState<string>('');
	const [tags, setTags] = useState<string>('');
	const [error, setError] = useState<string>('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!title.trim()) {
			setError('Please fill title');
			return;
		}

		const todo = {
			title,
			tags: tags.length ? tags.split(',') : [],
		};
		onAddTodo(todo);

		setTitle('');
		setTags('');
		setError('');
	};
	const inputStyles = 'border-2 rounded-xl border-primary p-2';

	return (
		<form className='flex justify-between'>
			<div className='flex gap-2'>
				<input
					type='text'
					value={title}
					placeholder='Add a new todo...'
					onChange={e => {
						setTitle(e.target.value);
					}}
					className={inputStyles}
				/>
				<input
					type='text'
					value={tags}
					placeholder='Tags'
					onChange={e => {
						setTags(e.target.value);
					}}
					className={inputStyles}
				/>
			</div>
			{error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
			<button
				type='submit'
				onClick={handleSubmit}
				className='bg-primary text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-[#6366f1]'
			>
				Add a note
			</button>
		</form>
	);
};
