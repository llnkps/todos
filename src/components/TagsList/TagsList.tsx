import { Tag } from '../Tag/Tag';

interface TagsListProps {
	tags: string[];
	onTagClick: (tag: string) => void;
}

export const TagsList = ({ tags, onTagClick }: TagsListProps) => {
	return (
		<div className='flex gap-2 flex-wrap'>
			{tags.map(tag => (
				<Tag key={tag} tag={tag} onClick={() => onTagClick(tag)} />
			))}
		</div>
	);
};
