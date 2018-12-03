/* eslint-disable */

function initApplication() {
    var styleTag = document.createElement('link');
    var customStyleTag = document.createElement('style');
    var customScriptTag = document.createElement('script');
    customStyleTag.id = 'custom-css';
    var cssFilePath = chrome.extension.getURL('/static/css/main.css');
    var jsFilePath = chrome.extension.getURL('/static/js/main.js');
    styleTag.setAttribute('href', cssFilePath);
    styleTag.rel = "stylesheet";
    styleTag.type = "text/css";
    styleTag.id = "main-css";
    customScriptTag.id = 'custom-script';
    if (document.querySelector('head')) {
        document.querySelector('head').appendChild(styleTag);
    } else {
        var headNode = document.createElement('head');
        document.querySelector('html').insertBefore(headNode, document.querySelector('body'))
    }
    document.head.appendChild(styleTag);
    document.head.appendChild(customStyleTag);
    document.head.appendChild(customScriptTag);
    var scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', jsFilePath);
    if (document.querySelector('body')) {
        document.querySelector('body').appendChild(scriptTag);
    } else {
        var body = document.createElement('body');
        document.querySelector('html').appendChild(body)
    }
};

function isJSONResponsePageOnly() {
    var content = document.body.textContent.trim();
    try {
        JSON.parse(content);
        return true;
    } catch (e) {
        return false;
    }
}
// alternative to DOMContentLoaded event
document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        if (isJSONResponsePageOnly()) {
            initApplication();
        }
    }
};

let plainText = true;
chrome.runtime.onMessage.addListener((message) => {
  // console.log('chrome.runtime.onMessage', message)
  render(window.json, {plainText});

  plainText = !plainText;
});