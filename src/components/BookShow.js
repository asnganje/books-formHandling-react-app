import { useState } from "react"
import BookEdit from './BookEdit'

export default function BookShow({book, onDelete, onEdit}) {
    const [showEdit, setShowEdit] = useState(false)

    const handleClick = () => {
        return onDelete(book.id)
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false)
        onEdit(id, newTitle)
    }

    const handleEdit = () => {
        setShowEdit(!showEdit)
    }
    let content = <h3>{book.title}</h3>

    if(showEdit) {
        content = <BookEdit onSubmit = {handleSubmit} book = {book} />
    }
    return(
        
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="imgbook" />
            <div>{content}</div>
            <div className="actions">
            <button className="edit" onClick={handleEdit}>Edit</button>
            <button className="delete" onClick={handleClick}>Delete!</button>
            </div>
            </div>
        
    )
}