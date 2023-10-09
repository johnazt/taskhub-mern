const express = require('express');
const router = express.Router();
const {
	getTasks,
	getSingleTask,
	createTask,
	updateTask,
	deleteTask
} = require('../controllers/tasks.controllers');

router.route('/').get(getTasks).post(createTask);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
