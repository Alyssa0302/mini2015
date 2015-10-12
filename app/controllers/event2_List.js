var args = arguments[0] || {};
var fid = args.fid || {};

$.win.title = fid;

Alloy.Collections.events.fetch();


// $.win.addEventListener("close", function(){
	// $.destroy();
// })

function transformFunction(collection){
	return collection.where({fid:fid});
}

function eventClick4(e) { 	
	var eventListController = Alloy.createController('event2_Info', {
		fid : e.row.fid
	});
	Alloy.Globals.TabGroup.open(eventListController.getView());
};
