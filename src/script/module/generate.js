class Generate {
  constructor() {
    this.pasteInput = document.body.querySelectorAll('.js_generate_pasteInput');
    this.executionBtn = document.body.querySelectorAll('.js_generate_executionBtn');
    this.copyInput = document.body.querySelectorAll('.js_generate_copyInput');
    this.copyBtn = document.body.querySelectorAll('.js_generate_copyBtn');
    this.errorMsg = document.body.querySelectorAll('.js_generate_error');
  }

  action() {
    this.replaceAction();
    this.copy();
  }

  replaceAction() {
    // 実行ボタンをクリックでイベント発火
    this.executionBtn.forEach(target => {
      target.addEventListener('click', e => {
        const input = e.target.previousElementSibling;
        this.replace(e.target, input.value);
      });
    });

    // Enterキーでイベント発火
    this.pasteInput.forEach(target => {
      target.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          this.replace(e.target, e.target.value);
        }
      });
    });
  }

  replace(target, val) {
    // GoogleDrive
    if (target.closest('.__google')) {
      this.errorMsg[0].classList.remove('is_display');

      if (val === '') {
        this.errorMsg[0].innerHTML = 'URLを入力してください &#128591';
        this.errorMsg[0].classList.add('is_display');
      } else if (!/^https:\/\/drive\.google\.com.*$/.test(val)) {
        this.errorMsg[0].innerHTML = 'GoogleDriveから取得したリンクではないようです &#128546';
        this.errorMsg[0].classList.add('is_display');
      } else if (!/^https:\/\/drive\.google\.com\/file\/.+$/.test(val)) {
        this.errorMsg[0].innerHTML = 'ファイル形式が正しくないようです &#128546';
        this.errorMsg[0].classList.add('is_display');
      } else {
        const id = /(?<=\/d\/).*?(?=\/view)/.exec(val);
        const replaceUrl = val.replace(/(?<=https:\/\/drive\.google\.com\/).*$/, `uc?export=view&id=${id}`);
        this.copyInput[0].value = replaceUrl;
      }
    }

    // DropBox
    if (target.closest('.__dropbox')) {
      this.errorMsg[1].classList.remove('is_display');

      if (val === '') {
        this.errorMsg[1].innerHTML = 'URLを入力してください &#128591';
        this.errorMsg[1].classList.add('is_display');
      } else if (!/^https:\/\/www\.dropbox\.com.*$/.test(val)) {
        this.errorMsg[1].innerHTML = 'DropBoxから取得したリンクではないようです &#128546';
        this.errorMsg[1].classList.add('is_display');
      } else if (!/^https:\/\/www\.dropbox\.com.*\/s\/.+$/.test(val)) {
        this.errorMsg[1].innerHTML = 'ファイル形式が正しくないようです &#128546';
        this.errorMsg[1].classList.add('is_display');
      } else {
        const replaceUrl = val.replace(/(?<=https:\/\/).*?(?=\.dropbox)/, `dl`);
        this.copyInput[1].value = replaceUrl;
      }
    }
  }

  copy() {
    for (const target of this.copyBtn) {
      target.addEventListener('click', () => {
        const input = target.previousElementSibling;
        if (input.value !== '') {
          navigator.clipboard
            .writeText(input.value)
            .then(() => {
              console.log('ok');
            })
            .catch(error => {
              console.log('ng');
            });
        }
      });
    }
  }
}

export default Generate;
