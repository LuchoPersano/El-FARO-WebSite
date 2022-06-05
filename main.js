document.querySelectorAll('img').forEach(image => {
    image.addEventListener('click', () => {
        image.toggleAttribute('fit-cover');
        image.toggleAttribute('fit-contain');
        console.log('Image clicked')
    })
})