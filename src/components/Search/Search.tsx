interface SearchProps {
	value: string;
	onChange: (val: string) => void;
}

export const Search = ({ value, onChange }: SearchProps) => {
	return (
		<input
			type='text'
			placeholder='Search a ...'
			value={value}
			onChange={e => onChange(e.target.value)}
			className='w-full border-2 rounded-xl border-primary p-2'
		/>
	);
};
