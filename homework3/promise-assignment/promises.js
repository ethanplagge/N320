
//displays the info
async function displayQuotes(){
  let quoteCollection = await pullQuotes();

  //Filter through the object
  Object.values(quoteCollection).forEach(quote => {

    //creates the container
    let container = document.createElement("div");
      container.id = 'container'; 
      container.innerHTML = `<p id="text">" ${quote.content} "</p>
      <p id="author">- ${quote.author}</p>`;
    document.getElementsByClassName("wrapper")[0].appendChild(container);
  });  
}

//pulls the data
async function pullQuotes(){
  //API Call
  const response = await fetch("https://api.quotable.io/quotes?limit=20")
  .then((data) => data.json())
  .then((quote) => {
    return quote.results;
  })
  return response;
}

//Function Call
displayQuotes();




