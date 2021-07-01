//Image Container
const imageContainer = document.getElementById('#image-container');

//Unsplash API

const count = 10;
const apiKey = 'okM_utRpl7imygLWgeStC6RH_l2Zeot8W76aA1OfIoE';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`


//Function for getting images from API

async function getImages(){
    try{    
        const response = await fetch(apiUrl);
        const data = await response.json();
        // console.log(data)
        const photosArray = data;
        photosArray.forEach(photo => {
            console.log(photo)
            // console.log(photo.alt_description);
            // console.log(photo.urls.regular);
            // console.log(photo.links.self);
            // imageContainer.innerHTML = `
            // <a href = "${photo.urls.regular}"
            // `
        })
    }catch(error){

    }
}

//Function for displaying images




//Run the function

getImages();