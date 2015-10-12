function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId11(e) {
        if (e && e.fromAdapter) return;
        __alloyId11.opts || {};
        var models = __alloyId10.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = {};
            var __alloyId5 = Ti.UI.createTableViewRow({
                layout: "vertical",
                fid: "undefined" != typeof __alloyId3.__transform["id"] ? __alloyId3.__transform["id"] : __alloyId3.get("id")
            });
            rows.push(__alloyId5);
            var __alloyId7 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId3.__transform["image"] ? __alloyId3.__transform["image"] : __alloyId3.get("image"),
                top: "20dp"
            });
            __alloyId5.add(__alloyId7);
            var __alloyId9 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId3.__transform["text"] ? __alloyId3.__transform["text"] : __alloyId3.get("text"),
                bottom: "20dp"
            });
            __alloyId5.add(__alloyId9);
        }
        $.__views.__alloyId2.setData(rows);
    }
    function Click3(e) {
        var eventListController = Alloy.createController("eventList", {
            fid: e.row.fid
        });
        Alloy.Globals.TabGroup.open(eventListController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "eventList";
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
    $.__views.newstab1 = Ti.UI.createWindow({
        title: "Event Details",
        id: "newstab1"
    });
    $.__views.newstab1 && $.addTopLevelView($.__views.newstab1);
    Click3 ? $.addListener($.__views.newstab1, "click", Click3) : __defers["$.__views.newstab1!click!Click3"] = true;
    $.__views.__alloyId2 = Ti.UI.createTableView({
        id: "__alloyId2"
    });
    $.__views.newstab1.add($.__views.__alloyId2);
    var __alloyId10 = Alloy.Collections["webNews"] || webNews;
    __alloyId10.on("fetch destroy change add remove reset", __alloyId11);
    exports.destroy = function() {
        __alloyId10.off("fetch destroy change add remove reset", __alloyId11);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var fid = args.fid || {};
    $.win.title = fid;
    Alloy.Collections.webNews.fetch();
    __defers["$.__views.newstab1!click!Click3"] && $.addListener($.__views.newstab1, "click", Click3);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;