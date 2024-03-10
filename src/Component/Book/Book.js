import React from 'react';
import "../../App.css";

function Book(props) {
    
    const {id, title, author, shelf, imageUrl, updateSheief} = props; 

    return (
        <div>
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={
                        { width: 128, height: 193, 
                          backgroundImage: `url(${imageUrl})`}
                        }></div>
                    <div className="book-shelf-changer">
                        <select 
                            onChange={(e)=>{ 
                                const selectedValue = e.target.value;
                                updateSheief(id, selectedValue);
                            }}
                            value={shelf}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{author ? author.map((author) => author + ' ') : 'Anonymous'}</div>
                </div>
            </li>
        </div>
    )
}

export default React.memo(Book)