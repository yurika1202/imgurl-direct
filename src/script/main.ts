import Dialog from './module/dialog';
import Generate from './module/generate';

function init() {
  new Dialog().action();
  new Generate().action();
}

window.addEventListener('load', () => {
  init();
});
