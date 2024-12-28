let n = Math.random();
n = Math.floor(n*6+1);
let m = Math.random();
m = Math.floor(m*6+1);
if(n>m)
{
    document.querySelector(" h1").textContent="Player 1 won!";
} else if(n == m)
{
    document.querySelector(" h1").textContent="Draw!";
} else {
    document.querySelector(" h1").textContent="Player 2 won!";
}

function cond(x, className) {
    const element = document.getElementsByClassName(className)[0];
    if (element) {
        element.src=`dice${x}.png`;
    } else {
        console.error("No element found with the specified class name.");
    }
}
cond(n,"img1");
cond(m,"img2");