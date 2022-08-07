class Generate {
  #generate = document.body.querySelectorAll('.js_generate');
  #pasteInput = document.body.querySelectorAll('.js_generate_pasteInput') as NodeListOf<HTMLInputElement> | null;
  #executionBtn = document.body.querySelectorAll('.js_generate_executionBtn') as NodeListOf<HTMLButtonElement> | null;
  #copyInput = document.body.querySelectorAll('.js_generate_copyInput') as NodeListOf<HTMLInputElement> | null;
  #copyBtn = document.body.querySelectorAll('.js_generate_copyBtn') as NodeListOf<HTMLButtonElement> | null;
  #errorMsg = document.body.querySelectorAll('.js_generate_pasteError');

  action() {
    if (this.#generate != null) {
      this.#replaceAction();
      this.copy();
    }
  }

  #replaceAction() {
    // 実行ボタンをクリックでイベント発火
    if (this.#executionBtn != null) {
      this.#executionBtn.forEach(target => {
        target.addEventListener('click', () => {
          const input = target.parentNode?.querySelector('input');
          if (input != null) {
            this.#replace(target, input.value);
          }
        });
      });
    }

    // Enterキーでイベント発火
    if (this.#pasteInput != null) {
      this.#pasteInput.forEach(target => {
        target.addEventListener('keydown', e => {
          if (e.key === 'Enter') {
            this.#replace(target, target.value);
          }
        });
      });
    }
  }

  #replace(target: HTMLElement, val: string) {
    // GoogleDrive
    if (target.closest('.__google') && this.#errorMsg[0] != null) {
      this.#errorMsg[0].classList.remove('is_display');

      if (val === '') {
        this.#errorMsg[0].innerHTML = 'URLを入力してください &#128591';
        this.#errorMsg[0].classList.add('is_display');
      } else if (!/^https:\/\/drive\.google\.com.*$/.test(val)) {
        this.#errorMsg[0].innerHTML = 'GoogleDriveから取得したリンクではないようです &#128546';
        this.#errorMsg[0].classList.add('is_display');
      } else if (!/^https:\/\/drive\.google\.com\/file\/.+$/.test(val)) {
        this.#errorMsg[0].innerHTML = 'ファイル形式が正しくないようです &#128546';
        this.#errorMsg[0].classList.add('is_display');
      } else {
        const id = /(?<=\/d\/).*?(?=\/view)/.exec(val);
        const replaceUrl = val.replace(/(?<=https:\/\/drive\.google\.com\/).*$/, `uc?export=view&id=${id}`);
        if (this.#copyInput != null) {
          this.#copyInput[0]!.value = replaceUrl;
        }
      }
    }

    // DropBox
    if (target.closest('.__dropbox') && this.#errorMsg[1] != null) {
      this.#errorMsg[1].classList.remove('is_display');

      if (val === '') {
        this.#errorMsg[1].innerHTML = 'URLを入力してください &#128591';
        this.#errorMsg[1].classList.add('is_display');
      } else if (!/^https:\/\/www\.dropbox\.com.*$/.test(val)) {
        this.#errorMsg[1].innerHTML = 'DropBoxから取得したリンクではないようです &#128546';
        this.#errorMsg[1].classList.add('is_display');
      } else if (!/^https:\/\/www\.dropbox\.com.*\/s\/.+$/.test(val)) {
        this.#errorMsg[1].innerHTML = 'ファイル形式が正しくないようです &#128546';
        this.#errorMsg[1].classList.add('is_display');
      } else {
        const replaceUrl = val.replace(/(?<=https:\/\/).*?(?=\.dropbox)/, `dl`);
        if (this.#copyInput != null) {
          this.#copyInput[1]!.value = replaceUrl;
        }
      }
    }
  }

  copy() {
    if (this.#copyBtn != null) {
      for (const target of this.#copyBtn) {
        target.addEventListener('click', () => {
          const input = target.previousElementSibling as HTMLInputElement | null;
          if (input != null && input.value !== '') {
            navigator.clipboard
              .writeText(input.value)
              .then(() => {
                target.classList.add('is_display');
                setTimeout(() => {
                  target.classList.remove('is_display');
                }, 2000);
              })
              .catch(error => {
                const errorMsg = target.parentElement!.nextElementSibling;
                if (errorMsg != null) {
                  errorMsg.classList.add('is_display');
                  console.error(error);
                }
              });
          }
        });
      }
    }
  }
}

export default Generate;
