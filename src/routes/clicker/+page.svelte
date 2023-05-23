<script>

import { fly } from 'svelte/transition';

var points = 0;
var multiplier = 1;
/*
setInterval(()=>{
    units.forEach(unit => {
        unit.Update();
    });
}, 1)
*/
class Unit {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
        this.count = 0;
        
    }
    
    set cost(newCost){this.cost = newCost}
    get cost() {return this.cost}
    

    Update(){
        
    }

    Buy(){
        
        console.log(typeof(this.cost));
        return;

        if (points < t.cost){
            return;
        }
        
        
        

        count += 1;
        points -= t.cost;
        points = points;
        
        cost *= 1.5;
        cost = Math.round(cost);
    }
    
}

class Upgrade {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }

    Buy(){
        if(points < this.cost){
            return;
        }

    }
}

var units = [
new Unit("Child Worker", 2),
new Unit("Coal Mine", 2),
new Unit("Sweatshop", 2),
];

function OnClick(){
    points += 1 * multiplier;
}

function Add(){
    points += 1;
}

</script>

<style>
h1 {
    color:blueviolet;
    background-color: #0000ff;
    margin-left: 0px;
    margin-right: 0px;
    font-size: 200px;
    text-align: center;
}

body {
    background-color: chartreuse;
}

button {
    font-size: 30px;
    color:crimson;
    background-color: darkolivegreen;
    text-shadow: 10px;
    font-family: cursive;
}

p {
    color: coral;
    font-size: 40px;
    background-color:darkmagenta;
}

.item p {
    display: inline-block;
}

#cookie {
    color: black;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size:80px;
    background-image: url(src/images/child_worker.png);
    width: 800px;
    height: 300px;
    margin-left: 25%;

}

</style>

<body>
    <h1>CHILD LABOR CLICKER!!!!!!</h1>
    <button id="cookie" in:fly={{ y: -20 }} on:click={OnClick}>CP (Coal points):
    {#key points}
		<span style="display: inline-block" in:fly={{ y: -20 }}>
			{points}
		</span>
	{/key}
    </button>
    {#each units as unit}
        <article class="item">
            <button on:click={unit.Buy}>Buy {unit.name}</button>
            <p>Number of workers: {unit.count}</p>
            <p>Cost of child worker: {unit.cost}</p>
        </article>
    {/each}
</body>