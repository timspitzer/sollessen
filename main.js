document.addEventListener('DOMContentLoaded', yesOrNo());

function yesOrNo() {
  let color = '';
  const paragraph = document.getElementById('paragraph');
  const link = document.getElementById('link');
  if (Math.random() < 0.5) {
    document.body.style.background = '#4CDB17';
    paragraph.innerHTML = 'Ja';
    link.style.display = 'inline';
  }
  else {
    document.body.style.background = '#FF2400';
    paragraph.innerHTML = 'Nein';
  }
}