var ghpages = require("gh-pages");

ghpages.publish("./dest", {
		user: {
			name: "Kaoru Tisen",
			email: "cordx56@cordx.net"
		},
		message: "Web page AUTO UPDATE"
	}, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log("Successfully Updated!");
		}
	});
