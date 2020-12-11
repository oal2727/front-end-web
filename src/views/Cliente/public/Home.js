import React from "react"
import CardProducto from "../../../components/Card/CardProducto";
import ImageInitial from "../../../assets/img/ImageInicial.png" 
import BadgeCategory from "../../../components/Badge/CategoriaBadge"
import {useHistory} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {selectCategorias,obtenerCategorias} from "../../../Reducer/CategoriaSlice"
import {selectPlatosInitialize,listaDePlatosInicial} from "../../../Reducer/ProductoSlice"

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const datacategoria = useSelector(selectCategorias);
  const productosIniciales = useSelector(selectPlatosInitialize);
  const listarCategorias = ()=>{
    dispatch(obtenerCategorias())
  }

  React.useEffect(()=>{
    
    listarCategorias();
    dispatch(listaDePlatosInicial());
    console.log(productosIniciales);
  },[])
  
      // const datacategoria = [
      //   { id: 1, nombre: "Ceviche", costo: 5.0 },
      //   { id: 2, nombre: "Arroz Chaufa", costo: 7.0 },
      //   { id: 3, nombre: "Arroz con Pollo", costo: 8.0 },
      //   { id: 4, nombre: "Lomo", costo: 8.0 },
      //   { id: 5, nombre: "Causa", costo: 8.0 },
      //   { id: 6, nombre: "Papa Rellena", costo: 8.0 },
      //   { id: 7, nombre: "Papa Rellena", costo: 8.0 },
      //   { id: 8, nombre: "Papa Rellena", costo: 8.0 }
      // ];
    return (
       <div>
        <div className="initial_design">
        <div className="initial_design_text">
        <span>Restaurante El pepito</span>
        <div className="text_wrap"><i class="fas fa-rocket"></i><p>Comida Rapida</p></div>
      <div className="text_wrap"><i class="fas fa-utensils"></i> <p>Comida Excelente</p></div>
        <div className="button_menu_div">
        <button className="button_menu_platos" onClick={()=>history.push('/Platos')}>Ver Menu</button>
        </div>
        </div>
        <img className="image_initial" src={ImageInitial} alt=""/>
        </div>
        <BadgeCategory categorias={datacategoria} />
       <div className="container-card-producto">
        {productosIniciales.map((item, index) => {
          return (
            <div key={index}>
              <CardProducto platos={item} index={index + 1} />
            </div>
          );
        })}
      </div>
       
       </div>

      );
}
 
export default Home;