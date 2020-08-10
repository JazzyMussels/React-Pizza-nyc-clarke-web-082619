import React from "react"

const PizzaForm = props => {
  
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={props.topping} onChange={e => props.handleChange({id: props.id, topping: e.target.value, size: props.size, vegetarian: props.vegetarian})}/>
        </div>
        <div className="col">
          <select value={props.size} onChange={e => props.handleChange({id: props.id, topping: props.topping, size: e.target.value, vegetarian: props.vegetarian})} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={props.vegetarian} onChange={() => props.handleChange({id: props.id, topping: props.topping, size: props.size, vegetarian: !props.vegetarian})}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.vegetarian} onChange={() => props.handleChange({id: props.id, topping: props.topping, size: props.size, vegetarian: !props.vegetarian})}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.handleSubmit()}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
