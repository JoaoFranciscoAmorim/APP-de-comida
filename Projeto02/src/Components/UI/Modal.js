import classes from './Modal.module.css'
import { Fragment } from 'react'
import ReactDOM from 'react-dom'
function Backdrop (props) {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}
function ModalOverlay (props) {
    return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
    </div>
}
const portalElement = document.getElementById('overlays')
function Modal (props) {
    return <Fragment>
       {ReactDOM.createPortal(<Backdrop onClose={props.onClose}></Backdrop>, portalElement)}
       {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        
    </Fragment>
}
export default Modal;
/*-O Modal é a nova tela que aparecerá sobreposta.
-Deve-se criar um novo id (overlays) no index.html, na pasta public.*/