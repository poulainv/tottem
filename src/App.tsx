import React from 'react'
import './App.css'
import BookCard from './components/bookCard'
import books from './data/books'
import { Book } from './types'

const App: React.FC = () => {
    return (
        <div className="App">
            <h1> Hello, I'm Vincent </h1>
            {books.map((item: Book) => {
                return <BookCard key={0} {...item} />
            })}
        </div>
    )
}

export default App
