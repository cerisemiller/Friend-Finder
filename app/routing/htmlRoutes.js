var path = require("path");

module.exports = function(app) {

	app.get("/:pages?", function(req, res) {
		var chosen = req.params.pages;

		if (chosen) {
			console.log("[htmlRoutes.js] " + chosen);

			if (chosen === "survey") {
				return res.sendFile(path.join(__dirname, "../public/survey.html"));
			}
		}

		return res.sendFile(path.join(__dirname, "../public/home.html"));
	});
}
