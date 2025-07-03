import { Header } from './components/Header/Header';
import { TodosList } from './components/TodosList/TodosList';

import './App.css';
import { TodoForm } from './components/TodoForm/TodoForm';
import { useState } from 'react';
import type { Todo } from './types/Todo';

function App() {
	const [todos, setTodos] = useState<Todo[]>([
		{
			id: '1',
			title: 'Первая заметка',
			tags: ['важное', 'работа'],
		},
		{
			id: '2',
			title: 'Вторая заметка',
			tags: ['личное'],
		},
	]);

	const addTodo = (newTodo: Omit<Todo, 'id'>) => {
		const todoWithId: Todo = {
			...newTodo,
			id: Date.now().toString(),
		};
		setTodos(prev => [...prev, todoWithId]);
	};

	const handleEdit = (id: string, updated: Partial<Todo>) => {
		setTodos(prev =>
			prev.map(todo => (todo.id === id ? { ...todo, ...updated } : todo))
		);
	};

	const handleDelete = (id: string) => {
		setTodos(prev => prev.filter(todo => todo.id !== id));
	};

	return (
		<div className='min-h-screen bg-gray-100'>
			<div className='max-w-4xl mx-auto px-8 py-8 flex flex-col gap-8'>
				<Header />
				<TodoForm onAddTodo={addTodo} />
				<h1 className='text-primary underline'>Hello World</h1>
				<TodosList todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
			</div>
		</div>
	);
}

export default App;
