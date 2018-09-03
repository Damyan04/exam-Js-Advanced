class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelf = [];
        this.shelfCapacity = shelfCapacity;

    }

    get room() {
        return this._room;
    }

    set room(value) {
        if (value.length < 0 || typeof value !== 'string') {
            throw new Error('Not a string')
        }
        if (value === 'livingRoom' || value === 'bedRoom' || value === 'closet') {
            this._room = value;
        } else {
            throw new Error(`Cannot have book shelf in ${value}`)
        }
    }

    get shelfGenre() {
        return this._shelfGenre;
    }

    set shelfGenre(value) {
        // if (value.length < 0 || typeof value !== 'string') {
        //     throw new Error('Not a string')
        // }

        this._shelfGenre = value;
    }

    get shelf() {
        return this._shelf;
    }

    set shelf(value) {
        // if (Array.isArray(value)) {
        //     this._shelf = value;
        // } else {
        //     throw new Error('Not an Array');
        // }
        this._shelf = value;
    }

    get shelfCapacity() {
        return this._shelfCapacity;
    }

    set shelfCapacity(value) {
        this._shelfCapacity = value;
    }

    addBook(...args) {
        if (args.length <= 3) {
            if (this.shelfCondition>0) {
                this.shelf.push(args);
            } else if(this.shelfCondition===0){
                this.shelf.splice(0,1);
                this.shelf.push(args);
            }
          this.shelf=  this.shelf.sort((a, b) => {
                return a[1].localeCompare(b[1])
            });
            return this
        }

    }

    throwAwayBook(bookName) {
        for (let i = 0; i < this.shelf.length; i++) {
            if (this.shelf[i][2]!==undefined&&this.shelf[i][0] === bookName) {
                this.shelf.splice(i, 1);
                i--;
            }

        }
        return this.shelf;
    }

    showBooks(genre) {
        let res =`Results for search "${genre}":`;
        for (let i = 0; i < this.shelf.length; i++) {

            if (this.shelf[i][2]!==undefined&&this.shelf[i][2] === genre){
                res += '\n';
                res +=`\uD83D\uDCD6 ${this.shelf[i][1]} - "${this.shelf[i][0]}"`

            }
        }

        return res;

    }

    get shelfCondition() {
            let res=this.shelfCapacity - this.shelf.length;
            if(res<0){
                res=0;
            }
            return res;

    }

    toString() {
        if (this.shelf.length === 0) {
            return `It's an empty shelf`;
        } else {
            let res = `"${this.shelfGenre}" shelf in ${this.room} contains:`;
            for (let i = 0; i < this.shelf.length; i++) {
                res+='\n';
                res += `\uD83D\uDCD6 "${this.shelf[i][0]}" - ${this.shelf[i][1]}`

            }
            return res
        }
    }
}


let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
console.log(bedRoom.toString());
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");

console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));








