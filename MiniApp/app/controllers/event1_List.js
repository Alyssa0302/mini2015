var args = arguments[0] || {};
var fid = args.fid || {};

$.win.title = fid;

Alloy.Collections.webNews.fetch();
var id;

// $.win.addEventListener("close", function(){
	// $.destroy();
// })

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
    alert(e.row.fid);
	var eventListController = Alloy.createController('event1_Info', {
		fid : e.row.v_id
	});
	console.log(e.row.v_id);
	Alloy.Globals.TabGroup.getActiveTab().open(eventListController.getView());
};