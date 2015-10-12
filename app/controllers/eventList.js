var args = arguments[0] || {};
var fid = args.fid || {};

$.win.title = fid;

Alloy.Collections.webNews.fetch();

// $.win.addEventListener("close", function(){
	// $.destroy();
// })

function transformFunction(collection){
	return collection.where({fid:fid});
}

function Click3(e) { 	
	var eventListController = Alloy.createController('eventList', {
		fid : e.row.fid
	});
	Alloy.Globals.TabGroup.open(eventListController.getView());
};
