function anonymizeCalendar() {
  const btnClass = 'anonymized';
  const newBtnClr = '#707579';
  const columns = document.querySelectorAll('[role="main"] *[role="gridcell"]');

  const styles = `
    <style>
      .${btnClass} {
        background-color: ${newBtnClr} !important;
        border-color: ${newBtnClr} !important;
        transition: background-color 500ms ease,
                    border-color 500ms ease;
      }
      .${btnClass} > * {
        opacity: 0 !important;
        transition: opacity 500ms ease;
      }
    </style>`;

  columns.forEach(column => {
    const buttons = column.querySelectorAll('[role="button"]');
    if (buttons.length > 0) {
      buttons.forEach(button => {
        button.classList.add(btnClass);
      });
    }
  });

  document.head.insertAdjacentHTML("beforeend", styles);
};

if (!document.body.classList.contains('isAnonymized')) {
  document.body.classList.add('isAnonymized');
  anonymizeCalendar();
} else {
  location.reload();
}
