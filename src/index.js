import React, { Component } from 'react'
import { render } from 'react-dom'

let bookList = [
    {"title": "Davinci Code", "author": "Dan Brown", "pages": 364},
    {"title": "Het Bernini Mysterie", "author": "Dan Brown", "pages": 412},
    {"title": "Het Bernini Mysterie", "author": "Dan Brown", "pages": 412}
]

console.log('File is running');

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>By: {author}</p>
            <p>Pages: {pages}</p>
        </section>
    )
}

class Library extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: 'open'
        }
        this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
    }
    toggleOpenClosed() {
        this.setState({
            open: !this.state.open
        })
    }
    render(){
        const { books } = this.props
        return (
            <div>
                <h1>The Library is {this.state.open ? "open" : "closed"}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) => 
                        <Book
                            key={i} 
                            title={book.title}
                            author={book.author}
                            pages={book.pages}/>
                )
                }
            </div>
        )
    }
}
render(
    <Library books={bookList} />,
    document.getElementById('root')
)