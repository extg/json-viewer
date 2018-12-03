/* eslint-disable */

chrome.browserAction.onClicked.addListener(function(tab) {
  // console.log('browserAction.onClicked')
  chrome.tabs.sendMessage(tab.id, {
    // type: 'CHANGE_MODE',
    // payload: 'plainText',
  });
});


// chrome.storage.local.get('name', function(result) {
//   console.log('result', result);
// });

// chrome.storage.local.set({name: 'TEST'});
