const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error.js');

const getTasks = asyncWrapper(async (req, res) => {
	const tasks = await Task.find();
	res
		.status(200)
		.json({ status: 'success', tasks, tasksQuantity: tasks.length });
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params;
	const task = await Task.findOne({ _id: taskID });
	if (!task) {
		return next(createCustomError(`User with id ${taskID} not found`, 404));
	}

	res.status(200).json({ status: 'success', task });
});

const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.status(200).json({ status: 'success', task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params;
	const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
		new: true,
		runValidators: true
	});
	if (!task) {
		return next(createCustomError(`User with id ${taskID} not found`, 404));
	}
	res.status(200).json({ status: 'success', task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params;
	const task = await Task.findOneAndDelete({ _id: taskID });
	if (!task) {
		return next(createCustomError(`User with id ${taskID} not found.`, 404));
	}
	res.status(200).json({ status: 'success', task });
});

module.exports = {
	getTasks,
	getSingleTask,
	createTask,
	updateTask,
	deleteTask
};
