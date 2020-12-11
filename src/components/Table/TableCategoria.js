import React from "react";
import { toast } from "react-toastify";
import {useDispatch} from "react-redux"
import {deleteCategoria} from "../../Reducer/CategoriaSlice"
const TableCategoria = ({ datos }) => {

  const dispatch = useDispatch()
  const deleteCategory = (id)=>{
    dispatch(deleteCategoria(id))
    toast.success("Eliminado Correctamente", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
  return (
    <table className="table-container">
    <thead>
    <tr className="table-header">
        <th>N°</th>
        <th>Descripcion</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        datos.map((item,index)=>{
          return(
            <tr className="col" key={index}>
              <td>{index+1}</td>
            <td>{item.DESCRIPCION}</td>
          <td><i 
          onClick={()=>deleteCategory(item.IDCATEGORIA+1)} 
          id="trash_managment" 
          className="fas fa-trash"></i></td>
          </tr>
          )
        })
      }
    </tbody>
</table>
  );
};
export default TableCategoria;
