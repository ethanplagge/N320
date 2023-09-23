//Main function
async function displayDogs(){

  //waits for getDogs(), and catches if no data is sent over
  let dogCollection = await getDogs().catch((error) => {
    console.log("Failed to Fetch Data");
    document.write("Failed to Fetch Data");
  });


  //Gets the wrapper from the HTML
  let image = document.getElementsByClassName("wrapper")[0];

  //Filters through the data using a forEach
  Object.values(dogCollection).forEach(dog => {

    //creates the container
    let container = document.createElement("div");
    container.className = 'container';
    //Add the url image to the newly created div
    container.style.backgroundImage = `url("${dog}")`;
    image.appendChild(container);
  });  
}

//pulls the data from the API
async function getDogs(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random/20")
    .then((data) => data.json())
    .then((url) => {
      return url.message;
    })
    return response;
}

displayDogs();