function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId9(e) {
        if (e && e.fromAdapter) return;
        __alloyId9.opts || {};
        var models = filterFunction(__alloyId8);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = {};
            var __alloyId5 = Ti.UI.createTableViewRow({
                fid: "undefined" != typeof __alloyId3.__transform["id"] ? __alloyId3.__transform["id"] : __alloyId3.get("id")
            });
            rows.push(__alloyId5);
            var __alloyId7 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId3.__transform["name"] ? __alloyId3.__transform["name"] : __alloyId3.get("name")
            });
            __alloyId5.add(__alloyId7);
        }
        $.__views.__alloyId2.setData(rows);
    }
    function eventClick2(e) {
        var eventListController = Alloy.createController("map_details", {
            fid: e.row.fid
        });
        Alloy.Globals.TabGroup.ActiveTab().open(eventListController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "event1_Info";
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
    $.__views.__alloyId2 = Ti.UI.createTableView({
        id: "__alloyId2"
    });
    $.__views.eventTab1.add($.__views.__alloyId2);
    var __alloyId8 = Alloy.Collections["webNews"] || webNews;
    __alloyId8.on("fetch destroy change add remove reset", __alloyId9);
    eventClick2 ? $.addListener($.__views.__alloyId2, "click", eventClick2) : __defers["$.__views.__alloyId2!click!eventClick2"] = true;
    exports.destroy = function() {
        __alloyId8.off("fetch destroy change add remove reset", __alloyId9);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var fid = args.fid || {};
    $.win.title = fid;
    Alloy.Collections.webNews.fetch();
    __defers["$.__views.__alloyId2!click!eventClick2"] && $.addListener($.__views.__alloyId2, "click", eventClick2);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;