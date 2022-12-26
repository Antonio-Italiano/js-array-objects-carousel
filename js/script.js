// ARRAY DI OGGETTI CON INFORMAZIONI DA AGGIUNGERE IN PAG
const data = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

// RECUPERO GLI ELEMENTI DAL DOM
const carouselDom = document.getElementById('carousel');
const thumbDom = document.getElementById('thumb');
const buttonPrev = document.getElementById('prev-button');
const buttonNext = document.getElementById('next-button');


// CREO LE VARIABILI D'APPOGGIO
let imagesGallery = '';
let thumbGallery = '';

// CREO UN CICLO CHE STAMPI IN PAGINA LA GALLERY CON LE IMG
for (let i = 0; i < data.length; i++){
  imagesGallery += ` 
                <div class="gallery my-4">
                  <img src= ${data[i].image} alt="webp"> 
                  <div class="text text-white text-end px-5">
                    <h2>${data[i].title}</h2>
                    <h4>${data[i].text} </h4> 
                  </div>   
                </div>   
              `;

  thumbGallery += `<img src= ${data[i].image} alt="webp">`;          
}

// STAMPO NEL DOM
carouselDom.innerHTML = images;
thumbDom.innerHTML = thumb;


const carouselElements = document.querySelectorAll('#carousel .gallery');
const thumbImages = document.querySelectorAll('#thumb img');



let index = 0;
carouselElements[index].classList.add('active');
thumbImages[index].classList.add('selected');

// CREO L'EVENTO AL CLICK SUL BOTTONE
buttonNext.addEventListener('click', function(){
  
  carouselElements[index].classList.remove('active');
  thumbImages[index].classList.remove('selected');

  index++;

  if (index === carouselElements.length){
    index = 0;
  }

  carouselElements[index].classList.add('active');
  thumbImages[index].classList.add('selected');

})

// CREO L'EVENTO AL CLICK SUL BOTTONE
buttonPrev.addEventListener('click', function(){
  
  carouselElements[index].classList.remove('active');
  thumbImages[index].classList.remove('selected');

  index--;

  if (index < 0){
    index = carouselElements.length - 1;
  }

  carouselElements[index].classList.add('active');
  thumbImages[index].classList.add('selected');

})


for (let i = 0; i < thumbImages.length; i++){

     const imgThumb = thumbImages[i];

     imgThumb.addEventListener('click', function(){
       carouselElements[index].classList.remove('active');
       thumbImages[index].classList.remove('selected');
       
       index = i;
       
       carouselElements[index].classList.add('active');
       thumbImages[index].classList.add('selected');
 
     })
}









