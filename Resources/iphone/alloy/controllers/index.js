function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId57(e) {
        if (e && e.fromAdapter) return;
        __alloyId57.opts || {};
        var models = __alloyId56.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId49 = models[i];
            __alloyId49.__transform = transformFunction(__alloyId49);
            var __alloyId51 = Ti.UI.createTableViewRow({
                layout: "vertical",
                v_id: "undefined" != typeof __alloyId49.__transform["id"] ? __alloyId49.__transform["id"] : __alloyId49.get("id")
            });
            rows.push(__alloyId51);
            var __alloyId53 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId49.__transform["image"] ? __alloyId49.__transform["image"] : __alloyId49.get("image"),
                top: "20dp"
            });
            __alloyId51.add(__alloyId53);
            var __alloyId55 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId49.__transform["name"] ? __alloyId49.__transform["name"] : __alloyId49.get("name"),
                bottom: "20dp"
            });
            __alloyId51.add(__alloyId55);
        }
        $.__views.__alloyId48.setData(rows);
    }
    function __alloyId64(e) {
        if (e && e.fromAdapter) return;
        __alloyId64.opts || {};
        var models = __alloyId63.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId60 = models[i];
            __alloyId60.__transform = transformFunction(__alloyId60);
            var __alloyId62 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId60.__transform["organizer"] ? __alloyId60.__transform["organizer"] : __alloyId60.get("organizer"),
                v_id: "undefined" != typeof __alloyId60.__transform["id"] ? __alloyId60.__transform["id"] : __alloyId60.get("id")
            });
            rows.push(__alloyId62);
        }
        $.__views.__alloyId59.setData(rows);
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        null == transform.thumbnail && (transform.thumbnail = "");
        return transform;
    }
    function newsClick1(e) {
        var eventListController = Alloy.createController("event_details", {
            fid: e.row.v_id
        });
        console.log(e.row.v_id);
        Alloy.Globals.TabGroup.getActiveTab().open(eventListController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    var __alloyId46 = [];
    $.__views.__alloyId47 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "WEBNEWS",
        id: "__alloyId47"
    });
    $.__views.__alloyId48 = Ti.UI.createTableView({
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    var __alloyId56 = Alloy.Collections["webNews"] || webNews;
    __alloyId56.on("fetch destroy change add remove reset", __alloyId57);
    newsClick1 ? $.addListener($.__views.__alloyId48, "click", newsClick1) : __defers["$.__views.__alloyId48!click!newsClick1"] = true;
    $.__views.newsTab1 = Ti.UI.createTab({
        window: $.__views.__alloyId47,
        title: "Tab 1",
        icon: "KS_nav_ui.png",
        id: "newsTab1"
    });
    __alloyId46.push($.__views.newsTab1);
    $.__views.__alloyId58 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "EVENT",
        id: "__alloyId58"
    });
    $.__views.__alloyId59 = Ti.UI.createTableView({
        onclick: "eventClick1",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    var __alloyId63 = Alloy.Collections["webNews"] || webNews;
    __alloyId63.on("fetch destroy change add remove reset", __alloyId64);
    $.__views.eventTab1 = Ti.UI.createTab({
        window: $.__views.__alloyId58,
        title: "Tab 2",
        icon: "KS_nav_views.png",
        id: "eventTab1"
    });
    __alloyId46.push($.__views.eventTab1);
    $.__views.__alloyId65 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "EVENT",
        id: "__alloyId65"
    });
    $.__views.eventTab2 = Ti.UI.createTab({
        window: $.__views.__alloyId65,
        title: "Tab 3",
        icon: "KS_nav_views.png",
        id: "eventTab2"
    });
    __alloyId46.push($.__views.eventTab2);
    $.__views.__alloyId66 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "MAP",
        id: "__alloyId66"
    });
    $.__views.mapTab = Ti.UI.createTab({
        window: $.__views.__alloyId66,
        title: "Tab 4",
        icon: "KS_nav_views.png",
        id: "mapTab"
    });
    __alloyId46.push($.__views.mapTab);
    $.__views.__alloyId67 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "PERSONAL CENTER",
        id: "__alloyId67"
    });
    $.__views.logTab = Ti.UI.createTab({
        window: $.__views.__alloyId67,
        title: "Tab 5",
        icon: "KS_nav_views.png",
        id: "logTab"
    });
    __alloyId46.push($.__views.logTab);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId46,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId56.off("fetch destroy change add remove reset", __alloyId57);
        __alloyId63.off("fetch destroy change add remove reset", __alloyId64);
    };
    _.extend($, $.__views);
    $.index.open();
    Alloy.Collections.webNews.fetch();
    Alloy.Globals.TabGroup = $.index;
    __defers["$.__views.__alloyId48!click!newsClick1"] && $.addListener($.__views.__alloyId48, "click", newsClick1);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;