import { useMemo, useState } from 'react';

import { TodoNote } from '../TodoNote/TodoNote';
import { Search } from '../Search/Search';

import type { TodosListProps } from '../../types/components';
import { TagsList } from '../TagsList/TagsList';

export const TodosList = ({ todos, onEdit, onDelete }: TodosListProps) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

	const filteredNotes = todos.filter(
		todo =>
			todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			todo.tags.some(tag =>
				tag.toLowerCase().includes(searchQuery.toLowerCase())
			)
	);

	const sortedNotes = [...filteredNotes].sort((a, b) => {
		return sortOrder === 'asc'
			? a.createdAt - b.createdAt
			: b.createdAt - a.createdAt;
	});

	const uniqueTags = useMemo(
		() => [
			...new Set(
				todos.reduce<string[]>((acc, todo) => acc.concat(todo.tags), [])
			),
		],
		[todos]
	);

	if (!todos || todos.length === 0) {
		return (
			<div>
				<p className='text-gray-500'>No notes yet. Create your first note!</p>
			</div>
		);
	}

	return (
		<div>
			<h2 className='text-2xl font-bold text-black mb-4'>My Notes</h2>
			<div className='flex gap-2'>
				<div className='flex-[2] mb-2'>
					<Search value={searchQuery} onChange={setSearchQuery} />
				</div>
				<button
					onClick={() => setSearchQuery('')}
					className='flex-[1] text-sm text-gray-500 underline ml-2 hover:text-black transition'
				>
					Clear Search
				</button>
			</div>
			{uniqueTags.length > 0 && (
				<TagsList tags={uniqueTags} onTagClick={setSearchQuery} />
			)}

			<button
				onClick={() => setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))}
				className='text-sm text-gray-500 underline hover:text-black transition'
			>
				Sort: {sortOrder === 'asc' ? 'Order first' : 'Newest first'}
			</button>

			<ul className='mt-4'>
				{sortedNotes.map(todo => (
					<li key={todo.id}>
						<TodoNote todo={todo} onEdit={onEdit} onDelete={onDelete} />
					</li>
				))}
			</ul>
			{filteredNotes.length > 0 && (
				<div className='text-sm text-gray-400 mt-4'>
					Notes counter:{' '}
					<span className='text-sm text-secondary'>{filteredNotes.length}</span>
				</div>
			)}
		</div>
	);
};
