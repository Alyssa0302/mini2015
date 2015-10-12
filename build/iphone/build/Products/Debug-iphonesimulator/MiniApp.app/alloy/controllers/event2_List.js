function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId31(e) {
        if (e && e.fromAdapter) return;
        __alloyId31.opts || {};
        var models = __alloyId30.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId23 = models[i];
            __alloyId23.__transform = {};
            var __alloyId25 = Ti.UI.createTableViewRow({
                layout: "vertical",
                fid: "undefined" != typeof __alloyId23.__transform["id"] ? __alloyId23.__transform["id"] : __alloyId23.get("id")
            });
            rows.push(__alloyId25);
            var __alloyId27 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId23.__transform["image"] ? __alloyId23.__transform["image"] : __alloyId23.get("image"),
                top: "20dp"
            });
            __alloyId25.add(__alloyId27);
            var __alloyId29 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId23.__transform["text"] ? __alloyId23.__transform["text"] : __alloyId23.get("text"),
                bottom: "20dp"
            });
            __alloyId25.add(__alloyId29);
        }
        $.__views.__alloyId22.setData(rows);
    }
    function eventClick4(e) {
        var eventListController = Alloy.createController("event2_Info", {
            fid: e.row.fid
        });
        Alloy.Globals.TabGroup.open(eventListController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "event2_List";
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
    Alloy.Collections.instance("events");
    $.__views.eventTab2 = Ti.UI.createWindow({
        title: "Event",
        id: "eventTab2"
    });
    $.__views.eventTab2 && $.addTopLevelView($.__views.eventTab2);
    eventClick4 ? $.addListener($.__views.eventTab2, "click", eventClick4) : __defers["$.__views.eventTab2!click!eventClick4"] = true;
    $.__views.__alloyId22 = Ti.UI.createTableView({
        id: "__alloyId22"
    });
    $.__views.eventTab2.add($.__views.__alloyId22);
    var __alloyId30 = Alloy.Collections["events"] || events;
    __alloyId30.on("fetch destroy change add remove reset", __alloyId31);
    exports.destroy = function() {
        __alloyId30.off("fetch destroy change add remove reset", __alloyId31);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var fid = args.fid || {};
    $.win.title = fid;
    Alloy.Collections.events.fetch();
    __defers["$.__views.eventTab2!click!eventClick4"] && $.addListener($.__views.eventTab2, "click", eventClick4);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;