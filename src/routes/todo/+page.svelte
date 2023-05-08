<script>
    $: todos = []
    $: dones = []

    var textinput = "";
    
    function AddTodo(){

        if (textinput.length < 1){
            return
        }

        todos.push(textinput)
        todos = todos
        console.log(todos)

        textinput = ""
    }

    function MarkAsDone(todo){
        dones.push(todo)
        dones = dones;
        RemoveTodo(todo)
    }

    function RemoveTodo(todo){
        todos.splice(todos.indexOf(todo), 1)
        todos = todos
    }

    function RemoveDone(done){
        dones.splice(dones.indexOf(done), 1)
        dones = dones;
    }

</script>

<body>
    <p class="title">my todos :3</p>
    <p>new todo:</p>
    <div class="div1">
        <input bind:value={textinput} maxlength="30" placeholder="hva skal du gjøre">
        <button class="add_button" on:click={AddTodo}></button>
    </div>
    <div class="flex-container">
        <div class="list">
            TODO:
            {#each todos as todo}
            <article class="todo">
                <button class="remove_button" on:click={RemoveTodo(todo)}></button>
                <button class="move_button" on:click={MarkAsDone(todo)}></button>
                {todos.indexOf(todo) + 1 + ". " + todo}
            </article>
            {/each}  
        </div>
        <div class="list">
            DONE:
            {#each dones as done}
            <article class="done">
                <button class="remove_button" on:click={RemoveDone(done)}></button>
                {dones.indexOf(done) + 1 + ". " + done}
            </article>
            {/each}
        </div>
    </div>

</body>

<style>
    .todo {
        font-family:'Times New Roman', Times, serif;
        color:white;
        background-color: brown;
        border-radius: 5px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .done {
        font-family:'Times New Roman', Times, serif;
        color:red;
        background-color:cyan;
        border-radius: 5px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .flex-container{
        display: flex;
        justify-content: center;
        overflow: clip;
        white-space: normal;
        flex-direction: row;
        gap:10px;
    }

    .list {
        display: flex;
        flex-direction: column;
        background-color: chartreuse;
        border-radius: 5px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .title {
        font-size: 100px;
    }

    p {
        color: white;
        text-align: center;
    }

    .div1 {
        align-items: center;
    }

    .add_button {
        width: 25px;
        height: 25px;
        background-image: url(images/alien.jpeg);
        border-radius: 20%;
        background-size:cover;
        margin-left: 42%;
    }

    .remove_button {
        width: 15px;
        height: 15px;
        background-image: url(images/tl_face.png);
        border-radius: 50%;
        background-size:cover;

        display:inline-block;
    }

    input {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .move_button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }

    body {
        background-color:blue;
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 0;
        
    }
    
</style>