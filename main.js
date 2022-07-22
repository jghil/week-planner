var $entryButton = document.querySelector('.add-entry');
var $container = document.querySelector('.container');
var $modalContainer = document.querySelector('.modal-container');
$entryButton.addEventListener('click', openModal);

function openModal(event) {
  $container.className = 'container-clicked';
  $modalContainer.className = 'modal-container';
}
