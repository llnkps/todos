import { TodoNote } from '../TodoNote/TodoNote';

export const TodoList = () => {
	return (
		<div>
			<h2 className='text-2xl font-bold text-black mb-4'>My Notes</h2>
			<ul>
				<li>
					<TodoNote id='1' title='title1' tags='content' />
				</li>
				<li>
					<TodoNote id='2' title='title2' tags='content' />
				</li>
				<li>
					<TodoNote id='3' title='title3' tags='content' />
				</li>
				<li>
					<TodoNote id='4' title='title4' tags='content' />
				</li>
			</ul>

			<div className='text-gray-400 mt-4'>
				Notes counter: <span></span>
			</div>
		</div>
	);
};
