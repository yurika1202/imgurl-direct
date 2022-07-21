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

          if (/^(?=.*drive.google).*$/.test(this.val) || /(?=.*file).*$/.test(this.val)) {
            console.log(this.val);

            if (!/(?=.*file).*$/.test(this.val)) {
              this.errorMsg[0].innerHTML = 'ファイル形式が画像ではないようです &#128546';
              this.errorMsg[0].classList.add('is_display');
            }
          } else {
            this.errorMsg[0].innerHTML = 'GoogleDriveから取得したリンクではないようです &#128546';
            this.errorMsg[0].classList.add('is_display');
          }
        }

        // DropBox
        if (e.target.closest('.__dropbox')) {
          this.errorMsg[1].classList.remove('is_display');

          if (/^(?=.*dropbox).*$/.test(this.val) || /(?=.*\/s\/).*$/.test(this.val)) {
            console.log(this.val);

            if (!/(?=.*\/s\/).*$/.test(this.val)) {
              this.errorMsg[1].innerHTML = 'ファイル形式が画像ではないようです &#128546';
              this.errorMsg[1].classList.add('is_display');
            }
          } else {
            this.errorMsg[1].innerHTML = 'DropBoxから取得したリンクではないようです &#128546';
            this.errorMsg[1].classList.add('is_display');
          }
        }
      });
    });
  }
}

export default Generate;
