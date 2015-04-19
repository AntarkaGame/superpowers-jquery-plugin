var fs = require("fs");
SupAPI.registerPlugin("typescript", "Jquery", {
    code: "declare var Jquery;declare var $;",
    defs: fs.readFileSync(__dirname + "/jquery.d.ts.txt", { encoding: "utf8" }),
});
