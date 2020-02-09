<script>
    export let bannerData = {};
    const { Heading, Description } = bannerData;
</script>

<style>
  section {
    padding-top: 5%;
  }

  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-top: 100px;
    text-transform: uppercase;
  }
  p {
      font-size: 20px;
  }
</style>

<section class="main-bgcolor light-color" id="banner">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>{Heading}</h1>
        <p>{Description}</p>
      </div>
      <div class="col-md-6">
        <img src="images/profile-picture.jpg" alt="profile picture" class="img-fluid">
      </div>
    </div>
  </div>
</section>