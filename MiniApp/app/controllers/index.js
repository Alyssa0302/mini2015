$.index.open();

var route = Alloy.Globals.Map.createRoute({
    points: [
           {latitude: 22.341072, longitude: 114.179645},
           {latitude: 22.337832, longitude: 114.181962},
] });
$.mapView.addRoute(route);

Alloy.Collections.webNews.fetch();
Alloy.Collections.Venue.fetch();
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
	Alloy.Globals.TabGroup.ActiveTab().open(eventListController.getView());
};

function eventClick1(e) { 	
	// alert(e.row.fid);
	var eventListController = Alloy.createController('event1_Info', {
		fid : e.row.v_id
	});
	// var eventListController = Alloy.createController('event1_Info');
	// $.eventTab1.open(eventListController.getView());
};

function mapClick(e){
	if (e.clicksource == 'rightButton' && e.annotation.id == 'acHall'){
		var eventListController = Alloy.createController('map_details', {
		    fid: e.row.v_id
		});
		console.log(e.row.v_id);
		Alloy.Globals.TabGroup.open(eventListController.getView());
	}	
};
