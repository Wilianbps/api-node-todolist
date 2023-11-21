import tasksModel from '../models/tasksModels.js';

async function getAll(_req, res) {
  const tasks = await tasksModel.getAll();
  return res.status(200).json(tasks);
}

async function createTask(req, res) {
  const task = req.body;

  const createdTask = await tasksModel.createTask(task);

  return res.status(201).json(createdTask);
}

async function deleteTask(req, res) {
  const { id } = req.params;

  await tasksModel.deleteTask(id);

  return res.status(204).json();
}

async function updateTask(req, res){
  const {id} = req.params;
  const task = req.body;

  const updatedTask = await tasksModel.updateTask(id, task);

  return res.status(204).json(updatedTask);
}

export default { getAll, createTask, deleteTask, updateTask };
