// 禁止右键菜单
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
}, false);

// 禁止 F12 和 Ctrl+U
document.onkeydown = function(e) {
  if (e.ctrlKey && e.key.toLowerCase() === 'u') {
    return false;
  }
  if (e.keyCode === 123) { // F12
    return false;
  }
}
// 禁止复制
document.addEventListener('copy', function(e) {
  e.preventDefault();
});
