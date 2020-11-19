import arrayGallery from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery.js-gallery');
const galeryMarkup = createGaleryMarkup(arrayGallery);
galleryContainer.insertAdjacentHTML('beforeend', galeryMarkup);

function createGaleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }, index) => {
      return `<li class="gallery__item">
            <a
        class="gallery__link"
        href="${original}"
        >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      data-index = "${index}"
    />
  </a>
</li>
`;
    })
    .join('');
}

const mainPicture = document.querySelector('.lightbox__image');
const modalContainer = document.querySelector('.js-lightbox');
const closeBtn = document.querySelector('[data-action="close-lightbox"]');
const backdropDiv = document.querySelector('.lightbox__overlay');

galleryContainer.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
backdropDiv.addEventListener('click', onBackDropClick);

function addImageAttribute(src, alt, index) {
  mainPicture.setAttribute('src', src);
  mainPicture.setAttribute('alt', alt);
  mainPicture.setAttribute('data-index', index);
}

function openModal(event) {
  event.preventDefault();

  const getImg = event.target;

  if (getImg.nodeName !== 'IMG') {
    return;
  }

  addImageAttribute(getImg.dataset.source, getImg.alt, getImg.dataset.index);

  window.addEventListener('keydown', onPressEsc);
  window.addEventListener('keydown', onRigthArrowPress);
  window.addEventListener('keydown', onLeftArrowPress);
  modalContainer.classList.add('is-open');
}

function closeModal() {
  window.removeEventListener('keydown', onPressEsc);
  window.removeEventListener('keydown', onRigthArrowPress);
  window.removeEventListener('keydown', onLeftArrowPress);
  modalContainer.classList.remove('is-open');
  mainPicture.src = '';
}

function onBackDropClick(e) {
  console.log(e.target);
  console.log(e.currentTarget);
  if (e.currentTarget === e.target) {
    closeModal();
  }
}

function onPressEsc(e) {
  if (e.code !== 'Escape') {
    return;
  }
  closeModal();
}

function callbackForArrowsPress(index, count) {
  let newIndex = index + count;

  if (newIndex === arrayGallery.length || newIndex < 0) return;

  mainPicture.src = arrayGallery[newIndex].original;
  mainPicture.alt = arrayGallery[newIndex].description;
  mainPicture.dataset.index = `${newIndex}`;
}

function onRigthArrowPress(event) {
  if (event.key === 'ArrowRight') {
    callbackForArrowsPress(+mainPicture.dataset.index, +1);
  }
}
function onLeftArrowPress(event) {
  if (event.key === 'ArrowLeft') {
    callbackForArrowsPress(+mainPicture.dataset.index, -1);
  }
}