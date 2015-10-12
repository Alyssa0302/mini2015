function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId19(e) {
        if (e && e.fromAdapter) return;
        __alloyId19.opts || {};
        var models = __alloyId18.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId13 = models[i];
            __alloyId13.__transform = {};
            var __alloyId15 = Ti.UI.createTableViewRow({
                layout: "vertical",
                v_id: "undefined" != typeof __alloyId13.__transform["id"] ? __alloyId13.__transform["id"] : __alloyId13.get("id")
            });
            rows.push(__alloyId15);
            var __alloyId17 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId13.__transform["text"] ? __alloyId13.__transform["text"] : __alloyId13.get("text"),
                bottom: "20dp"
            });
            __alloyId15.add(__alloyId17);
        }
        $.__views.__alloyId12.setData(rows);
    }
    function eventClick1(e) {
        var eventListController = Alloy.createController("event1_Info", {
            fid: e.row.v_id
        });
        console.log(e.row.v_id);
        Alloy.Globals.TabGroup.getActiveTab().open(eventListController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "event1_List";
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
    $.__views.eventTab1 = Ti.UI.createWindow({
        title: "Event",
        id: "eventTab1"
    });
    $.__views.eventTab1 && $.addTopLevelView($.__views.eventTab1);
    $.__views.__alloyId12 = Ti.UI.createTableView({
        id: "__alloyId12"
    });
    $.__views.eventTab1.add($.__views.__alloyId12);
    var __alloyId18 = Alloy.Collections["webNews"] || webNews;
    __alloyId18.on("fetch destroy change add remove reset", __alloyId19);
    eventClick1 ? $.addListener($.__views.__alloyId12, "click", eventClick1) : __defers["$.__views.__alloyId12!click!eventClick1"] = true;
    exports.destroy = function() {
        __alloyId18.off("fetch destroy change add remove reset", __alloyId19);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var fid = args.fid || {};
    $.win.title = fid;
    Alloy.Collections.webNews.fetch();
    __defers["$.__views.__alloyId12!click!eventClick1"] && $.addListener($.__views.__alloyId12, "click", eventClick1);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;