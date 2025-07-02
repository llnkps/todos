import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

interface TodoItemProps {
	id: string;
	title: string;
	tags: string;
}

export const TodoNote = ({ title, tags }: TodoItemProps) => {
	return (
		<>
			<div className='flex flex-col py-2 cursor-pointer border-b border-gray-400'>
				<div className='flex justify-between'>
					<h4 className='text-black'>{title}</h4>
					<div className='flex gap-2'>
						<button className='hover:text-primary transition'>
							<AiOutlineEdit size={20} />
						</button>
						<button className='hover:text-red transition'>
							<AiOutlineDelete size={20} />
						</button>
					</div>
				</div>
				<p className='text-sm text-gray-400 mb-0.5'>{tags}</p>
			</div>
		</>
	);
};
