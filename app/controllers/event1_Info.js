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

function eventClick2(e) { 	
	var eventListController = Alloy.createController('map_details', {
		fid : e.row.fid
	});
	Alloy.Globals.TabGroup.ActiveTab().open(eventListController.getView());
};
