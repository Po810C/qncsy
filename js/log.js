let autoDarkMode = localStorage.getItem("autoDarkMode") != "off";
if (autoDarkMode) {
	loadCss("styles/dark-log.css");
}

function loadCss(href) {
	var addSign = true;
	var links = document.getElementsByTagName("link");
	for (var i = 0; i < links.length; i++) {
		if (links[i] && links[i].href && links[i].href.indexOf(href) != -1) {
			addSign = false;
		}
	}
	if (addSign) {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = href;
		document.head.appendChild(link);
	}
}

function removeCss(href) {
	var links = document.getElementsByTagName("link");
	for (var i = 0; i < links.length; i++) {
		if (links[i] && links[i].href && links[i].href.indexOf(href) != -1) {
			links[i].parentNode.removeChild(links[i]);
		}
	}
}
const LSPAge = parseInt((new Date().getTime() - new Date("2017-10-02").getTime()) / 86400000);
txtDays.innerText = LSPAge;