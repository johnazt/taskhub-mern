import { Navbar, InputNewTask, Tasks } from './components';

function App() {
	return (
		<>
			<Navbar />
			<main className='container'>
				<InputNewTask />
				<Tasks />
			</main>
		</>
	);
}

export default App;
