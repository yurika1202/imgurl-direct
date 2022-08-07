import 'typed-query-selector';

class Dialog {
  #dialog = document.body.querySelector('dialog.js_dialog');
  #openBtn = document.body.querySelectorAll('button.js_dialog_openBtn');
  #closeBtn = document.querySelector('button.js_dialog_closeBtn');
  #dialogContents = document.body.querySelector('ol.js_dialog_contents');
  #fragment = document.createDocumentFragment();
  #scrollPosition: number = 0;

  action() {
    if (this.#dialog != null) {
      if (this.#openBtn != null) {
        this.#open();
      }
      if (this.#closeBtn != null) {
        this.#close();
      }
    }
  }

  #open() {
    for (const targetBtn of this.#openBtn) {
      targetBtn.addEventListener('click', () => {
        this.#scrollPosition = window.scrollY;
        this.#createContents(targetBtn);
        this.#dialog!.showModal();
        this.#fixBody();
      });
    }
  }

  #close() {
    // 閉じるボタンが押されたとき
    this.#closeBtn!.addEventListener('click', () => {
      this.#dialog!.close();
      this.#fixBody();
    });

    // Escapeキーが押されたとき
    window.addEventListener('keydown', e => {
      if (this.#dialog!.open && e.key === 'Escape') {
        this.#dialog!.close();
        this.#fixBody();
      }
    });

    // モーダル外をクリックしたとき
    this.#dialog!.addEventListener('click', e => {
      if (e.target === this.#dialog) {
        this.#dialog!.close();
        this.#fixBody();
      }
    });
  }

  #createContents(target: HTMLElement) {
    if (this.#dialogContents != null) {
      // コンテンツの中身を空にしておく
      while (this.#dialogContents.firstChild) {
        this.#dialogContents.removeChild(this.#dialogContents.firstChild);
      }

      for (let i = 0; i < 4; i += 1) {
        const childElement = document.createElement('li');
        this.#fragment.append(childElement);
      }
      if (this.#fragment.hasChildNodes() && this.#fragment.childElementCount === 4) {
        if (target.classList.contains('__google')) {
          this.#fragment.children[0]!.textContent = 'GoogleDriveへ画像をアップロード';
          this.#fragment.children[1]!.textContent = '画像を選択し、「リンクを取得」から画像リンクをコピー';
          this.#fragment.children[2]!.textContent = 'このページに戻ってきて、取得してきたリンクを貼り付ける';
          this.#fragment.children[3]!.textContent = '生成されたURLをコピー';
          this.#dialogContents!.append(this.#fragment);
        } else if (target.classList.contains('__dropbox')) {
          this.#fragment.children[0]!.textContent = 'DropBoxへ画像をアップロード';
          this.#fragment.children[1]!.textContent = '画像を選択し、「リンクをコピー」から画像リンクをコピー';
          this.#fragment.children[2]!.textContent = 'このページに戻ってきて、取得してきたリンクを貼り付ける';
          this.#fragment.children[3]!.textContent = '生成されたURLをコピー';
          this.#dialogContents!.append(this.#fragment);
        }
      }
    }
  }

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
