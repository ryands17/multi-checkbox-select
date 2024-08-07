import './style.css';

const inbox = document.querySelector('.inbox')!;
const checkboxIdPrefix = 'checkbox';
let initialCheckedBox: HTMLElement | null = null;
let checkedStatus = false;

inbox.addEventListener('click', (e) => {
  if (e instanceof MouseEvent) {
    if (e.target instanceof HTMLInputElement && e.target.matches('input')) {
      // check if the shift key was pressed
      if (e.shiftKey && initialCheckedBox) {
        let currentElementId = parseInt(
          e.target.id.slice(checkboxIdPrefix.length),
        );
        let initialElementId = parseInt(
          initialCheckedBox?.id?.slice(checkboxIdPrefix.length),
        );

        let a = Math.min(currentElementId, initialElementId);
        let b = Math.max(currentElementId, initialElementId);

        for (let i = a; i <= b; i++) {
          const inputElement = document.querySelector(
            `#${checkboxIdPrefix}${i}`,
          );

          if (inputElement instanceof HTMLInputElement)
            inputElement.checked = checkedStatus;
        }

        checkedStatus = false;
        initialCheckedBox = null;
      } else {
        initialCheckedBox = e.target;
        checkedStatus = e.target.checked;
      }
    }
  }
});
