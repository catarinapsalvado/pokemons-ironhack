let count = 67;

function render(){
let whiteBox = document.getElementById('white-square');
whiteBox.innerHTML = `<img id='poke'src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`
}

let prev = document.getElementById('arrow-1');
let next = document.getElementById('arrow-2');

prev.onclick = function prev(){
    if ( count > 1){
    count= count-1;
    render(); 
    }
    
}

next.onclick = function next(){
    if(count < 650 ){
    count = count +1;
    render()    
    }
    
}

render()