const items = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const imgWrapper = document.getElementById("img-wrapper");
const miniatures = document.getElementById("miniatures");

for (let i = 0; i < items.length; i++)
{
    const bigImg = document.createElement("div");
    bigImg.classList.add("img-lg");
    imgWrapper.appendChild(bigImg);

    const lilImg = document.createElement("div");
    lilImg.classList.add("lil-img");
    miniatures.appendChild(lilImg);

    const big = document.createElement("img");
    const img = document.createElement("img");
    big.src = img.src = items[i];
    bigImg.append(big);
    lilImg.append(img);

    const info = document.createElement("div");
    const country = document.createElement ("h1");
    const caption = document.createElement("span");
    bigImg.appendChild(info);
    info.appendChild(country);
    info.appendChild(caption);
    info.classList.add("info");
    country.classList.add("title");
    caption.classList.add("caption");
    country.innerText = title[i];
    caption.innerText = text[i];
}

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
