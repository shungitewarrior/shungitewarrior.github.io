<div class="slot">
<div id="topbar">
    <nav>
        <div class="link">
            <a href="/">HEM</a>
        </div>
        <div class="link">
            <a href="/clicker">CLICKER</a>
        </div>
        <div class="link">
            <a href="/todoing">TODO</a>
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
            <a href="/search">SEARCH</a>
        </div>
        <div class="link">
            <a href="/blog">BLOG</a>
        </div>
        <div class="link">
            <a href="https://github.com/shungitewarrior/shungitewarrior.github.io">SHITHUB</a>
        </div>
    </nav>
</div>
<slot/>
</div>



<style>
    a {
        color:white;
        font-family: csfont;
        margin-left: 10px;
        color: red;
    }

    @font-face {
      font-family: csfont;
      src: url(gamefont1.ttf);
    }

    .slot {
        
        left:0;
        top:0;
        right:0;
    }

    #topbar{
        border-style: solid;
        border-color: #00ff11;
        background-color: #007637;
        width: fit-content;
        padding: 3px 10px 3px 0px
    }

    .link{
        display: inline;
        justify-content: space-between;
    }
    

</style>