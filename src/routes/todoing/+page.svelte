<script>
    import { onMount } from 'svelte';
    
    let todos = [];
    let dones = [];
    
    /*
    $: todos = JSON.parse(localStorage.getItem("todos"))
    $: dones = JSON.parse(localStorage.getItem("dones"))
        
    $: localStorage.setItem("todos", JSON.stringify(todos))
    $: localStorage.setItem("dones", JSON.stringify(dones))
    */
    var textinput = "";
    
    function AddTodo(){

        if (textinput.length < 1){
            return;
        }

        todos.push(textinput)
        todos = todos
        console.log(todos)

        textinput = ""

        console.log(localStorage.getItem("todos") + " " + localStorage.getItem("dones"));
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
    <div>
        <div class="div1">
            <input bind:value={textinput} maxlength="30" placeholder="hva skal du gjøre">
            <button class="add_button" on:click={AddTodo}>ADD</button>
            <div></div>
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

    .list {
        display: flex;
        flex-direction: column;
        background-color: grey;
        border-radius: 5px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .title {
        font-size: 100px;
    }

    p {
        color: black;
        text-align: center;
    }
    .add_button {
        width: fit-content;
        height: fit-content;
        background-size:cover;
        justify-self: center;
    }

    .remove_button {
        width: 15px;
        height: 15px;
        background-image: url('/tl_face.png');
        border-radius: 50%;
        background-size:cover;

        display:inline-block;
    }

    .div1 {
        margin: 0 auto;
    }

    .move_button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }

    body {
        background-color:white;
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-size: cover;
        left:0%;
    }
    
</style>