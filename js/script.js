'use strict';

console.log('SCRIPT');

function loadScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.append(script);
};

loadScript('js/test.js');
loadScript('js/some.js');

