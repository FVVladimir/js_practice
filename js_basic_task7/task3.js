const Library = {
    books: [],
    addBook: function(name, author,year, id){

       this.books.push({name: name, author: author, year: year, id: id})

    },
    printBookInfo: function(id){
        for(book of this.books){
            if (id == book.id){
                console.log(book.name, book.author, book.year)
            }
        }
        
        
        },
    printAllBooks: function(){
         for(book of this.books){
            console.log(book.name, book.author, book.year, book.id)

         }
    },
};

Library.addBook("chipolino","kolja", "2001", "1");
Library.addBook("buratino","tolja", "2021", "2");
Library.addBook("neznaika","olja", "1991", "3");
Library.printBookInfo('3');
Library.printAllBooks();
