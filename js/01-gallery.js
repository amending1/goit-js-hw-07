import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector("ul.gallery");

const images = galleryItems.map((item) => {
  return `<li>
    <div class="gallery__item">
     <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
     </a>
    </div>
   </li>`;
});
galleryContainer.insertAdjacentHTML("beforeend", images.join("")); //robię listę obrazów w wersji preview, teraz każdy obraz został przekształcony przy użyciu .map w element html, te elementy są "zamknięte"  tablicy. Funkcja .join połączy wszystkie elementy

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault(); //  jest używane, aby zapobiec standardowej akcji, czyli przejście do nowego adresu URL w przypadku kliknięcia na odnośnik (<a>).  My chcemy obsłużyć kliknięcie w inny sposób, czyli wyświetlić obraz w oknie modalnym (basicLightbox)
  console.log(event.target);
  console.log(JSON.stringify(event.target.classList)); // ta linijka kodu w narzędziach deweloperskich wyświetli informacje o właśnie klikniętym zdjęciu
  if (event.target.nodeName === "IMG") {
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}" alt="${event.target.alt}" />` // Tworzy nowe okno modalne przy użyciu biblioteki basicLightbox, a w jego wnętrzu umieszcza element <img>
    );
    instance.show(); //wyświetla okno modalne

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        // funkcja sprawdza, czy naciśnięty klawisz to Escape
        instance.close(); //wywołuje metodę .close na obiekcie instance
      }
    });
  }
});
