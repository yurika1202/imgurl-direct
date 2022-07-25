class Dialog {
  constructor() {
    this.dialog = document.body.querySelector('.js_dialog');
    this.openBtn = document.body.querySelectorAll('.js_dialog_openBtn');
    this.closeBtn = document.body.querySelectorAll('.js_dialog_closeBtn');
    this.dialogContents = document.body.querySelector('.js_dialog_contents');
    this.dialogContentsHTML = '';
    this.fragment = document.createDocumentFragment();
  }

  action() {
    this.open();
  }

  open() {
    for (const targetBtn of this.openBtn) {
      targetBtn.addEventListener('click', () => {
        this.createContents(targetBtn);
        this.dialog.setAttribute('open', 'true');
      });
    }
    this.close();
  }

  close() {
    for (const targetBtn of this.closeBtn) {
      targetBtn.addEventListener('click', () => {
        this.dialog.setAttribute('open', 'false');
      });
    }
  }

  createContents(target) {
    // コンテンツの中身を空にしておく
    while (this.dialogContents.firstChild) {
      this.dialogContents.removeChild(this.dialogContents.firstChild);
    }

    for (let i = 0; i < 4; i += 1) {
      const childElement = document.createElement('li');
      this.fragment.append(childElement);
    }
    if (target.classList.contains('__google')) {
      this.fragment.children[0].textContent = 'GoogleDriveへ画像をアップロード';
      this.fragment.children[1].textContent = '画像を選択し、「リンクを取得」から画像リンクをコピー';
      this.fragment.children[2].textContent = 'このページに戻ってきて、取得してきたリンクを貼り付ける';
      this.fragment.children[3].textContent = '生成されたURLをコピー';
      this.dialogContents.append(this.fragment);
    } else if (target.classList.contains('__dropbox')) {
      this.fragment.children[0].textContent = 'DropBoxへ画像をアップロード';
      this.fragment.children[1].textContent = '画像を選択し、「リンクをコピー」から画像リンクをコピー';
      this.fragment.children[2].textContent = 'このページに戻ってきて、取得してきたリンクを貼り付ける';
      this.fragment.children[3].textContent = '生成されたURLをコピー';
      this.dialogContents.append(this.fragment);
    }
  }
}

export default Dialog;
