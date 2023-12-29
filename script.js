


let range = document.getElementById('range')
let image = document.querySelector('#image-box img');
let opacityRange = document.querySelector('#opacityRange')
range.addEventListener('input', function () {
 let borderVal = range.value + 'px';
    image.style.borderRadius= borderVal;
})
console.log(borderVal);
