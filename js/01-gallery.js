import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

const galleryItemsArray = galleryItems.map(galleryItem => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
            <img 
                class="gallery__image" 
                src=${galleryItem.preview} 
                alt='${galleryItem.description}' 
                data-source="${galleryItem.original}"
            >
        </a>
    </div>`)
    .join('');

gallery.insertAdjacentHTML('beforeend', galleryItemsArray);

gallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return;
	}

    const selectedImage = event.target.getAttribute('data-source');

    const instance = basicLightbox.create(`<img src="${selectedImage}" width="800" height="600">`, {
        onShow: () => window.addEventListener('keydown', onEscKeyPress),
        onClose: () => window.removeEventListener('keydown', onEscKeyPress),
    });

    instance.show();
    
    function onEscKeyPress(event) {   
        if (event.key === 'Escape') {
			instance.close();
		}
    }
})