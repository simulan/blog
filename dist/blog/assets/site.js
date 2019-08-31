console.log('hi');

document.addEventListener('DOMContentLoaded', () => {
  onLoadDocument();
});

function onLoadDocument() {
  document.onkeydown = onKey;
}
function onKey(event) {
  console.log(event);
}
