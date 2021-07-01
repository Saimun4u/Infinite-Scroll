//Image Container
const imageContainer = document.getElementById('#image-container');
const loader = document.getElementById('#loader');
let photosArray = [];

//Unsplash API

const count = 10;
const apiKey = 'okM_utRpl7imygLWgeStC6RH_l2Zeot8W76aA1OfIoE';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

// Elements for links and photos, display to DOM

function displayPhotos(){
    photosArray.forEach((photo) => {
        // console.log(photo)
        // console.log(photo.alt_description);
        // console.log(photo.urls.regular);
        // console.log(photo.links.html);
        //Create <a> to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create img for photo
        const img = document.createElement('img');
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

//Function for displaying images




//Run the function

getImages();