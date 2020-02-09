<script>
    export let workingData = {};
    const {Heading, Working_list} = workingData;
</script>

<style>
* {
  box-sizing: border-box;
}

    .row {
        margin: 0 -5px;
        justify-content: space-evenly;
    }
    .row:after {
  content: "";
  display: flex;
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

<section id="work">
    <div class="container">
        <h2 class="title" style="text-align: center;">{Heading}</h2>
        <div class="row section-body">
            {#each Working_list as list}
                <div class="column">
                    <div class="card">
                        <img src={list.Image_url} alt={list.Company} class="images">
                        <div class="containers">
                            <p>{list.Level}</p>
                            <p>{list.Position}</p>
                            <p>{list.Company}</p>
                            <p>{list.Longest}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>