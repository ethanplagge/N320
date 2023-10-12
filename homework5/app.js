class Library {
  constructor(id, title, pubYear, value){
    this.id = id;
    this.title = title;
    this.pubYear = pubYear;
    this.value = value;
  }
}

class Book extends Library{
  constructor(Author, Genre, ...args){
    super(...args);
    this.Author = Author;
    this.Genre = Genre;
  }
}

class DVD extends Library{
  constructor(Director, Runtime, ...args){
    super(...args);
    this.Director = Director;
    this.Runtime = Runtime;
  }
}

class CD extends Library{
  constructor(Artist, Songs, ...args){
    super(...args);
    this.Artist = Artist;
    this.Songs = Songs;
  }
}

class Catalog {
  constructor(){
    this.itemCollection = [];
  }

  //uses the spread function to put multiple items into the array
  addItem(...libraryitems){
    this.itemCollection.push(...libraryitems);
  }

  //uses the filter method to remove elements from the array with the ID entered
  removeItem(itemID){
    this.itemCollection = this.itemCollection.filter(function(libraryItem){
      return libraryItem.id !== itemID;
    })
  }

  //uses the reduce method in order to calculate the total number of items in the array
  totalValue(divId){
   const totalInfoDiv = document.getElementById(divId); 
   let total = this.itemCollection.reduce(function(total, item){
    return total + item.value;
   }, 0);
   total = total.toFixed(2);

   //creates a new div that displays the price
   const totalDiv = document.createElement("p");
   totalDiv.innerHTML = `Total Amount: $${total}`;
   totalInfoDiv.appendChild(totalDiv);
  }

  displayCatalog(divId, ...properties){
    //targets the element 
    const catalogDiv = document.getElementById(divId);
    //cycles through the catalog via a for of loop
    for (const item of this.itemCollection){

      //adds the generic info that applies to all library items
      let itemInfo = `${item.title} - $${item.value}, Published:${item.pubYear} (`;

      //cycles through the unique properties depending on the class type
      for (const property of properties){
        if(item[property] !== undefined){
          itemInfo += ` ${property}: ${item[property]}`;
        }
      }

      //creates the paragraph and adds the information
      const itemInfoDisplay = document.createElement("p");
      itemInfoDisplay.innerHTML = `${itemInfo})`;
      catalogDiv.appendChild(itemInfoDisplay);


    }

  }
}

//creates a new catalog
const catalog = new Catalog();

//create library items
const book1 = new Book("Harper Lee", "Fiction", 1, "To Kill a Mockingbird", 1960, 10.99);
const book2 = new Book("Kurt Vonnegut", "Fiction", 2, "Slaughterhouse 5", 1969, 5.45);
const dvd1 = new DVD("Peter Jackson", 178, 3, "Fellowship of the Ring", 2001, 2.45);
const cd1 = new CD("Weezer", 10, 4, "Blue Album", 1994, 4.75);

//add items, calculate total
catalog.addItem(book1, book2, dvd1, cd1);
catalog.totalValue("total");
catalog.displayCatalog("item", "Author", "Genre", "Director", "Runtime", "Artist", "Songs");

//remove item and update list/total
catalog.removeItem(1);
catalog.displayCatalog("updated-item", "Author", "Genre", "Director", "Runtime", "Artist", "Songs");
catalog.totalValue("updated-total");