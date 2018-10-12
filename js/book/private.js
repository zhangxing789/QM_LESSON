/* isbn title author
public 不妥
私有化 */
//立即执行函数
//返回函数 book 仍然是一个类
var Book = (function() {
    //闭包 闭合空间
    var numOfBooks = 0;
    return function(newIsbn, newTitle, newAuthor) {
        //局部作用域里的变量
        console.log(newIsbn, newTitle, newAuthor);
        var isbnm, title, author;
        var checkIsbn = function(isbn) {
            if(!isbn || typeof isbn !== 'string') {
                throw new Error('isbn is wrong');
            }
            return true;
        }
        this.setIsbn = function(newIsbn) {
            if(checkIsbn(newIsbn)) {
                isbn = newIsbn ;
            }
        }
        this.getIsbn = function() {
            return isbn;
        }
        this.setTitle = function(newTitle) {
            title = newTitle || 'No Title specified';
        }
        this.getTitle = function() {
            return title;
        }
        this.setAuthor = function(newAuthor) {
            author = newAuthor || 'No Autor specified';
        }
        this.getAutor = function() {
            return author;
        }


        this.setIsbn(newIsbn);
        this.setTitle(newTitle);
        this.setAuthor(newAuthor);
        numOfBooks++;
        this.getNumOfBooks = function () {
            return numOfBooks;
        }
        console.log(`创建了${numOfBooks}本书`);
        //constructior
    }
})();
//static 方法
Book.convertToTitleCase = function(inputString) {
    return inputString.toUpperCase();
}

Book.prototype = {
    display: function() {
        console.log(`这本书书名是${this.getAutor()}`);
    }
}
var book = new Book('123', 'fei', 'taiger');
var book2 = new Book('123', 'html5', '聂');
console.log(book2.getNumOfBooks());
