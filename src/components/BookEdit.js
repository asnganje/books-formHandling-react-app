import { useState } from "react"

export default function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title)

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle()
        onSubmit(book.id, title)
        e.target.value = '';
    }

    return(
            <form className="book-edit" onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button is-primary">Save</button>
            </form>

    )
}