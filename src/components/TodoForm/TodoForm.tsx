import { useState } from 'react';
import type { Todo } from '../../types/Todo';

interface TodoFormProps {
	onAddTodo: (todo: Omit<Todo, 'id'>) => void;
}

export const TodoForm = ({ onAddTodo }: TodoFormProps) => {
	const [title, setTitle] = useState<string>('');
	const [tags, setTags] = useState<string>('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const todo = {
			title,
			tags: tags.length ? tags.split(',') : [],
			id: Date.now().toString(),
		};
		onAddTodo(todo);

		setTitle('');
		setTags('');
	};
	const inputStyles = 'border-2 rounded-xl border-primary p-2';

	return (
		<form className='flex justify-between'>
			<div className='flex gap-2'>
				<input
					type='text'
					value={title}
					placeholder='Add a note'
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
