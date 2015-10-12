function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId23(e) {
        if (e && e.fromAdapter) return;
        __alloyId23.opts || {};
        var models = filterFunction(__alloyId22);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId15 = models[i];
            __alloyId15.__transform = transformFunction(__alloyId15);
            var __alloyId17 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            rows.push(__alloyId17);
            var __alloyId19 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId15.__transform["image"] ? __alloyId15.__transform["image"] : __alloyId15.get("image"),
                top: "20dp"
            });
            __alloyId17.add(__alloyId19);
            var __alloyId21 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId15.__transform["fullDes"] ? __alloyId15.__transform["fullDes"] : __alloyId15.get("fullDes"),
                bottom: "20dp"
            });
            __alloyId17.add(__alloyId21);
        }
        $.__views.__alloyId14.setData(rows);
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
    Alloy.Collections.instance("webNews");
    $.__views.win = Ti.UI.createWindow({
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId14 = Ti.UI.createTableView({
        id: "__alloyId14"
    });
    $.__views.win.add($.__views.__alloyId14);
    var __alloyId22 = Alloy.Collections["webNews"] || webNews;
    __alloyId22.on("fetch destroy change add remove reset", __alloyId23);
    exports.destroy = function() {
        __alloyId22.off("fetch destroy change add remove reset", __alloyId23);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var fid = args.fid || {};
    Alloy.Collections.webNews.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;