const harrow=document.getElementById("h-arrow");
const sArrow=document.getElementById("s-arrow");
const cArrow=document.getElementById("c-arrow");
const lArrow=document.getElementById("l-arrow");
const homebtn = document.getElementById("home");
const homeMenu=document.getElementById("home-menu");
const storebtn = document.getElementById("store");
const storeMenu=document.getElementById("store-menu");
const categorieBtn = document.getElementById("categories");
const categorieMenu=document.getElementById("categories-menu");
const langBtn = document.getElementById("lang");
const langMenu=document.getElementById("lang-menu");

const homeContainer = document.getElementById("homeContainer");
const movieSection = document.getElementById("movies-section");
//navigation
const allBtn = document.getElementById("all-btn")
const moviesBtn = document.getElementById("movies-btn")
const tvBtn = document.getElementById("tv-btn")
const rentBtn = document.getElementById("rent-btn")
const chBtn = document.getElementById("ch-btn")
const sAll = document.getElementById("s-all")
const primeBtn = document.getElementById("prime-home");

allBtn.onclick=openMovies
moviesBtn.onclick=openMovies
tvBtn.onclick=openMovies
rentBtn.onclick=openMovies
chBtn.onclick=openMovies
sAll.onclick=openMovies

primeBtn.onclick=closeMovies
homebtn.onclick=closeMovies
function openMovies(){
    homeContainer.style.display="none"
    movieSection.style.display="flex"
}
function closeMovies(){
    movieSection.style.display="none"
    homeContainer.style.display="block"
}
homebtn.onmouseenter=openHomeMenu;
homeMenu.onmouseleave=closeHomeMenu;
storebtn.onmouseenter=openStoreMenu;
storeMenu.onmouseleave=closeStoreMenu;
categorieBtn.onmouseenter=openCategorieMenu;
categorieMenu.onmouseleave=closeCategorieMenu;
langBtn.onmouseenter=openLangMenu;
langMenu.onmouseleave=closeLangMenu;
// homebtn.addEventListener("mouseenter",openHomeMenu);
// homebtn.addEventListener("mouseleave",closeHomeMenu);

function openHomeMenu(){
    homeMenu.style.display="flex";
    harrow.style.transform="rotate(180deg)"
    harrow.style.transition=".2s ease-in-out "
    console.log("homebtnclicked");
}
function closeHomeMenu(){
    homeMenu.style.display="none";
    harrow.style.transform="rotate(0deg)"
    console.log("homd");
}
function openStoreMenu(){
    storeMenu.style.display="flex";
    sArrow.style.transform="rotate(180deg)"
    sArrow.style.transition=".2s ease-in-out "
}
function closeStoreMenu(){
    storeMenu.style.display="none";
    sArrow.style.transform="rotate(0deg)"
}
function openCategorieMenu(){
    categorieMenu.style.display="flex";
    cArrow.style.transform="rotate(180deg)"
    cArrow.style.transition=".2s ease-in-out "
}
function closeCategorieMenu(){
    categorieMenu.style.display="none";
    cArrow.style.transform="rotate(0deg)"
}
function openLangMenu(){
    langMenu.style.display="flex";
    lArrow.style.transform="rotate(180deg)"
    lArrow.style.transition=".2s ease-in-out "
}
function closeLangMenu(){
    langMenu.style.display="none";
    lArrow.style.transform="rotate(0deg)"
}

