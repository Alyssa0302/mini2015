var args = arguments[0] || {};
var fid=args.fid ||{};

Alloy.Collections.webNews.fetch();

function transformFunction(model) { 
	var transform = model.toJSON(); 
	
	if (transform.image == null)
	// if (transform.image == null||transform.image=='undefined')
	        transform.image = "";    // a default picture
	        console.log("tran");
	  console.log(transform.image);
	return transform; 
}

// $.win.addEventListener("close",function(){
	// $.destroy();
// });

function filterFunction(collection){
	console.log(args.fid);
	console.log(fid+"222222");
return collection.where({id:fid});
};

function eventClick3(e) { 
	
	var eventListController = Alloy.createController('map_1', {
		fid: e.row.v_id
	});
	console.log(e.row.v_id);
	Alloy.Globals.TabGroup.getActiveTab().open(eventListController.getView());
};