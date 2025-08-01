import type { Todo } from './Todo';

export interface TodoItemProps {
	todo: Todo;
	onEdit?: (id: string, updated: Partial<Todo>) => void;
	onDelete?: (id: string) => void;
}

export interface TodosListProps {
	todos: Todo[];
	onEdit?: (id: string, updated: Partial<Todo>) => void;
	onDelete?: (id: string) => void;
}

export interface TodoFormProps {
	onAddTodo: (todo: Omit<Todo, 'id'>) => void;
}
