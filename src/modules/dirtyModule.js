define('modules/dirtyModule',function(){
	//backbone
	var DirtyModule = Backbone.View.extend({
		initialize: function(){
			console.log('DirtyModuleView : initialize ');
			//this.render();
		}
	});
	return DirtyModule;
});