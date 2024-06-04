import { searchImage } from "./js/pixabay-api";
import { imagesTemplate } from "./js/render-functions";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const formEL = document.querySelector(".form");
const galleryList = document.querySelector(".gallary");

formEL.addEventListener("submit", evt => {
    evt.preventDefault();
    const InputValue = evt.target.elements.search.value.trim();

    searchImage(InputValue).then(data => {
        console.log(data.hits);
        const markup = imagesTemplate(data.hits);
        galleryList.innerHTML = markup;
        const galleryModel = new SimpleLightbox('.gallary a', {
            captionsData: "alt",
            captionPosition: "bottom",
            captionDelay: 250,
        });
        galleryModel.on('show.simplelightbox', function () {
            // do something…
        }); 
    })
    
});

     