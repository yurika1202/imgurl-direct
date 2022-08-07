import Dialog from './module/dialog.js';
import Generate from './module/generate.js';

function init() {
  new Dialog().action();
  new Generate().action();
}

window.addEventListener('load', () => {
  init();
});
