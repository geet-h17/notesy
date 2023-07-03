// Content scripts are optional and depend on your requirements.
// You can add any functionality related to web page interaction here.

// Example: Injecting a custom script into the current web page
var script = document.createElement('script');
script.src = chrome.runtime.getURL('custom_script.js');
script.onload = function() {
  this.remove();
};
(document.head || document.documentElement).appendChild(script);
