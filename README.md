# goit-js-hw-08-gallery

<!-- import arrayGallery from './gallery-items.js'


const galleryContainer = document.querySelector('.gallery.js-gallery')

const galeryMarkup = createGaleryMarkup(arrayGallery)
galleryContainer.insertAdjacentHTML('beforeend', galeryMarkup)

function createGaleryMarkup(gallery) {

return gallery.map(({preview, original, description},index) => {
        return `<li class="gallery__item">
            <a
        class="gallery__link"
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
    .join('')
}

const mainPicture = document.querySelector('.lightbox__image')
const modalContainer = document.querySelector('.js-lightbox')
const closeBtn = document.querySelector('[data-action="close-lightbox"]')
const backdropDiv = document.querySelector('.lightbox__overlay')

galleryContainer.addEventListener('click', onGalleryContainerClick)
closeBtn.addEventListener('click', closeModal)
backdropDiv.addEventListener('click', onBackDropClick)


function onGalleryContainerClick(e) {
  console.log(e);
  console.log(e.target.dataset.index);
    if (e.target.classList.contains('gallery__image')) {
      mainPicture.src = e.target.dataset.source;
      mainPicture.alt = e.target.alt;
     mainPicture.setAttribute('data-index', e.target.dataset.index)
        openModal()
    }
}

function openModal() {
  window.addEventListener('keydown', onPressEsc)
  window.addEventListener('keydown', onPressXXX)
    modalContainer.classList.add('is-open')
}

function closeModal() {
  window.removeEventListener('keydown', onPressEsc)
  window.removeEventListener('keydown', onPressXXX)
    modalContainer.classList.remove('is-open')
    mainPicture.src = ""
}

function onBackDropClick(e) {
  console.log(e.target);
  console.log(e.currentTarget);
    if (e.currentTarget === e.target) {
       closeModal()
    }
}

function onPressEsc(e) {
  console.log(e.code);
  if (e.code === 'Escape') {
    closeModal()
  }
}

function onPressXXX(e) {
   let index = Number(mainPicture.dataset.index)
  if (e.code === 'ArrowRight') {
    let rigthIndex = index + 1
    rigth(rigthIndex)
  } else if (e.code === 'ArrowLeft') {
    let leftIndex = index - 1
    left(leftIndex)
  }

}

function rigth(i) {
  console.log(i);
  if(i === arrayGallery.length ) return
  mainPicture.src = arrayGallery[i].original;
  mainPicture.alt = arrayGallery[i].description
  mainPicture.dataset.index = `${i}`

}
function left(i) {
  console.log(i);
  if(i <0 ) return
  mainPicture.src = arrayGallery[i].original;
  mainPicture.alt = arrayGallery[i].description
  mainPicture.dataset.index = `${i}`

} -->
