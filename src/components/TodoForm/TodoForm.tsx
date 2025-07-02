export const TodoForm = ({ onAddNote }) => {
	const onSubmit = () => {};

	return (
		<form >
			<input type='text' placeholder='Add a note' className='' />
			<input type='text' placeholder='Tags' className='' />
			<button type='submit' onClick={onSubmit}>
				Add
			</button>
		</form>
	);
};
