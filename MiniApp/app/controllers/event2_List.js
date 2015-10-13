var args = arguments[0] || {};
var fid = args.fid || {};

// var CampusID= Alloy.createModel('',{VenueName:''})
// var VenueName = Venue.get('VenueName');
// var 

$.win.title = fid;

Alloy.Collections.Venue.fetch();


// $.win.addEventListener("close", function(){
	// $.destroy();
// })

function filterFunction(collection){
	console.log(args.fid);
	console.log(fid+"222222");
	return collection.where({id:fid});
};

function eventClick4(e) { 	
	// alert(e.row.fid);
	var eventListController = Alloy.createController('event2_Info', {
		fid : e.row.v_id
	});
	console.log(e.row.v_id);
	Alloy.Globals.TabGroup.ActiveTab().open(eventListController.getView());
};
