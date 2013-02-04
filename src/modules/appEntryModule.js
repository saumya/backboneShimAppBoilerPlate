define('modules/appEntryModule',
	['modules/collection/todosCollection'],
	function(TodosCollection){
		console.log('Application Entry');
		var todosCollection=new TodosCollection();
	});
