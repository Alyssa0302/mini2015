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

function eventClick1(e) { 	
	// alert(e.row.fid);
	var eventListController = Alloy.createController('event1_Info', {
		fid : e.row.v_id
	});
	console.log(e.row.v_id);
	Alloy.Globals.TabGroup.getActiveTab().open(eventListController.getView());
};