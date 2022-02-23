const slides = [
    {
        photo: 'img/01.jpg',
        country: 'Svezia',
        caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
    }, 
    {
        photo: 'img/02.jpg',
        country: 'Svizzera',
        caption: 'Lorem ipsum'
    },
    {
        photo: 'img/03.jpg',
        country: 'Gran Bretagna',
        caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        photo: 'img/04.jpg',
        country: 'Germania',
        caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    }, 
    {
        photo: 'img/05.jpg',
        country: 'Paradise',
        caption: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
    }
];

// console.log(slides);

const imgWrapper = document.getElementById("img-wrapper");
const miniatures = document.getElementById("miniatures");

slides.forEach((element) => {

    const bigImg = document.createElement("div");
    bigImg.classList.add("img-lg");
    imgWrapper.appendChild(bigImg);

    let newItem = `
    <img src="${element.photo}">
    <div class="info">
        <h1 class="title">${element.country}</h1>
        <p class="caption">${element.caption}</p>
    </div>
    `;

    bigImg.innerHTML += newItem;

    const littleImg = document.createElement("div");
    littleImg.classList.add("lil-img");
    miniatures.appendChild(littleImg);

    let newMiniatureItem = `<img src="${element.photo}">`;

    littleImg.innerHTML += newMiniatureItem;
});

let activeElement = 2;
const images = document.getElementsByClassName("img-lg");
const miniImg = document.getElementsByClassName("lil-img");
images[activeElement].classList.add("active");
miniImg[activeElement].classList.add("active-xs");

const up = document.getElementById("up");
const down = document.getElementById("down");

up.addEventListener("click", function()
{
    images[activeElement].classList.remove("active");
    miniImg[activeElement].classList.remove("active-xs");
    if (activeElement === 0)
        activeElement = ( images.length -1 );
    else
        activeElement--;
    images[activeElement].classList.add("active");
    miniImg[activeElement].classList.add("active-xs");
});

down.addEventListener("click", function()
{
    images[activeElement].classList.remove("active");
    miniImg[activeElement].classList.remove("active-xs");
    if (activeElement === images.length -1)
        activeElement = 0;
    else
        activeElement++;
    images[activeElement].classList.add("active");
    miniImg[activeElement].classList.add("active-xs");
});
  

