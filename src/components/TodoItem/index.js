// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {id, title} = todoItem

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item-container">
      <div className="title-container">
        <p className="title">{title}</p>
      </div>
      <div className="btn-container">
        <button type="button" onClick={onDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
