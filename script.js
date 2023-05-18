let number;

function generateNumber(e, pe){
    number= Math.floor(Math.random()*100)
    pe.innerHTML= `
    <input spellcheck="false" autocomplete="off" type="text" placeholder="Enter the number">
    <button onclick="checkNumber(document.querySelector('input').value)">
    Submit!
</button>`
}
function checkNumber(Rnumber) {
    if(Rnumber==number){
        alert('you win!!!')
    }else if(Rnumber>number){
        alert('choose a smaller number...')
    }else if(Rnumber<number){
        alert('choose a larger number...')
    }
}