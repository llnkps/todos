import { Header } from './components/Header/Header';
import { TodosList } from './components/TodosList/TodosList';

import './App.css';
import { TodoForm } from './components/TodoForm/TodoForm';
import { useEffect, useState } from 'react';
import type { Todo } from './types/Todo';

const LOCAL_STORAGE_KEY = 'todos';

const loadTodosFromStorage = (): Todo[] => {
	try {
		const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (saved && saved !== 'undefined') {
			return JSON.parse(saved);
		}
	} catch (error) {
		console.error('Ошибка загрузки todos из localStorage:', error);
	}
	return [];
};

function App() {
	const [todos, setTodos] = useState<Todo[]>(() => {
		return loadTodosFromStorage();
	});

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

	useEffect(() => {
		try {
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
		} catch (error) {
			console.error('Ошибка сохранения todos в localStorage:', error);
		}
	}, [todos]);

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
