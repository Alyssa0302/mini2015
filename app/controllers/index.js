$.index.open();

Alloy.Collections.webNews.fetch();
Alloy.Globals.TabGroup = $.index;

function transformFunction(model) { 
	var transform = model.toJSON(); 
	if (transform.thumbnail == null)
	transform.thumbnail = "";
	return transform;
}

function newsClick1(e) { 
	
	var eventListController = Alloy.createController('event_details', {
		fid: e.row.v_id
	});
	console.log(e.row.v_id);
	Alloy.Globals.TabGroup.getActiveTab().open(eventListController.getView());
};

function eventClick1(e) { 	
	// alert(e.row.fid);
	var eventListController = Alloy.createController('event1_Info', {
		fid : e.row.v_id
	});
	Alloy.Globals.TabGroup.getActiveTab().open(eventListController.getView());
};

