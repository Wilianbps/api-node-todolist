import connection from './connection.js';

/* async function getAll(){
  const [tasks, buffer] = await connection.execute('SELECT * FROM tasks'); // array destructuring
  return tasks;
} */

async function getAll() {
  const tasks = await connection.execute('SELECT * FROM tasks');
  return tasks[0];
}

async function createTask(task) {
  const { title } = task;

  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';

  const [createdTask] = await connection.execute(
    query,
    [title, 'pendente', dateUTC]
  );

  return {insertId: createdTask.insertId};
}

async function deleteTask(id){
  const [deleteTask] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
  return deleteTask;
}

async function updateTask(id, task){
  const {title, status} = task;

  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

  const [updatedTask] = await connection.execute(query, [title, status, id]);
  
  return updatedTask;
}
export default { getAll, createTask, deleteTask, updateTask };
