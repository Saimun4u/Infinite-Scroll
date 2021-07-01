//Image Container
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('#loader');
let photosArray = [];

//Unsplash API

const count = 10;
const apiKey = 'okM_utRpl7imygLWgeStC6RH_l2Zeot8W76aA1OfIoE';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

// Refactoring the Set Attribute Items

function setAttributes(element, attributes){
    for (const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}

// Elements for links and photos, display to DOM

function displayPhotos(){
    photosArray.forEach((photo) => {
        // console.log(photo)
        // console.log(photo.alt_description);
        // console.log(photo.urls.regular);
        // console.log(photo.links.html);
        //Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        // Create img for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description)

        //Append child to parent element item
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

//Function for getting images from API

async function getImages(){
    try{    
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        // console.log(data)
        displayPhotos();
    }catch(error){

    }
}

//Run the function

getImages();


//Check to see if the bottom of the page is reached, load more photos

window.addEventListener('scroll', ()=>{
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
        getImages();
    }    
})