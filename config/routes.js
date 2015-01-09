var mongoose = require('mongoose'),
 	  Task = mongoose.model('Task');

module.exports = function Routes(app){
 	
 	app.get('/', function(req,res) { 

 		Task.find({}, function(err, tasks){
 			if(err){
 				return console.error(err);
 			} else {
 				console.log(tasks);
 				res.render('index', {title: 'Tasks', task: tasks});
 			}
 		})
 		// res.render('index', { title: 'Tasks', task: tasks }); 
 	});
 	
 	app.post('/tasks', function(req,res) {
 		console.log(req.body);
 		// console.log(res);
  		var a = new Task(req.body);
  		
  		a.save(function(err, a){
   			console.log(err, a);
	   			if(err){
	   				// res.send(JSON.stringify(err));
	   				console.log(err);
	   			} else{
	   				// res.send('saved');
	   				console.log('A', a);
	   			}
  		});
 		res.redirect('/');
 	});

 	app.post('/tasks/:id', function(req,res) {

 		console.log('this value of :id is:', req.params.id)
 		// console.log(req.body);
 		// console.log(res);
  		// var a = new Task(req.body);
  		Task.remove({_id: req.params.id}, function(err){
  			if(!err){
  				console.log('deleted');
  			} else{
  				console.log('error');
  			}
  		})
 		res.redirect('/');
 	});

  app.get('/results', function(req,res){
    Task.find({}, function(err, tasks){
      if(err){
        return console.error(err);
      } else {
        console.log(tasks);
        res.send(tasks);
      }
    })
  });
};




// i want to query for all users who have the following last name: choi
// User.find({last_name: 'choi'});
// User.findOne

// to find all
// User.find({})