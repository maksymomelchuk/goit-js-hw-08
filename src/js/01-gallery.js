import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


// Create gallery
const galleryRef = document.querySelector('.gallery')

const result = galleryItems
  .map((item) => {
    return `<a class="gallery__item" href="${item.original}" target="_blank">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
  })
  .join('')

// Create HTML page
galleryRef.insertAdjacentHTML('afterbegin', result)

// Show SimpleLightbox gallery
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
})
gallery.on('show.simplelightbox')

gallery.on('error.simplelightbox')