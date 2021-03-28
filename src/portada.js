// // setTimeout(bottomConoceme,4000);
const conoceme = document.getElementById('button-conoceme')

console.log(11, conoceme)
const bottomConoceme = () => {
    console.log(2222)
    conoceme.style.visibility = 'visible';
}

setTimeout(bottomConoceme, 3000);

