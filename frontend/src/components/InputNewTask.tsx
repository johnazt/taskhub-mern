const InputNewTask = () => {
	return (
		<section className='input_newtask'>
			<button
				style={{
					backgroundColor: 'transparent',
					border: 'transparent',
					display: 'block'
				}}>
				<span className='icon icon__add material-symbols-outlined'>add</span>
			</button>
			<h3 className='text__input'>Create new task...</h3>
		</section>
	);
};
export default InputNewTask;
