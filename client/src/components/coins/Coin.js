import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./styles/Coin.module.css";
import {connect} from "react-redux";
import {deleteFromCart} from "../../actions/cart";
import delIcon from "../../images/del.png";
import editIcon from "../../images/Editing-Edit-icon.png";

class Coin extends React.Component {

    renderAdminControls = () => {
        const {id} = this.props;
        return (
            <div className={styles.button_delete}>
                <NavLink  to={`/coins/edit/${id}`}><img src={editIcon} alt=""/></NavLink>
                <NavLink  to={`/coins/delete/${id}`}><img src={delIcon} alt=""/></NavLink>
            </div>
        );
    }

    renderCartControls = () => {
        const {name, coinId, id, shortDescription, deleteFromCart, hasDelete, qty} = this.props;
        return (
            <React.Fragment>
                <div className={styles.content}>
                    <h4>Qty</h4>
                    <p className={styles.qty}>{qty}</p>
                </div>
                <div className={styles.button_delete}>
                    {hasDelete && <button onClick={() => deleteFromCart(coinId)}>Delete</button>}
                </div>
            </React.Fragment>
        );
    }

    render() {
        const {name, coinId, id, shortDescription, hasDelete, isAdmin, obverseLink} = this.props;
        return (
            <div className={styles.coin_container}>
                <div style={{width: "120px"}}>
                    <img src={`http://coinsstorepro.com//uploads/${obverseLink}`} alt=""/>
                </div>
                <div className={styles.content}>
                    <NavLink to={`/coins/${coinId ? coinId : id}`}>
                        <h4>{name}</h4>
                    </NavLink>
                    <p>{shortDescription}</p>
                </div>
                {hasDelete && this.renderCartControls()}
                {+isAdmin ? this.renderAdminControls() : ''}
            </div>
        );
    }
}

const mapStateToProps = ({loggedUser}) => {
    return {isAdmin: loggedUser.isAdmin}
}

export default connect(mapStateToProps, {deleteFromCart})(Coin);