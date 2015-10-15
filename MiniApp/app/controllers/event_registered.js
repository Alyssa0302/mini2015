var args = arguments[0] || {};
var fid = args.fid || {};

$.win.title = fid;

Alloy.Collections.webNews.fetch();

$.win.addEventListener("close", function(){
	 $.destroy();
});

function filterFunction(collection){
	console.log(args.fid);
	return collection.where({id:fid});
};

function regClick2(e) { 	
	var eventListController = Alloy.createController('event_details', {
		fid : e.row.v_id
	});
	console.log(e.row.v_id);
	Alloy.Globals.TabGroup.activeTab.open(eventListController.getView());
};
