import 'typed-query-selector/strict';

/**
 * Retrieve the input link and convert it to a direct link.
 */
class Generate {
  #generate = document.body.querySelectorAll('div.js_generate');
  #pasteInput = document.body.querySelectorAll('input.js_generate_pasteInput');
  #executionBtn = document.body.querySelectorAll('button.js_generate_executionBtn');
  #copyInput = document.body.querySelectorAll('input.js_generate_copyInput');
  #copyBtn = document.body.querySelectorAll('button.js_generate_copyBtn');
  #errorMsg = document.body.querySelectorAll('p.js_generate_pasteError');

  action() {
    if (this.#generate != null) {
      if (this.#pasteInput != null && this.#executionBtn != null) {
        this.#replaceAction();
      }
      if (this.#copyInput != null && this.#copyBtn != null) {
        this.copy();
      }
    }
  }

  /**
   * Conversion Execution.
   */
  #replaceAction() {
    /**
     * Event - Execute button pressed.
     */
    this.#executionBtn.forEach(target => {
      target.addEventListener('click', () => {
        const input = target.parentNode?.querySelector('input');
        if (input != null) {
          this.#replace(target, input.value);
        }
      });
    });

    /**
     * Event - Enter key pressed.
     */
    this.#pasteInput.forEach(target => {
      target.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          this.#replace(target, target.value);
        }
      });
    });
  }

  /**
   * Replace with direct link and create validation message.
   * @param target - Inputs with links entered.
   * @param val - Link info.
   */
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
        this.#copyInput[0]!.value = replaceUrl;
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
        this.#copyInput[1]!.value = replaceUrl;
      }
    }
  }

  /**
   * Copy to clipboard.
   */
  copy() {
    for (const target of this.#copyBtn) {
      target.addEventListener('click', () => {
        const input = target.parentNode?.querySelector('input');
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
              const errorMsg = target.parentElement?.nextElementSibling;
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

export default Generate;
