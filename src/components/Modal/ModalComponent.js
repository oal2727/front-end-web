import React from "react"
import Modal from "react-modal";
import {useSelector,useDispatch} from "react-redux"
import {modalToogle,selectModal} from "../../Reducer/CategoriaSlice"


const ModalComponent = ({children})=>{
    const dispatch = useDispatch()
    const modal = useSelector(selectModal);
    React.useEffect(()=>{
        console.log("modal here asd" + modal)
    },[])
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
    return(
        <Modal
        isOpen={modal}
        onRequestClose={() => dispatch(modalToogle(false))}
        style={customStyles}
      >
          <button onClick={() => dispatch(modalToogle(false))}>
          Close
          </button>
          {children}
      </Modal>

    )
}
export default ModalComponent;