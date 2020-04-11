<script>
    import API_GITHUB from '../types/api'
    import {onMount} from 'svelte'
    import Carousel from '@beyonk/svelte-carousel'
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'

    let data = []
    let dataOwner = []

    onMount(async () => {
      const result = await fetch(API_GITHUB);
      data = await result.json();
      console.log(data)
    })
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* html {
  background-color: #ecf9ff;
}

body {
  color: #272727;
  font-family: 'Quicksand', serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
} */

.main{
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
}

img {
  height: auto;
  width: 50%;
  max-width: 100%;
  vertical-align: middle;
  /* justify-content: center */
  margin-left: 25%;
  padding-top: 3%;
  padding-bottom: 5%;
}

/* .btn {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
} */

/* .btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
} */

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
  background: linear-gradient(90deg, #9434ee 0%, #04caf1 100%);
  height: 100%
}

.card_title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
  padding-bottom: 5%;
}

.card_text {
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;    
  font-weight: 400;
}

.control :global(svg) {
  width: 100%;
  height: 100%;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 32px;
}
</style>

<section id="project">
    <div class="main">
        <h1>Projects</h1>
        <ul class="cards section-body">
            <Carousel>
            <span class="control" slot="left-control">
              <ChevronLeftIcon />
            </span>
            {#each data as list}
            <div class="slide-content">
              <li class="cards_item">
                  <div class="card">
                      <div class="card_image">
                        <img src={list.owner.avatar_url} alt={list.name}/>
                      </div>
                      <div class="card_content">
                        <a href={list.html_url}>
                          <h2 class="card_title">{list.name}</h2>
                        </a>
                        {#if list.language == null}
                          <p class="card_text">any</p>
                        {:else}
                          <p class="card_text">{list.language}</p>
                        {/if}
                      </div>
                  </div>
              </li>
            </div>
            {/each}
            <span class="control" slot="right-control">
              <ChevronRightIcon />
            </span>
            </Carousel>
        </ul>
    </div>
</section>