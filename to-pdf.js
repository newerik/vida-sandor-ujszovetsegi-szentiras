var Prince = require("prince");

Prince()
	.inputs("src/vida.html")
	.output("output/vida.pdf")
	.execute()
	.then(function () {
		console.log("OK: done");
	}, function (error) {
		console.log("ERROR: ", util.inspect(error));
	})