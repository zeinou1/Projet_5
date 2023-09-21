// tableau slide
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span> en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];


//variales

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
let index = 0; 

//create carousel function
function CarouSel(index) {
  let img_banner = document.querySelector(".banner-img");
  img_banner.setAttribute(
    "src",
    "./assets/images/slideshow/" + slides[index].image
  ); //recupe image

  //recupe Tagline
  const tagLine = document.querySelector("#banner p");
  tagLine.innerHTML = slides[index].tagLine;
}

// create dots function
function CreateDot() {
  let dot_parent = document.querySelector(".dots");

  for (let i = 0; i < slides.length; i++) {
    let dot_child = document.createElement("div");
    dot_child.classList.add("dot");
    dot_parent.appendChild(dot_child);
  }
}
CreateDot(); //call function


function dotSelected (){
  // dot selected (par défaut)
const dot = document.querySelector(".dot")
dot.classList.add("dot_selected");
index[0] = dot;

// dots
for (let i = 0; i < slides.length; i++) {
  if (i === index) {
    document.querySelectorAll(".dot")[i].classList.add("dot_selected");
  } else {
    document.querySelectorAll(".dot")[i].classList.remove("dot_selected");
  }
}
} dotSelected (); //call function

// Bouton right
arrow_right.addEventListener("click", () => {
  //slide
  if (index === slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  CarouSel(index);
  dotSelected();
});

// Bouton left
arrow_left.addEventListener("click", () => {
  if (index === 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  CarouSel(index);
  dotSelected();
});


