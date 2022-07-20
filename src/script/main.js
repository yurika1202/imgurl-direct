import Dialog from './module/dialog';

function init() {
  const dialog = new Dialog();
  dialog.action();
}

window.addEventListener('load', () => {
  init();
});
