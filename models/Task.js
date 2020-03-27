var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the task'
  },
  due_date: {
    type: Date
  },
  completion_date: {
    type: Date
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);