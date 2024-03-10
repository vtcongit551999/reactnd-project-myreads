import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import Book from '../Book/Book';
import "../../App.css";

const SearchPage = (props) => {
    const {currentBooks, allBooks, updateSheief, updateQuery, message, initialshelf} = props;
    const [inputValue, updateInput] = useState('');
    
    const onUpdateShelf = useCallback((bookID, shelfValue) => {
        const book = allBooks.filter((e) => e.id === bookID)[0];
        updateSheief(book, shelfValue);
    });

    const handleChange = (e) => {
        allBooks.concat(currentBooks);
        const newInputValue = e.target.value;
        updateInput(newInputValue);
        updateQuery(newInputValue);
    }

    const book = inputValue !=='' && allBooks.length > 0 && allBooks.map(book => {
        const imageUrl = book.imageLinks === undefined ? '' : book.imageLinks.thumbnail;
        const shelfBook = currentBooks.find(e => e.id === book.id); 
        return  <Book
                key={book.id}
                id={book.id} 
                title={book.title}
                author={book.authors}
                shelf={shelfBook ? shelfBook.shelf : initialshelf}
                imageUrl={imageUrl}
                updateSheief={onUpdateShelf}
            />
    });

    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="./" className="close-search"></Link>
                <div className="search-books-input-wrapper">
                    <input 
                    onChange={handleChange}
                    value={inputValue}
                    type="text" 
                    placeholder="Search by title or author"/>
                </div>
                </div>
                <div>{message}</div>
                <div className="search-books-results">
                <ol className="books-grid">
                <div style={{fontSize:24}}>{message}</div>
                    {book}
                </ol>
                </div>
            </div>
        </div>
    )
}

export default SearchPage