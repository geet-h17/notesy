// Background scripts are optional and depend on your requirements.
// You can add any background functionality here.
// For example, you can listen for clipboard events and update the note.

// Example: Listening for clipboard events
chrome.clipboard.onClipboardDataChanged.addListener(function() {
    chrome.clipboard.readText(function(clipboardText) {
      // Do something with the clipboard text
      console.log('Clipboard changed:', clipboardText);
    });
  });
  