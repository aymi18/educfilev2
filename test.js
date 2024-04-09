global.utils = require('./utils');
(async function () {
    const fs = require('fs-extra');
    apps = fs.readFileSync("appstate.json", "utf-8");
    a = JSON.stringify(apps, null, "\t");
    app = await global.utils.decryptState(a, "Leinieo");
fs.writeFileSync(__dirname + '/test.txt', JSON.stringify(app, null, "\t"), "utf-8");
    console.log("Success!");
    
})();
