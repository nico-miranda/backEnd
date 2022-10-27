class User {
    constructor(name, surname, books, pets){ 
    this.name = name
    this.surname = surname
    this.books = books
    this.pets = pets 
    }

    getFullName(){
        return console.log(`Mi nombre es ${this.name} y mi apellido ${this.surname}`)
    }

    addBook(name, author){
        this.books.push({ name:name, author:author })
    }

    getBooksName(){
    const booksNames = []
    this.books.forEach(book => {
        booksNames.push(book.name)
    })
    return console.log(booksNames)
    }

    addPet(name, race){
        this.pets.push({name, race})    
    }
    
    countPets(){
        return console.log(this.pets.length)
    }

}

const user1 = new User("Nicolas", "Miranda",[{ name:'John constantine, hellblazer vol. 1: marks of woe', author:'Simon Spurrier' }], [{name:"Bruce", race:"American Bully"}]);
user1.addBook("Cowboy Bebop: Shooting Star Volume 2", "Hajime Yadate");
user1.addPet("Wayne", "Doberman");
user1.countPets();
console.log(user1);
