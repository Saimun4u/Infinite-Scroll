const count = 10;
const apiKey = 'okM_utRpl7imygLWgeStC6RH_l2Zeot8W76aA1OfIoE';

const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`


//Function for getting images from API

async function getImages(){
    try{    
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
    }catch(error){

    }
}

//Run the function

getImages();