let browerData = JSON.parse(localStorage.getItem('browerDatas')) || '';
function saveBrowerData() {
  localStorage.setItem('browerDatas', JSON.stringify(browerData))
}

export function logOut() {
  document.querySelectorAll('.logout').forEach(elem => {
    elem.addEventListener('click', () => {
      browerData = ''
      saveBrowerData()
      window.location.href = 'index.html'
    });
  });
}