
<script>
    import { enhance } from "$app/forms";
    import "elizabot";
    import ElizaBot from "elizabot";
    let eliza = new ElizaBot();
    $: chat = [{ user: "eliza", text: eliza.getInitial() }];
    async function write(message) {
      // TODO: yeet in the new message
      chat.push({user: "you", text: message});
      chat=chat;
      var reply = eliza.transform(message);
      // random delay for writing
      await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
      // TODO: write the text
      chat.push({user: "eliza", text: reply})
      chat=chat;
    }
  </script>
  

  <svelte:head>
    <!--
    <link rel="stylesheet" href="/pico.min.css" />
    <style>
      nav {
        margin-left: 10%;
        margin-right: 10%;
      }
    </style> -->
  </svelte:head>
  
  <div class="container">
    <h1>Le Chatebot</h1>
    <div class="scrollable">
      <!-- TODO: loop over the messages and display them -->
      {#each chat as message}
      <article>
        <span>
          {chat[chat.indexOf(message)].user+": "}
          {chat[chat.indexOf(message)].text}
        </span>
      </article>
      {/each}
    </div>
    <form
      method="post"
      use:enhance={({ form, data, action, cancel }) => {
        /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
        cancel(); //don't post anything to server
        const text = data.get("text");
        write(text);
        
        // TODO: reset the form using form.reset()
        form.reset();
      }}>
      <input type="text" name="text" />
    </form>
  </div>

  <style>



    span {
      margin-top: 10px;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }

    form{ 
      margin-top: 10px;
      font-family: cursive;
    }

    @font-face {
      font-family: csfont;
      src: url(src/images/gamefont1.ttf);
    }
  </style>