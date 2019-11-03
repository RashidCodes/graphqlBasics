import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from '../queries/queries'


export default function BookDetails(props) {
    const { bookId } = props
    const { loading, error, data } = useQuery(getBookQuery, {
        variables: { id : bookId }
    });
    
    if(loading) return <p>Loading...</p>;
    if(error) return <p>There was an error: { error }</p>
    const { book } = data
    

    if (book){
        console.log(book.author.name)
        return (
            <div id="book-details">
                <h2>{ book.name }</h2>
                <p>{ book.genre }</p>
                <p>{ book.author.name }</p>
                <p>All books by this author</p>
                <ul className="other-books">
                    { book.author.books.map(item => {
                        return (<li key={ item.id }>{ item.name }</li>)
                    }) }
                </ul>
            </div>
        )
    }

    return (<p>No book has been selected</p>)
    
    
}
