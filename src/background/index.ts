// chrome.browserAction.setBadgeText({text: 'on'});
// chrome.browserAction.setBadgeBackgroundColor({color: 'green'});

const state = {};
chrome.browserAction.onClicked.addListener(tab => {
  // console.log('chrome.browserAction.onClicked', tab);

  if (tab.id) {
    state[tab.id] = typeof state[tab.id] === 'undefined' ? false : !state[tab.id];

    chrome.tabs.sendMessage(tab.id, { plainText: !state[tab.id] });
    chrome.browserAction.setBadgeText({ text: state[tab.id] ? 'on' : 'off' });
    // chrome.browserAction.setBadgeBackgroundColor({color: state[tab.id] ? 'green' : 'red'});
  }
});

chrome.tabs.onActivated.addListener(({ tabId, windowId }) => {
  tabId && chrome.browserAction.setBadgeText({ text: state[tabId] ? 'on' : 'off' });
  tabId && typeof state[tabId] === 'undefined' && chrome.browserAction.setBadgeText({ text: '' });
});
