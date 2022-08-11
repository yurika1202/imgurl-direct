import type {} from 'typed-query-selector/strict';

/**
 * Controls the display and hiding of dialogs.
 */
class Dialog {
  #dialog = document.body.querySelector('dialog.js_dialog');
  #openBtn = document.body.querySelectorAll('button.js_dialog_openBtn');
  #dialogContents = document.body.querySelector('div.js_dialog_contents');
  #fragment = document.createDocumentFragment();
  #scrollPosition: number = 0;

  action() {
    if (this.#dialog != null) {
      this.#open();
    }
  }

  /**
   * dialog is open.
   */
  #open() {
    if (this.#openBtn.length !== 0) {
      for (const targetBtn of this.#openBtn) {
        targetBtn.addEventListener('click', () => {
          this.#scrollPosition = window.scrollY;
          this.#createContents(targetBtn);
          this.#dialog!.showModal();
          this.#fixBody();
        });
      }
    }
  }

  /**
   * dialog is close.
   * @param closeBtn - Event target button for closing the dialog.
   */
  #close(closeBtn: HTMLButtonElement) {
    /**
     * Event - Close button pressed.
     */
    closeBtn.addEventListener('click', () => {
      this.#dialog!.close();
      this.#fixBody();
    });

    /**
     * Event - Escape Key pressed.
     */
    window.addEventListener('keydown', e => {
      if (this.#dialog!.open && e.key === 'Escape') {
        this.#dialog!.close();
        this.#fixBody();
      }
    });

    /**
     * Event - Outside of dialog pressed.
     */
    this.#dialog!.addEventListener('click', e => {
      if (e.target === this.#dialog) {
        this.#dialog!.close();
        this.#fixBody();
      }
    });
  }

  /**
   * Generate dialog content.
   * @param target - Open Target dialog button.
   */
  #createContents(target: HTMLButtonElement) {
    if (this.#dialogContents != null) {
      while (this.#dialogContents.firstChild) {
        this.#dialogContents.removeChild(this.#dialogContents.firstChild);
      }

      // create closeBtn.
      const closeBtn = document.createElement('button');
      const closeBtnAttr = {
        class: 'el_btn el_closeBtn js_dialog_closeBtn',
        type: 'button',
        'aria-label': '閉じる',
      };
      for (let attr of Object.entries(closeBtnAttr)) {
        closeBtn.setAttribute(attr[0], attr[1]);
      }
      for (let i = 0; i < 2; i += 1) {
        const span = document.createElement('span');
        closeBtn.appendChild(span);
      }

      // create stepList.
      const ol = document.createElement('ol');
      ol.className = 'bl_dialog_generateStep';
      for (let i = 0; i < 4; i += 1) {
        const li = document.createElement('li');
        ol.appendChild(li);
      }
      if (ol.hasChildNodes() && ol.childElementCount === 4) {
        if (target.classList.contains('__google')) {
          ol.children[0]!.textContent = 'GoogleDriveへ画像をアップロード';
          ol.children[1]!.textContent = '画像を選択し、「リンクを取得」から画像リンクをコピー';
        } else if (target.classList.contains('__dropbox')) {
          ol.children[0]!.textContent = 'DropBoxへ画像をアップロード';
          ol.children[1]!.textContent = '画像を選択し、「リンクをコピー」から画像リンクをコピー';
        }
        ol.children[2]!.textContent = 'このページに戻ってきて、取得してきたリンクを貼り付ける';
        ol.children[3]!.textContent = '生成されたURLをコピー';
      }

      // create message.
      const p = document.createElement('p');
      p.className = 'bl_dialog_message';
      const message = document.createTextNode('Have fun !!!');
      p.appendChild(message);

      //Add to DOM from DocumentFragment and register event for close button.
      this.#fragment.append(closeBtn, ol, p);
      this.#dialogContents.appendChild(this.#fragment);
      this.#close(closeBtn);
    }
  }

  /**
   * Scroll control when opening and closing dialogs.
   */
  #fixBody() {
    const html = document.querySelector('html');
    if (html != null) {
      if (this.#dialog!.open) {
        html.style.position = 'fixed';
        html.style.top = `${this.#scrollPosition * -1}px`;
      } else {
        html.style.position = '';
        html.style.top = '';
        window.scrollTo(0, this.#scrollPosition);
      }
    }
  }
}

export default Dialog;
