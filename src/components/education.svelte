<script>
    export let educationData = {};
    const {Heading, Education_list} = educationData;
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}
    .row {margin: 0 -5px;}
    .row:after {
  content: "";
  display: table;
  clear: both;
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
  .column {
  float: left;
  width: 25%;
  padding: 0 10px;
}
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
        height: 100%;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .containers {
        padding: 2px 16px;
    }
    .images {
        border-radius: 5px 5px 0 0;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-top: 10%;
        padding-bottom: 15%;
        width: 50%;
    }
</style>

<section id="education" class="section">
    <div class="container">
        <h2 class="title text-center">{Heading}</h2>
        <div class="row section-body">
            {#each Education_list as list}
                <div class="column">
                    <div class="card">
                        <img src={list.Image_url} alt={list.Label} class="images">
                        <div class="containers">
                            <p>{list.Label}</p>
                            <p>{list.Description}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>