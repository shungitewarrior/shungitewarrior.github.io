<script>

import { fly } from 'svelte/transition';

var points = 0;
var clickMultiplier = 1;

let time;
$: units = [
new Unit("Child Worker", 2, 1000, 20),
new Unit("Coal Mine", 2, 500, 60),
new Unit("Sweatshop", 2, 200, 150),
];

$: upgrades = [
    new Upgrade("Eugenics Program", 2),
    new Upgrade("CRISPR Genes", 2),
    new Upgrade("Pointier Pickaxes", 2),
    new Upgrade("Lower Wages", 2),
    new Upgrade("Laxer Lawmakers", 2),
    new Upgrade("Union Buster", 2),
    new Upgrade("", 2),
]

setInterval(()=>{
    time = new Date();
    units.forEach(unit => {
        if (unit.count > 0){
            unit.Update();
        }
    });
}, 1)

class Unit {
    constructor(name, cost, delay, baseIncrease){
        this.name = name;
        this.cost = cost;
        this.count = 0;
        this.incrementDelay = delay;
        this.baseIncrease = baseIncrease;
        this.nextAdd =0;
    }

    Update(){
        console.log(time.getTime());
        if (time.getTime() > this.nextAdd){
            Add();
            this.nextAdd = time.getTime() + this.incrementDelay;
        }
    }

    Buy(){
        if (points < this.cost){
            return;
        }

        this.count += 1;
        points -= this.cost;
        points = points;
        this.cost += this.baseIncrease;
        this.cost *= 1.5;
        this.cost = Math.round(this.cost);
        this.incrementDelay /= 1.4;
        units = units;
    }
    
}

class Upgrade {
    constructor(name, cost, clickupgrade){
        this.name = name;
        this.cost = cost;
        this.bought = false;
    }
    

    Buy(){
        if(points < this.cost || this.bought == true){
            return;
        }

        this.bought = true;
    }
}

function OnClick(){
    points += 1 * clickMultiplier;
    points = points;
}

function Add(){
    points += 1;
    points = points;
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
    background-image: url(child_worker.png);
    width: 800px;
    height: 300px;
    margin-left: 25%;

}

.unit_image {
    width: 100px;
    height: 100px;
}

</style>

<body>
    <h1>CHILD LABOR CLICKER!!!!!!</h1>
    <button id="cookie" in:fly={{ y: -20 }} on:click={OnClick}>CP (Coal points):
    
		<span style="display: inline-block">
			{points}
		</span>
	
    </button>
    {#each units as unit}
        <article class="item">
            <!--fack yu svelte-->
            <button on:click={()=>{unit.Buy()}}>Buy {unit.name}</button> 
            <p>Owned: {unit.count}</p>
            <p>Cost: {unit.cost}</p>
        </article>
        <img class="unit_image" src="{unit.name.toLowerCase()}.png" alt="bajs">
    {/each}
</body>