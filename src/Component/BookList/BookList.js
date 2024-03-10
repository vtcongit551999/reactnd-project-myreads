import React, {useCallback} from 'react'
import BookShelf from '../Book/Bookshelf';
import "../../App.css";

function Booklist(props) {
    const {currentBooks, updateSheief} = props;

    const onUpdateShelf = useCallback((bookID, shelfValue) => {
        const book = currentBooks.filter(e => e.id === bookID)[0];
        updateSheief(book, shelfValue);
    });

    const SHELVES = [
        {
            key:'0',
            title: 'Currently Reading',
            id: 'currentlyReading'
        },
        {
            key:'1',
            title: 'Want To Read',
            id: 'wantToRead'
        },
        {
            key:'2',
            title: 'Read',
            id: 'read'
        }
    ]

    const BookShelfReander = SHELVES.map(e => 
        <BookShelf 
            key={e.key}
            shelfTitle={e.title}
            books={currentBooks.filter(book => book.shelf === e.id)}
            updateSheief={onUpdateShelf}
        />
    )

    return (
        <div>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads: A Book Tracking App</h1>
            </div>
            <div className="list-books-content">
                {BookShelfReander}
            </div>
          </div>  
        </div>
    )
}

export default Booklist