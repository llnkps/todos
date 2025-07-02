import { TodoNote } from '../TodoNote/TodoNote';

import type { TodosListProps } from '../../types/components';

export const TodosList = ({ todos, onEdit, onDelete }: TodosListProps) => {
	if (!todos || todos.length === 0) {
		return (
			<div>
				<h2 className='text-2xl font-bold text-black mb-4'>My Notes</h2>
				<p className='text-gray-500'>No notes yet. Create your first note!</p>
			</div>
		);
	}

	return (
		<div>
			<h2 className='text-2xl font-bold text-black mb-4'>My Notes</h2>
			<ul>
				{todos.map(todo => (
					<li key={todo.id}>
						<TodoNote todo={todo} onEdit={onEdit} onDelete={onDelete} />
					</li>
				))}
			</ul>
		</div>
	);
};
