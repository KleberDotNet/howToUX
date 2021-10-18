//Dark Mode Switch
const $html = document.querySelector('html')
const $button = document.querySelector('#dark-mode-switch')

$button.addEventListener('click', function() {
    $html.classList.toggle('dark-mode')
})