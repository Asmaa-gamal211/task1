let imgs = document.querySelectorAll('.img');

imgs.forEach(i => {
  i.addEventListener('mouseover', function () {
    reset();
    i.classList.add('active')
  })
})

function reset() {
  imgs.forEach(i => {
    i.classList.remove('active')
  })
}



