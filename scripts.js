function goToPage(url){
  document.body.style.opacity = 0;
  setTimeout(()=>{ window.location.href = url; },400);
}

window.onload = () => {
  document.body.style.opacity = 1;
};
