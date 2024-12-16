let myLibrary = new Library()

const  bookTitle = document.getElementById("bookName")
const bookAuthor = document.getElementById("bookAuthor")
const bookReadingStatus = document.getElementById("readingStatus")
const booksTable = document.getElementById("books")
const addBtn = document.getElementById("add-btn")
const confirmationDiv = document.querySelector("#confirmation");
let filterbook= document.getElementById("book-filter")
confirmationDiv.style.display = 'none';


function showBooks(books = myLibrary.bookList){
    booksTable.innerHTML = "<tr><th>Title</th><th>Author</th><th>Status</th><th>Actions</th></tr>";
    books.forEach(book => {
        const tr= document.createElement("tr")  
        const tdTitle= document.createElement("td")
        tdTitle.textContent = book.title;
        const tdAuthor= document.createElement("td")
        tdAuthor.textContent = book.author;
        const tdreadingStatus= document.createElement("td")
        const tdActions = document.createElement("td");
        const btnRead = document.createElement('button');
        btnRead.textContent = "Mark as read";
        const btnDelete = document.createElement('button');
        btnDelete.textContent = "Delete";
        btnDelete.addEventListener('click', () => {
            document.querySelector("#confirmation").style.display = 'block';
            //confirmation("est ce que vous etes sur de vouloir supprimer ?");
                document.querySelector(".confirm-yes").addEventListener("click", () => {
                console.log("we are in confirm yes")
                document.querySelector("#confirmation").style.display = 'none';
                myLibrary.deleteBook(book);
                showBooks();
            })
            document.querySelector(".confirm-no").addEventListener("click", () => {
                console.log("we are in confirm no")
                document.querySelector("#confirmation").style.display = 'none'
            })
            
        });
        btnRead.addEventListener("click",function(){
          myLibrary.toggleReadingStatus(book);
          showBooks();
        } );

       
        tdActions.appendChild(btnRead);
        tdActions.appendChild(btnDelete);
        tdreadingStatus.textContent = book.readingStatus ? "read" : "not read";
        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdreadingStatus);
        tr.appendChild(tdActions);
        booksTable.appendChild(tr);
    });
}

// function confirmation(message){
//     const div = document.createElement("div")
//     div.setAttribute('id', 'confirmation');
//     const p = document.createElement("p")
//     p.textContent = message
//     div.appendChild(p);
//     div.innerHTML += "<button class='confirm-yes'>Yes</button><button class='confirm-no'>No</button>"
//     document.getElementsByTagName('body')[0].appendChild(div);    
// }

addBtn.addEventListener("click", function(){
    if(!bookTitle.value || !bookAuthor.value ){
        alert("make sure to enter all inputs")
    }

   else {
const newBook = new Book(bookTitle.value.trim() ,bookAuthor.value.trim() , bookReadingStatus.checked);
if(myLibrary.addBook(newBook)){
    //le livre a ete ajoute
    showBooks();
}
else{
    //le livre n'a pas ete ajoute
    alert("this book already exist")
}
}
});


const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function() {
    console.log("we search")
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        const foundBooks = myLibrary.findBooks(searchTerm);  
        showBooks(foundBooks); 
    } else {
        showBooks(); 
    }
});













filterbook.addEventListener( "change" ,  () =>{
const selectValue = filterbook.value;
let filterValue;
if(selectValue==="all"){
    filterValue=null;
}else if(selectValue==="read"){
    filterValue=true;
} else if(selectValue==="not-read"){
    filterValue=false;
} 



});