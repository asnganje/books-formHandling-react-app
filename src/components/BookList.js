import BookShow from './BookShow'
export default function BookList({books, onDelete, onEdit}) {
    const renderedItems = books.map((book) => {
        return <BookShow  key = {book.id} book = {book} onDelete = {onDelete} onEdit ={onEdit} />
    })
    return(
        
        <div className='book-list'>
            {renderedItems}
        </div>
    )
}