class Book {
    // Constructeur = méthode qui nous permettra de créer les objets de la classe 'Book'
    constructor(bookTitle, bookAuthor, bookReadingStatus) {
        this.title = bookTitle;
        this.author = bookAuthor;
        this.readingStatus = bookReadingStatus;
    }

    // Méthode displayInfo() qui affiche les informations d'un seul livre
    displayInfo() {
        return `Title: ${this.title}, Author: ${this.author}, Reading Status: ${this.readingStatus ? 'Done' : 'Not done'}`;
    }

    // Méthode isSimilat() prend comme paramètre un objet book et le compare avec l'objet 'this'
    isSimilar(book) {
        return this.title === book.title && this.author === book.author;
    }
}