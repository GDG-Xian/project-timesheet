chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    id: 'main',
    outerBounds: {
      width: 400,
      height: 600
    }
  });
});
