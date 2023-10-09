import axios from 'axios';
import { useEffect, useState } from 'react';
import { Task } from '.';
import { TaskType } from '../interfaces';

const url = import.meta.env.VITE_API_URL;

const Tasks = () => {
	const [tasks, setTasks] = useState<TaskType[]>([]);

	useEffect(() => {
		axios
			.get(url)
			.then(response => setTasks(response.data.tasks))
			.catch(error => console.log(error));
	}, []);

	return (
		<section className='tasks__container'>
			{tasks.map(task => (
				<Task
					key={task._id}
					{...task}
				/>
			))}
		</section>
	);
};
export default Tasks;
