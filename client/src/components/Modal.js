import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className={styles.wrapper}>
            <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
                <div className={styles.header}>{props.title}</div>
                <div className={styles.content}>
                    {props.content}
                </div>
                <div className={styles.actions}>
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;