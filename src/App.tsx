import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';

import './App.css';
import { TodoForm } from './components/TodoForm/TodoForm';

function App() {
	return (
		<div className='min-h-screen bg-gray-100'>
			<div className='max-w-4xl mx-auto px-8 py-8 flex flex-col gap-8'>
				<Header />
				<TodoForm />
				<h1 className='text-primary underline'>Hello World</h1>
				<TodoList />
			</div>
		</div>
	);
}

export default App;
