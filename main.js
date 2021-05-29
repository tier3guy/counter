const display = document.getElementById("counter");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const decrement = document.getElementById("dcrement");

reset.addEventListener("click",() => {
    display.value = 0;
})

increment.addEventListener("click" , () => {
    var val = display.value;
    val++;
    display.value = val;
})
decrement.addEventListener("click" , () => {
    var val = display.value;
    val--;
    display.value = val;
})