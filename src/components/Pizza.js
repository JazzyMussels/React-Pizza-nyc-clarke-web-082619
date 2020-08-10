import React from "react"

const handleClick = (props) => {
  props.handleClick({
    id: props.id,
    topping: props.topping,
    size: props.size,
    vegetarian: props.vegetarian
  })
}

const Pizza = props => {
  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => handleClick(props)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
