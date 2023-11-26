import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector("ul.gallery");

const images = galleryItems.map((item) => {
  return `<li>
     <a class="gallery__item" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
        />
     </a>
   </li>`;
});
galleryContainer.insertAdjacentHTML("beforeend", images.join("")); //stworzyłamm i dodałam elementy galerii przy użyciu insertAdjacentHTML, teraaz będę chciała uruchomić bibliotekę SimpleLightBox na tych elementach

// po dodaniu elementów do galerii tworzę obiekt SimpleLightBox i przekazuję mu dwa argumenty )=(zgodnie z dokumentacją): selektor '.gallery a' i opcje (pojawienie się podpisu po pewnym czasie)
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
