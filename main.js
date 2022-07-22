var $entryButton = document.querySelector('.add-entry');
var $container = document.querySelector('.container');

$entryButton.addEventListener('click', openModal);

function openModal(event) {
  $container.className = 'container-clicked';

}
