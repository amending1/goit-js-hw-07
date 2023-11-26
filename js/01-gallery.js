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
let instance; // Miałam zdefiniowaną zmienną instance wewnątrz eventListenera nasłuchującego na klikięcie i przez to w eventListenerze nasłuchującym na klawiaturę, ta zmienna nie była dostępna i kod mi nie działał

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault(); //  jest używane, aby zapobiec standardowej akcji, czyli przejście do nowego adresu URL w przypadku kliknięcia na odnośnik (<a>).  My chcemy obsłużyć kliknięcie w inny sposób, czyli wyświetlić obraz w oknie modalnym (basicLightbox)
  console.log(event.target); // ta linijka kodu w narzędziach deweloperskich wyświetli informacje o właśnie klikniętym zdjęciu
  //zmienna selectedPhoto będzie zawierać obiekt reprezentujący okno modalne z wybranym obrazem

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}" />` // Tworzy nowe okno modalne przy użyciu biblioteki basicLightbox, a w jego wnętrzu umieszcza element <img>
  );
  instance.show(); //wyświetla okno modalne
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    // funkcja sprawdza, czy naciśnięty klawisz to Escape
    instance.close(); //wywołuje metodę .close na obiekcie instance
  }
});
// funkcja zamykania przy użyciu Escape nie działa, nie umiem znaleźć błędu
