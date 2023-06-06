<script>
    import { onMount } from "svelte";

  let cards = [];

  let cardimages = ["tl_face.png",
  "greyface.png",
  "greenskull.png",
  "child worker.png",
  "coal mine.png",
  "default_pfp.jpg",];

  let startcardlength = cardimages.length;
  for (let index=0; index < startcardlength; index++) {
    cardimages.push(cardimages[index]);
  }

  shuffle(cardimages)

  let canflip = true;

  let previouscard;

  for (let index = 0; index < cardimages.length; index++) {
    cards.push({
      id: index, // TODO: unique ids per card card
      img: cardimages[index], // TODO: unique images per card card
      flipped: false,  // TODO: think
      completed: false,
    });
  }
  let flipcount = 0;
  function flip(card) {
    // flip card over if two cards are not already flipped
    // TODO: and card is already not flipped
    if (!card.flipped && flipcount < 2 && canflip) {
      // TODO: Probably do what?
      if (flipcount == 1){
        if (card.img == previouscard.img){
          previouscard.completed = true;
          card.completed = true; 
          flipcount = -1; // lite mong men de funka
        }
      }
      previouscard = card;
      card.flipped = true;
      flipcount++;

      // flip the cards over after 2s from seeing both cards
      if (flipcount == 2) {
        setTimeout(() => {
          // flip over cards that have not been marked as "completed"
          cards.forEach((card) => {
            card.flipped = card.completed;
          });
          flipcount = 0;
          cards = cards;
        }, 1000);
      }
      cards = cards;
    } else {
      
    }
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }


  function restart(){
    cards.forEach((card) => {
      card.flipped = false; 
      card.completed = false; 
    })
    flipcount = 0;
    cards = cards;
    previouscard = "";
    canflip = false;
    setTimeout(()=>{
      shuffle(cards);
      cards = cards;
      canflip = true;
    }, 1000)
  }

  </script>
  <body>
    <main>
      <div class="row">
        {#each cards as card, i}
          <div
            on:click={() => {
              flip(card);
            }}
            on:keypress={() => {
              flip(card);
            }}
            class:flipped={card.flipped}
            class="card"
          >
            <img class="front" src={card.img} alt="" />
            <img class="back" src="fleshdoor.png" alt="" />
          </div>
        {/each}
      </div>
    </main>
    <img class="reset_button" src="restart.png" alt ="" on:keypress={()=>{ restart(); }} on:click={()=>{ restart(); }}/>
  </body>
  
  
  
  <style>
    
    .reset_button {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }

    main {
      margin-top: 50px;
      display: flex;
      place-content: center;
      place-items: center;
    }

    body {
      background-image: url('/skeye.jpeg');
      margin: 0%
    }

    .row {
      margin-top: 20px;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(4, 100px);
      grid-template-rows: repeat(3, 100px);
    }
    .card {
      border: 1px solid black;
      cursor: pointer;
      transition: transform 1s;
      transform-style: preserve-3d;
      width: 100%;
      height: 100%;
    }
    .card.flipped {
      transform: rotateY(180deg);
    }
    .card .back {
      transform: rotateY(0deg);
    }
    .card .front {
      transform: rotateY(180deg);
    }
    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      position: absolute;
    }
  </style>