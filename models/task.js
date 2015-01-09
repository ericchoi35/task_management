var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  	task_name:  String,
  	priority: String,
  	deadline: { type: Date, default: Date.now },
  	created_at: { type: Date, default: Date.now },
  	hidden: Boolean,
});

TaskSchema.path('task_name').required(true, 'Task name cannot be blank');
TaskSchema.path('priority').required(true, 'Priority level cannot be blank');
TaskSchema.path('deadline').required(true, 'Deadline cannot be blank');
mongoose.model('Task', TaskSchema);