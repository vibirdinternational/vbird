// Vercel Speed Insights initialization
// Dynamically inject the Speed Insights script
(function() {
  // Initialize the queue for Speed Insights
  if (!window.si) {
    window.si = function() {
      (window.siq = window.siq || []).push(arguments);
    };
  }
  
  // Only inject in production (on Vercel)
  // In development, the script won't track anything
  var isDevelopment = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1';
  
  if (!isDevelopment && !document.head.querySelector('script[src*="/speed-insights/script.js"]')) {
    var script = document.createElement('script');
    script.src = '/_vercel/speed-insights/script.js';
    script.defer = true;
    script.onerror = function() {
      console.log('[Vercel Speed Insights] Failed to load script. This is normal in development.');
    };
    document.head.appendChild(script);
  }
})();
