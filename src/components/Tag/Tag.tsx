interface TagProps {
	tag: string;
	onClick?: () => void;
}

export const Tag = ({ tag, onClick }: TagProps) => {
	return (
		<button
			onClick={onClick}
			className='py-2 px-4 bg-primary hover:brightness-110 transition rounded-xl text-sm text-white '
		>
			{tag}
		</button>
	);
};
