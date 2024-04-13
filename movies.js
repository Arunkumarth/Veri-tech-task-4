const moviesSection = document.getElementById("movies-section");
const cartoonsFlex=document.getElementById("cartoons");
const transBtn = document.getElementById("cartoon-trans-btn");
const moviesCard=document.getElementsByClassName("moviesCard");
const array=["Kong skull island","Godzilla vs Kong","Godzilla x Kong","Godzilla King of all monsters","Godzilla","Doom","MIB","Avengers End game"]
for (let index = 0; index < array.length; index++) {
    const card=document.createElement("div");
    card.setAttribute("class","moviesCard");
    card.innerHTML=`
    <section class="moviesCard">
    <section class="moviesCardImage">
        <img src="images/movieposters/landscape.jpeg" alt="poster">
    </section>
    <section class="moviesCardContent">
        <div class="pTrial">
            <!-- tick img here -->
            Watch with a free Prime trial
        </div>
        <div class="CardName">
            <div class="movieName">${array[index]}</div>
            <button class="plus-iconSmall">+</button>
            <button class="trailer-icon">
                <!-- image here -->
            </button>
        </div>
        <div class="cardYear">
            <p>2024</p>
            <p>2 h 19 min</p>
            <div class="UAsmall">U/A 16+</div>
        </div>
        <div class="movieDescription">
            Manu, an artist, is on a mission to get noticed again 
            after advanced printing technology...
        </div>
    </section>
</section>
    `
cartoonsFlex.appendChild(card);
}



for (let index = 0; index < array.length-5; index++) {
    const movieFlex = document.createElement("div");
    movieFlex.setAttribute("class","moviesFlex");
    movieFlex.innerHTML=`
    <div class="moviesFlex">
                <section class="moviesHead">
                    <span class="prime">Prime</span>
                    <span class="prime-categorie">Top movies</span>
                    <button class="seeMore">See more ></button>
                </section>
                <section class="moviesContainer">
                    <section class="moviesCard">
                        <section class="moviesCardImage">
                            <img src="images/movieposters/landscape.jpeg" alt="poster">
                        </section>
                        <section class="moviesCardContent">
                            <div class="pTrial">
                                <!-- tick img here -->
                                Watch with a free Prime trial
                            </div>
                            <div class="CardName">
                                <div class="movieName">${array[index]}</div>
                                <button class="plus-iconSmall">+</button>
                                <button class="trailer-icon">
                                    <!-- image here -->
                                </button>
                            </div>
                            <div class="cardYear">
                                <p>2024</p>
                                <p>2 h 19 min</p>
                                <div class="UAsmall">U/A 16+</div>
                            </div>
                            <div class="movieDescription">
                                Manu, an artist, is on a mission to get noticed again 
                                after advanced printing technology...
                            </div>
                        </section>
                    </section>
                </section>
            </div>

    `
    moviesSection.appendChild(movieFlex)
}

transBtn.addEventListener("click",trans)
function trans(){
    console.log("translated");
    // cartoonsFlex.transform="translate(42px,0)";
    cartoonsFlex.scrollLeft+=150;
    // cartoonsFlex.transition="1s"
}
