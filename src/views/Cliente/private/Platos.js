import React,{useEffect} from "react";
import CardPlato from "../../../components/Card/CardPlatoProducto"
import BadgeCategory from "../../../components/Badge/CategoriaBadge"
import {useSelector, useDispatch} from "react-redux"
import {selectPlatos,listaDePlatos} from "../../../Reducer/ProductoSlice"
import {selectCategorias,obtenerCategorias} from "../../../Reducer/CategoriaSlice"


const Plato = () => {


  const platos = useSelector(selectPlatos)
  const categorias = useSelector(selectCategorias);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(listaDePlatos())
    dispatch(obtenerCategorias())
  },[])
      // const categorias = [
      //   { id: 1, nombre: "norteño" },
      //   { id: 2, nombre: "marino" },
      //   { id: 3, nombre: "selvatico" },
      //   { id: 4, nombre: "subterraneo" }
      // ];
      
  return (
   <div>
        <BadgeCategory categorias={categorias} />
    <div className="container_card_platos">
     
        {
        platos.map((item, index) => {
        return <CardPlato key={index} datos={item} />;
        })
        }
  </div>
   </div>

  );
};
export default Plato;
