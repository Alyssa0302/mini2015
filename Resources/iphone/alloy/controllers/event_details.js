function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId43(e) {
        if (e && e.fromAdapter) return;
        __alloyId43.opts || {};
        var models = filterFunction(__alloyId42);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId35 = models[i];
            __alloyId35.__transform = transformFunction(__alloyId35);
            var __alloyId37 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            rows.push(__alloyId37);
            var __alloyId39 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId35.__transform["image"] ? __alloyId35.__transform["image"] : __alloyId35.get("image"),
                top: "20dp"
            });
            __alloyId37.add(__alloyId39);
            var __alloyId41 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId35.__transform["fullDes"] ? __alloyId35.__transform["fullDes"] : __alloyId35.get("fullDes"),
                bottom: "20dp"
            });
            __alloyId37.add(__alloyId41);
        }
        $.__views.__alloyId34.setData(rows);
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        null == transform.image && (transform.image = "");
        console.log("tran");
        console.log(transform.image);
        return transform;
    }
    function filterFunction(collection) {
        console.log(args.fid);
        console.log(fid + "222222");
        return collection.where({
            id: fid
        });
    }
    function eventClick3(e) {
        var eventListController = Alloy.createController("map_1", {
            fid: e.row.v_id
        });
        console.log(e.row.v_id);
        Alloy.Globals.TabGroup.getActiveTab().open(eventListController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "event_details";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("webNews");
    $.__views.win = Ti.UI.createWindow({
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId34 = Ti.UI.createTableView({
        id: "__alloyId34"
    });
    $.__views.win.add($.__views.__alloyId34);
    var __alloyId42 = Alloy.Collections["webNews"] || webNews;
    __alloyId42.on("fetch destroy change add remove reset", __alloyId43);
    eventClick3 ? $.addListener($.__views.__alloyId34, "click", eventClick3) : __defers["$.__views.__alloyId34!click!eventClick3"] = true;
    exports.destroy = function() {
        __alloyId42.off("fetch destroy change add remove reset", __alloyId43);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var fid = args.fid || {};
    Alloy.Collections.webNews.fetch();
    __defers["$.__views.__alloyId34!click!eventClick3"] && $.addListener($.__views.__alloyId34, "click", eventClick3);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;