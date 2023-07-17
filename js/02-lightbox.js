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

new SimpleLightbox('.gallery a', {
	captionDelay: 250
})