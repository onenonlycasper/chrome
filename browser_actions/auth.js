var bg = chrome.extension.getBackgroundPage();
var twocloud = bg.twocloud;

var return_link = chrome.extension.getURL("callback.html");

var redirect_to = twocloud.sessions.url(return_link);

$("#login_link").attr("href", redirect_to);
$("#login_link").click(function(){
	chrome.tabs.create({
		"url": redirect_to
	});
});
$("#login_link").removeClass("disabled");
