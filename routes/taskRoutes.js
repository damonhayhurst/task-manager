let taskController = require('../controllers/taskController');

module.exports = function(app) {

  app.route('/tasks')
    .get(taskController.get_all_tasks)
    .post(taskController.create_a_task);


  app.route('/tasks/:taskId')
    .get(taskController.get_a_task)
    .put(taskController.update_a_task)
    .delete(taskController.delete_a_task);
};