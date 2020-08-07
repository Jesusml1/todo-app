import React, { Fragment, useState } from 'react'


const EditTodo = ({ todo }) => {

  const [description, setDescription] = useState(todo.description) 

  const udtadeDescription = async(e) => {
    e.preventDefault()
    try {
      const body = { description }
      const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      window.location = "/"

    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <Fragment>
      {/* <!-- Button to Open the Modal --> */}
      <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
        Edit
      </button>

      {/* <!-- The Modal --> */}
      <div className="modal"
           id={`id${todo.todo_id}`}
           onClick={ e => setDescription(todo.description)}>
        <div className="modal-dialog">
          <div className="modal-content">

            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">Edit todo</h4>
              <button type="button"
                      className="close"
                      data-dismiss="modal"
                      onClick={ e => setDescription(todo.description)}
                      >&times;</button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <input className="form-control"
                     value={ description }
                     onChange={ e => setDescription(e.target.value) } />
            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
              <button type="button"
                      className="btn btn-warning"
                      data-dismiss="modal"
                      onClick = {e => udtadeDescription(e)}
              >Edit</button>
              <button type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                      onClick={ e => setDescription(todo.description) }
              >Close</button>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default EditTodo
