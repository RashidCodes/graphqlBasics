import React, { useState } from 'react'
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'
import { useQuery, useMutation } from '@apollo/react-hooks';



export default function AddBook (){
    let input;
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [authorId, setAuthor] = useState("")

    const [addBook, _] = useMutation(addBookMutation);
    const { loading, error, data } = useQuery(getAuthorsQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    

    

    return (
        
        <form id="add-book" onSubmit={ 
            (e) => {
                e.preventDefault()
                addBook({ variables: { name, genre, authorId }, refetchQueries: [{query: getBooksQuery}] });
            }
         }>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={ (e) => setName( e.target.value )} ref={node => { input = node}}/>
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={ (e) => setGenre( e.target.value ) }/>
            </div>

            <div className="field">
                <label>Author</label>
                <select onChange={ (e) => setAuthor( e.target.value ) }>
                    <option value="">Select author</option>
                    { data.authors.map(author => {
                        return (<option key={ author.id } value={ author.id }>{ author.name }</option>)
                    }) }
                </select>
            </div>

            <button type="submit">+</button>
        </form>
    )
}
