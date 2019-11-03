import React, { useState } from 'react'
import { getBooksQuery } from '../queries/queries'
import { useQuery } from '@apollo/react-hooks';


// components
import BookDetails from './BookDetails'

export default function BookList() {
    
    const [selected, setSelected] = useState(null)
    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    

    return (
        <div>
            <ul id="book-list">
                { data.books.map(book => {
                    return (<li key={ book.id } onClick= {
                        (e) => {
                            e.preventDefault()
                            setSelected(book.id)
                    
                        }
                    }>{ book.name }</li>)
                }) }
            </ul>
            <BookDetails bookId={ selected }/>
        </div>
    )

}


