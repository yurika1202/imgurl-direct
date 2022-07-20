class Dialog {
  constructor() {
    this.openBtn = document.body.querySelectorAll('.js_dialog_openBtn');
    this.closeBtn = document.body.querySelectorAll('.js_dialog_closeBtn');
  }

  action() {
    this.open();
  }

  open() {
    for (const targetBtn of this.openBtn) {
      const dialog = targetBtn.nextElementSibling;
      targetBtn.addEventListener('click', () => {
        dialog.setAttribute('open', 'true');
      });
    }
    this.close();
  }

  close() {
    for (const targetBtn of this.closeBtn) {
      const dialog = targetBtn.parentElement;
      targetBtn.addEventListener('click', () => {
        dialog.setAttribute('open', 'false');
      });
    }
  }
}

export default Dialog;
