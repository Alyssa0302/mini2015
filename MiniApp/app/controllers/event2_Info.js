var args = arguments[0] || {};
var fid = args.fid || {};

$.win.title = fid;

Alloy.Collections.Venue.fetch();
Alloy.Collections.webNews.fetch();

$.win.addEventListener("close", function(){
	 $.destroy();
});

function filterFunction(collection){
	
	console.log("i'm here");
	
	
		return collection.where({venue:fid});
};

function eventClick4(e) { 	
	var eventListController = Alloy.createController('event_details', {
		fid : e.row.v_id
	});
	console.log(e.row.v_id);
	Alloy.Globals.TabGroup.activeTab.open(eventListController.getView());
};
