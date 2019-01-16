browser.runtime.onMessage.addListener(message => {
  if (message.type === 'GREETING') {
    return new Promise(resolve =>
      setTimeout(() => resolve('Hi! Got your message a second ago.'), 1000),
    );
  }
});

chrome.browserAction.onClicked.addListener(tab => tab.id && chrome.tabs.sendMessage(tab.id, {}));
