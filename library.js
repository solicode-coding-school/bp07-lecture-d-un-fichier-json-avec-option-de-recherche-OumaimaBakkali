class Library {
    constructor() {
        this.bookList = []; // initial value
    }

    displayAllBooks() {
        return this.bookList; // retourne la propriété this.bookList
    }

    contains(book) {
        // for(let i = 0; i < this.bookList.length; i++) {
        //     if(this.bookList[i].isSimilar(book))
        //         return true;
        // }
        // return false;

        for(let b of this.bookList) {
            if(b.isSimilar(book))
                return true;
        }
        return false;
    }

    addBook(book) {
        // tester si book existe ou pas dans this.bookList
        if(!this.contains(book)) {
            this.bookList.push(book);
            return true;
        }
        return false;
    }

    deleteBook(book) {
        // for(let i = 0; i < this.bookList.length; i++) {
        //     if(this.bookList[i].isSimilar(book)) {
        //         this.bookList.splice(i, 1);
        //         return true;
        //     }
        // }
        // return false;

        this.bookList.forEach((b, i) => {
            if(b.isSimilar(book)) {
                this.bookList.splice(i, 1);
                return true;
            }
        });
        return false;
    }

    countBooks() {
        return this.bookList.length;
    }

    clearLibrary() {
        this.bookList = []; // Réinitialiser la bibliothèque
    }

    findBooksByTitle(title) {
        const result = [];
        for (let i = 0; i < this.bookList.length; i++) {
            if (this.bookList[i].title === title) {
                result.push(this.bookList[i]);
            }
        }
        return result;
    }

    findBooks(str) {
        const result = [];
        for (let i = 0; i < this.bookList.length; i++) {
            if (this.bookList[i].title.toLowerCase().includes(str.toLowerCase())) {
                result.push(this.bookList[i]);
            }
        }
        return result;
    }

    toggleReadingStatus(book) {
        for (let i = 0; i < this.bookList.length; i++) {
            if (this.bookList[i].isSimilar(book)) {
                this.bookList[i].readingStatus = !this.bookList[i].readingStatus;
                break;
            }
        }
    }

    filterByReadingStatus(status) {
        const result = [];
        for (let i = 0; i < this.bookList.length; i++) {
            if (this.bookList[i].readingStatus === status) {
                result.push(this.bookList[i]);
            }
        }
        return result;
    }
}