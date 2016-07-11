function getDomain(url){
	var host = "null";
	if(typeof url == "undefined" || null == url)
		url = window.location.href;
	var regex = /.*\:\/\/([^\/]*).*/;
	var match = url.match(regex);
	if(typeof match != "undefined" && null != match)
		host = match[1];
	return host;
}

function checkUrl(tabId, changeInfo, tab) {
	if(getDomain(tab.url).toLowerCase()=="www.ptt.cc"){
		chrome.browserAction.enable(tabId);
	}else {
		chrome.browserAction.disable(tabId);
	}
};

chrome.tabs.onUpdated.addListener(checkUrl);

