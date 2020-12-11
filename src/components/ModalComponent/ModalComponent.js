import React from "react"
import Modal from "react-modal";
import {useSelector,useDispatch} from "react-redux"
import {modalToogle,selectModal} from "../../Reducer/RepartidorSlice"


const ModalComponent = ({children}) => {

    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: 450
        }
      };
      const dispatch = useDispatch()
      const modal = useSelector(selectModal);
    

    return ( 
    <Modal
        isOpen={modal}
        onRequestClose={() => dispatch(modalToogle(false))}
        style={customStyles}
    >
    <i class="fas fa-times" id="icon_close" onClick={()=>dispatch(modalToogle(false))}></i>
        {children}
    </Modal> );
}
 
export default ModalComponent;