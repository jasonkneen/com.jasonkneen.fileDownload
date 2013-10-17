var args = arguments[0] || {};

exports.start = function() {
	if (!args.url) {

		throw (Widget.widgetId + ": No URL Specified");

	} else if (!args.fileName) {

		throw (Widget.widgetId + ": No fileName Specified");

	} else {

		fileDownload(args.url, args.fileName, function(e) {
			$.progress.message = "Downloaded";
		}, function(e) {
			$.progress.show();
			$.progress.value = e.progress;
			$.progress.message = "Downloading " + parseInt(e.progress * 100) + "%";
		}, function(e) {
			$.progress.message = "Error downloading";
		});
	}
};

function fileDownload(url, filename, callbackSuccess, callbackProgress, callbackError) {

	console.log("downloading file " + url);

	var client = Ti.Network.createHTTPClient({
		timeout : 30 * 60 * 1000
	});

	if (callbackProgress) {
		client.ondatastream = callbackProgress;
	}

	client.open('GET', url);
	client.file = Ti.Filesystem.getFile(Titanium.Filesystem.applicationSupportDirectory, filename);
	client.file.remoteBackup = false;

	if (callbackSuccess) {
		client.onload = callbackSuccess;
	}
	if (callbackError) {
		client.onerror = callbackError;
	}
	client.send();
}