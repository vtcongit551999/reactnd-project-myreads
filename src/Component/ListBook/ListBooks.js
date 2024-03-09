import React from 'react';
import { Link } from 'react-router-dom';
import BooksComponent from '../Book/BooksComponent';

function BookShelf(props) {
  const { shelf, books, onChangeBookShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <BooksComponent
          books={books}
          onChangeBookShelf={onChangeBookShelf}
        />
      </div>
    </div>
  );
}

function ListBooks(props) {
  const { books, onChangeBookShelf } = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads: A Book Tracking App</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            shelf="Currently Reading"
            books={books.filter(b => b.shelf === 'currentlyReading')}
            onChangeBookShelf={onChangeBookShelf}
          />
          <BookShelf
            shelf="Want to Read"
            books={books.filter(b => b.shelf === 'wantToRead')}
            onChangeBookShelf={onChangeBookShelf}
          />
          <BookShelf
            shelf="Read"
            books={books.filter(b => b.shelf === 'read')}
            onChangeBookShelf={onChangeBookShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks;
