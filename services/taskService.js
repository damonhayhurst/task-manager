var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks')

exports.get_all_tasks = async function() {
  return await Task.find({});
};

exports.create_a_task = async function(taskData) {
  var new_task = new Task(taskData);
  return await new_task.save();
};

exports.get_a_task = async function(id) {
  let task = await Task.findById(id)

  if (!task) {
    throw Error('Not Found')
  }
  return task
};

exports.update_a_task = async function(id, task) {
  let updatedTask = await Task.findOneAndUpdate({_id: id}, task, {new: true, runValidators: true});

  if (!updatedTask) {
    throw Error("Not Found")
  }
  return updatedTask
};

exports.delete_a_task = async function(id) {
  let status = await Task.deleteOne({_id: id})

  if (status.deletedCount == 0) {
    throw Error("Not Found")
  }
};