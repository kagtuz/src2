import { galleryItems } from './gallery-items.js';
// Change code below this line

galleryCardMarkup(galleryItems)

const containerGallery = document.querySelector('.gallery')
const cardsMarcup = galleryCardMarkup(galleryItems)

containerGallery.insertAdjacentHTML('beforeend', cardsMarcup)

containerGallery.addEventListener('click', onContainerGalleryClick)

function galleryCardMarkup(galleryItems) {
    const markupSmalImage = galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}" onclick="return false;">
         <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
         />
         </a>
         </div>
        `;
}).join('')

return markupSmalImage
}


function onContainerGalleryClick (evt) {
    console.log(evt.target)
    if(!evt.target.classList.contains('gallery__image')) {
        return
    }
    
  const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${evt.target.dataset.source}", width = "1300", height = "900">
    </div>
`)
instance.show();
  
    
    window.addEventListener("keydown", onEscape);
    function onEscape(evt) {
      const ESC_KEY_CODE = "Escape";
      if (evt.code === ESC_KEY_CODE) {
        instance.close();
        window.removeEventListener("keydown", onEscape);
      }
    }
  }