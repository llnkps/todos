import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import type { TodoItemProps } from '../../types/components';

export const TodoNote = ({ todo, onEdit, onDelete }: TodoItemProps) => {
	return (
		<>
			<div className='flex flex-col py-2 border-b border-gray-400'>
				<div className='flex justify-between'>
					<h4 className='text-black'>{todo.title}</h4>
					<div className='flex gap-2'>
						{onEdit && (
							<button
								onClick={() => onEdit(todo.id)}
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
				<p className='text-sm text-gray-400 mb-0.5'>{todo.tags}</p>
			</div>
		</>
	);
};
