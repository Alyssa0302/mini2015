var args = arguments[0] || {};
/*var fid = args.fid || {};

$.win.title = fid;
*/
Alloy.Collections.webNews.fetch();

// $.win.addEventListener("close", function(){
	// $.destroy();
// })

function transformFunction(model) { 
	var transform = model.toJSON(); 
	
	if (transform.organizer == null)
	// if (transform.organizer == null||transform.organizer=='undefined')
	        transform.organizer = "name";    
	        console.log("tran");
	  console.log(transform.organizer);
	return transform; 
}

function filterFunction(collection){
	console.log(args.fid);
	return collection.where({organizer:'Music Society'});
};

function eventClick2(e) { 	
	var eventListController = Alloy.createController('map_details', {
		fid : e.row.v_id
	});
	console.log(e.row.v_id);
	Alloy.Globals.TabGroup.ActiveTab().open(eventListController.getView());
};
