<div id="topbar">
    <nav>
        <div class="link">
            <a href="/">HEM</a>
        </div>
        <div class="link">
            <a href="/clicker">CLICKER</a>
        </div>
        <div class="link">
            <a href="/todo">TODO</a>
        </div>
        <div class="link">
            <a href="/telltale">TELLTALE</a>
        </div>
        <div class="link">
            <a href="/memory">MEMORY</a>
        </div>
        <div class="link">
            <a href="/chatbot">CHATBOT</a>
        </div>
        <div class="link">
            <a href="https://github.com/shungitewarrior/shungitewarrior.github.io">SHITHUB</a>
        </div>
    </nav>
</div>

<slot />


<style>
    a {
        color:white;
        font-family: csfont;
        margin-left: 10px;
    }

    @font-face {
      font-family: csfont;
      src: url(src/images/gamefont1.ttf);
    }

    #topbar{
        border-style: solid;
        border-color: #00ff11;
        background-color: #007637;
    }

    .link{
        display: inline;
        justify-content: space-between;
    }
    

</style>