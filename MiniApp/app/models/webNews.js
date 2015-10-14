exports.definition = {
	config: {
		
		"columns":{
			"id":"text",
			"title":"text",
			"thumbnail":"text",
			"name":"text",
			"venue":"text",
			"organizer":"text",
			"shortDes":"text",
			"fullDes":"text",
			"image":"text"
		},
		
		"URL":"http://thirdsail.herokuapp.com/event/json",
		
		"debug":1,//debug mode enabled
		
		"adapter":{
				"type":"sqlrest",
				"collection_name":"webNews",
				"idAttribute":"id",
				
				// 
				"addModifiedToUrl":true,
				"lastModifiedColumn":"modified"
		 },
				// "parentNode":"posts"
	},
	
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
		});

		return Collection;
	}
};
