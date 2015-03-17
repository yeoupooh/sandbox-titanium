function openUrl(url, events) {
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			events.onload(this, e);
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			events.onerror(this, e);
		},
		timeout : 5000 // in milliseconds
	});
	// Prepare the connection.
	client.open("GET", url);
	// Send the request.
	client.send();
}

exports.openUrl = openUrl;
