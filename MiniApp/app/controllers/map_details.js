var args = arguments[0] || {};
var fid = args.v_id || {};

Alloy.Collections.Venue.fetch();

function locationfilterFunction(collection)
{
	var v_id=VenueID;
	console.log(fid+'123456789');
	return collection.where({VenueID:fid});
}

function transformMap(model){
	var transform = model.toJSON();
	    transform.title = transform.VenueID;
	return transform;	
};