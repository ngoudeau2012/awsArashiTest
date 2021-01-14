import React, {useState} from "react";
import './style.css'

function ItemPhotoDescription({item,colSize,menu}) {

  // const [colState, setColState] = useState("")
  console.log(menu)
  let colState = ""

  if(colSize === "3"){
    console.log(colSize)
    colState = "column is-one-third"
  }else if(colSize ==="2"){
    colState = "column is-half"
  }
  return (
    <div className={colState}>
        <div className="employeeCard" >
      <figure className="image">
        <img
          className="is-rounded"
          src= {item.photo}
        />
      </figure>
      <p className ="name">{item.name}</p>
      <p className ="description">{item.description}</p>
    </div>
    </div>
  );
}

export default ItemPhotoDescription;
