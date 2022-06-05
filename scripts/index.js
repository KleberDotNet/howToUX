//Dark Mode Switch
const $html = document.querySelector('html')
const $button = document.querySelector('#dark-mode-switch')

$button.addEventListener('click', function() {
    $html.classList.toggle('dark-mode')
})

//Initialize Popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})