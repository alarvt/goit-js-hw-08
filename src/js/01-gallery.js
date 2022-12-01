// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const makeGalleryItemEl = ({ preview, description, original }) => {
  return `<a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>`;
};

const galleryList = galleryItems.map(makeGalleryItemEl).join("");


const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", galleryList);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captoinsDelay: 250,
});


import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

