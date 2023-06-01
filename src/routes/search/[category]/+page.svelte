<script>
  /** @type {import('./$types').PageData} */
  export let data;
  console.log(JSON.stringify(data));
</script>

<head>
    <link rel="stylesheet" href="css/pico.min.css">
</head>
<main>
  <div class="bg">
    <h2>{"Showing results for: " + data.params.category}</h2>
    <hr />
    <!-- TODO: Style the results -->
    <div class="grid">
      {#each data.response as item}
        <article>
          <img src="{item.avatar}" alt="{item.first_name} {item.last_name}">
          <p>Name: {item.first_name} {item.last_name}</p>
          <p>Username: {item.username}</p>
          <p>Password: {item.password}</p>
          <p>Email: {item.email}</p>
          <p>Gender: {item.gender}</p>
        </article>
      {/each}
    </div>
  </div>
</main>



<style>
  .bg {
    background-color:  rgb(245, 229, 229);;
    height: fit-content;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  article {
    margin-bottom: 200px;
    background-image: linear-gradient(rgb(193, 179, 179), rgb(161, 146, 146));
    height: 320px;
    width: 250px;
    padding: 10px;
    border-radius: 3%;
  }
  img {
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 7%;
  }
  p {
    color: white;
    
  }
  .grid {
    display: grid;
    gap: 100px;
    grid-template-columns: repeat(5, 200px);
    grid-template-rows: repeat(20, 280px);
    margin-left: 30px;
    margin-top: 40px;
    margin-bottom:40px;
  }
</style>