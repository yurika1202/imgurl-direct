class Generate {
  constructor() {
    this.pasteInput = document.body.querySelectorAll('.js_generate_pasteInput');
    this.executionBtn = document.body.querySelectorAll('.js_generate_executionBtn');
    this.copyInput = document.body.querySelectorAll('.js_generate_copyInput');
    this.copyBtn = document.body.querySelectorAll('.js_generate_copyBtn');
    this.errorMsg = document.body.querySelectorAll('.js_generate_error');
    this.val = '';
  }

  action() {
    this.getValue();
  }

  getValue() {
    this.executionBtn.forEach(target => {
      target.addEventListener('click', e => {
        this.val = e.target.previousElementSibling.value;

        // GoogleDrive
        if (e.target.closest('.__google')) {
          this.errorMsg[0].classList.remove('is_display');

          if (this.val === '') {
            this.errorMsg[0].innerHTML = 'URLを入力してください &#128591';
            this.errorMsg[0].classList.add('is_display');
          } else if (!/^https:\/\/drive\.google\.com.*$/.test(this.val)) {
            this.errorMsg[0].innerHTML = 'GoogleDriveから取得したリンクではないようです &#128546';
            this.errorMsg[0].classList.add('is_display');
          } else if (!/^https:\/\/drive\.google\.com\/file\/.+$/.test(this.val)) {
            this.errorMsg[0].innerHTML = 'ファイル形式が正しくないようです &#128546';
            this.errorMsg[0].classList.add('is_display');
          } else {
            const id = /(?<=\/d\/).*?(?=\/view)/.exec(this.val);
            const replaceUrl = this.val.replace(/(?<=https:\/\/drive\.google\.com\/).*$/, `uc?export=view&id=${id}`);
            this.copyInput[0].value = replaceUrl;
          }
        }

        // DropBox
        if (e.target.closest('.__dropbox')) {
          this.errorMsg[1].classList.remove('is_display');

          if (this.val === '') {
            this.errorMsg[1].innerHTML = 'URLを入力してください &#128591';
            this.errorMsg[1].classList.add('is_display');
          } else if (!/^https:\/\/www\.dropbox\.com.*$/.test(this.val)) {
            this.errorMsg[1].innerHTML = 'DropBoxから取得したリンクではないようです &#128546';
            this.errorMsg[1].classList.add('is_display');
          } else if (!/^https:\/\/www\.dropbox\.com.*\/s\/.+$/.test(this.val)) {
            this.errorMsg[1].innerHTML = 'ファイル形式が正しくないようです &#128546';
            this.errorMsg[1].classList.add('is_display');
          } else {
            const replaceUrl = this.val.replace(/(?<=https:\/\/).*?(?=\.dropbox)/, `dl`);
            this.copyInput[1].value = replaceUrl;
          }
        }
      });
    });
  }
}

export default Generate;
