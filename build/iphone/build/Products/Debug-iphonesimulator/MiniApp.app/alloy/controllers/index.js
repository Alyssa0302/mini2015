function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId37(e) {
        if (e && e.fromAdapter) return;
        __alloyId37.opts || {};
        var models = __alloyId36.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId29 = models[i];
            __alloyId29.__transform = transformFunction(__alloyId29);
            var __alloyId31 = Ti.UI.createTableViewRow({
                layout: "vertical",
                v_id: "undefined" != typeof __alloyId29.__transform["id"] ? __alloyId29.__transform["id"] : __alloyId29.get("id")
            });
            rows.push(__alloyId31);
            var __alloyId33 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId29.__transform["image"] ? __alloyId29.__transform["image"] : __alloyId29.get("image"),
                top: "20dp"
            });
            __alloyId31.add(__alloyId33);
            var __alloyId35 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "center",
                text: "undefined" != typeof __alloyId29.__transform["name"] ? __alloyId29.__transform["name"] : __alloyId29.get("name"),
                bottom: "20dp"
            });
            __alloyId31.add(__alloyId35);
        }
        $.__views.__alloyId28.setData(rows);
    }
    function __alloyId44(e) {
        if (e && e.fromAdapter) return;
        __alloyId44.opts || {};
        var models = __alloyId43.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId40 = models[i];
            __alloyId40.__transform = transformFunction(__alloyId40);
            var __alloyId42 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId40.__transform["organizer"] ? __alloyId40.__transform["organizer"] : __alloyId40.get("organizer"),
                fid: "undefined" != typeof __alloyId40.__transform["organizer"] ? __alloyId40.__transform["organizer"] : __alloyId40.get("organizer")
            });
            rows.push(__alloyId42);
        }
        $.__views.__alloyId39.setData(rows);
    }
    function __alloyId51(e) {
        if (e && e.fromAdapter) return;
        __alloyId51.opts || {};
        var models = __alloyId50.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId47 = models[i];
            __alloyId47.__transform = transformFunction(__alloyId47);
            var __alloyId49 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId47.__transform["organizer"] ? __alloyId47.__transform["organizer"] : __alloyId47.get("organizer"),
                fid: "undefined" != typeof __alloyId47.__transform["organizer"] ? __alloyId47.__transform["organizer"] : __alloyId47.get("organizer")
            });
            rows.push(__alloyId49);
        }
        $.__views.__alloyId46.setData(rows);
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        null == transform.thumbnail && (transform.thumbnail = "");
        return transform;
    }
    function Click1(e) {
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
    var __alloyId26 = [];
    $.__views.__alloyId27 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "webNews",
        id: "__alloyId27"
    });
    $.__views.__alloyId28 = Ti.UI.createTableView({
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    var __alloyId36 = Alloy.Collections["webNews"] || webNews;
    __alloyId36.on("fetch destroy change add remove reset", __alloyId37);
    Click1 ? $.addListener($.__views.__alloyId28, "click", Click1) : __defers["$.__views.__alloyId28!click!Click1"] = true;
    $.__views.newsTab1 = Ti.UI.createTab({
        window: $.__views.__alloyId27,
        title: "Tab 1",
        icon: "KS_nav_ui.png",
        id: "newsTab1"
    });
    __alloyId26.push($.__views.newsTab1);
    $.__views.__alloyId38 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "News_Info",
        id: "__alloyId38"
    });
    $.__views.__alloyId39 = Ti.UI.createTableView({
        onclick: "Click2",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    var __alloyId43 = Alloy.Collections["webNews"] || webNews;
    __alloyId43.on("fetch destroy change add remove reset", __alloyId44);
    $.__views.eventTab2 = Ti.UI.createTab({
        window: $.__views.__alloyId38,
        title: "Tab 2",
        icon: "KS_nav_views.png",
        id: "eventTab2"
    });
    __alloyId26.push($.__views.eventTab2);
    $.__views.__alloyId45 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "News_Info",
        id: "__alloyId45"
    });
    $.__views.__alloyId46 = Ti.UI.createTableView({
        onclick: "Click2",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    var __alloyId50 = Alloy.Collections["webNews"] || webNews;
    __alloyId50.on("fetch destroy change add remove reset", __alloyId51);
    $.__views.eventTab2 = Ti.UI.createTab({
        window: $.__views.__alloyId45,
        title: "Tab 2",
        icon: "KS_nav_views.png",
        id: "eventTab2"
    });
    __alloyId26.push($.__views.eventTab2);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId26,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId36.off("fetch destroy change add remove reset", __alloyId37);
        __alloyId43.off("fetch destroy change add remove reset", __alloyId44);
        __alloyId50.off("fetch destroy change add remove reset", __alloyId51);
    };
    _.extend($, $.__views);
    $.index.open();
    Alloy.Collections.webNews.fetch();
    Alloy.Globals.TabGroup = $.index;
    __defers["$.__views.__alloyId28!click!Click1"] && $.addListener($.__views.__alloyId28, "click", Click1);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;