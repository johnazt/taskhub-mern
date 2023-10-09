import { TaskType } from '../interfaces';

const Task: React.FC<TaskType> = ({ title, _id, comment }) => {
	return (
		<div className='task__card'>
			<h4>{title}</h4>
			<small>ID: {_id}</small>
			<p>{comment}</p>
			<div className='task__card-icons'>
				<div>
					<span className='material-symbols-outlined'>edit</span>
					<span className='material-symbols-outlined'>delete</span>
				</div>
			</div>
		</div>
	);
};
export default Task;
