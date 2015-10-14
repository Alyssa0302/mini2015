$.index.open();

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
	Alloy.Globals.TabGroup.activeTab.open(eventListController.getView());
};

function filterFunction(collection){
	console.log(args.fid);
	console.log(fid+"222222");
	return collection.where({id:fid});
};
// function filterFunction(collection){
	// if(cmbSex.selectedItem.data != "全部")
	    // return (sno.indexOf(txtSNO.text,0) >= 0) &&(name.indexOf(txtName.text,0) >= 0) && (cmbSex.selectedItem.data == sex);
	// else
        // return (sno.indexOf(txtSNO.text,0) >= 0) &&(name.indexOf(txtName.text,0) >= 0);
// }

function eventClick1(e) { 	
	// alert(e.row.fid);
	var eventListController = Alloy.createController('event1_Info', {
		fid : e.row.v_id
	});
	// var eventListController = Alloy.createController('event1_Info');
	console.log(e.row.v_id);
	Alloy.Globals.TabGroup.activeTab.open(eventListController.getView());
	// $.eventTab1.open(eventListController.getView());
};

function transformFunction1(model){
	var transform = model.toJSON();
	var venueCampusID;
	transform.title = transform.VenueID;
	if (venueCampusID == transform.CampusID)
		transform.CampusID = "";
	else
		transform.CampusID = transform.CampusID;
		venueCampusID = transform.CampusID;
	return transform;
	
};

function eventClick2(e) { 	
	// alert(e.row.fid);
	var eventListController = Alloy.createController('event2_Info', {
		fid : e.row.v_id
	});
	console.log(e.row.v_id);
	Alloy.Globals.TabGroup.activeTab.open(eventListController.getView());
	// $.eventTab2.open(eventListController.getView());
};

function mapClick(e){
	var route = Alloy.Globals.Map.createRoute({
		points: [
           {latitude: 22.341072, longitude: 114.179645},
           {latitude: 22.337832, longitude: 114.181962},
           ] });
        $.mapView.addRoute(route);
	if (e.clicksource == 'rightButton' && e.annotation.id == 'acHall'){
		var eventListController = Alloy.createController('map_details', {
		    fid: e.row.v_id
		});
		console.log(e.row.v_id);
		Alloy.Globals.TabGroup.activeTab.open(eventListController.getView());
	}	
};

