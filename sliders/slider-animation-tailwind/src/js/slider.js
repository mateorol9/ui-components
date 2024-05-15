const $slider = document.querySelector('#slider');
const $childSlider = [...$slider.querySelectorAll('figure')];
const $nextButton = document.querySelector('[data-button="next"]');
const $prevButton = document.querySelector('[data-button="prev"]');

$childSlider.forEach(function(child, index){
    child.dataset.idSlider = index;
})

const lengthImages = $childSlider.length;

//Eventos de escucha next
$nextButton.addEventListener('click', function(e){
    
    const currentImage = getCurrentImage();
    let currentActiveIndex = currentImage.dataset.idSlider;
    currentActiveIndex++;

    if(currentActiveIndex >= lengthImages) {
        
        currentActiveIndex = 0;

    }

    const newActiveElement = $childSlider[currentActiveIndex];

    removeActiveElement();
    addNewActiveElement(newActiveElement);
})

//Eventos de escucha prev
$prevButton.addEventListener('click', function(e){
    
    const currentImage = getCurrentImage();
    let currentActiveIndex = currentImage.dataset.idSlider;
    currentActiveIndex--;

    if(currentActiveIndex < 0) {
        
        currentActiveIndex = lengthImages - 1;

    }

    const newActiveElement = $childSlider[currentActiveIndex];

    removeActiveElement();
    addNewActiveElement(newActiveElement);
})

//Obtenemos elemento activo
function getCurrentImage() {
    const currentImage = $slider.querySelector('[data-active]');

    return currentImage;
};

// Eliminamos el atributo del elemento actual
function removeActiveElement() {
    const currentImage = getCurrentImage();
    currentImage.removeAttribute('data-active')
};
// Agregamos data-active a un elemento
function addNewActiveElement(element){
    element.setAttribute('data-active', '');
}