import React from "react";
import {connect} from "react-redux";
import {fetchCoin} from "../../actions/coins";
import { addToCart, updateCart, fetchFromCart } from "../../actions/cart"
import styles from "./styles/CoinDescriptiom.module.css";

class CoinDescription extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchCoin(id);
        if (this.props.user.id){
            this.props.fetchFromCart(this.props.user.id);
        }
    }

    renderAddToCartButton = () => {
        const { user, addToCart, match, history, cart, updateCart } = this.props;
        if (!+user.isAdmin && +user.id) {
            return (
                <button onClick={() => {
                    if (cart) {
                        updateCart(cart.coinId);
                    } else {
                        addToCart(user.id, match.params.id);
                    }
                    history.goBack();
                }} className={styles.color}>Add to cart</button>
            );
        }
    }

    renderCoin = () => {
        if (this.props.coin) {
            let {
                name,
                value,
                year,
                price,
                country,
                metal,
                fullDescription,
                shortDescription,
                quality,
                weight,
                obverseLink,
                reverseLink
            } = this.props.coin;
            obverseLink = obverseLink.replace("\/", "/");
            return (
                <div className={styles.container}>
                    <div className={styles.images}>
                        <img src={`http://localhost:3010/uploads/${obverseLink}`} alt=""/>
                        <img src={`http://localhost:3010/uploads/${reverseLink}`} alt=""/>
                    </div>
                    <div className={styles.section}>
                        <p>{name}</p>
                        <p>{fullDescription}</p>
                        <p>{shortDescription}</p>
                        <table>
                            <tbody>
                            <tr>
                                <td>Issuing Country</td>
                                <td>{country}</td>
                            </tr>
                            <tr>
                                <td>Composition</td>
                                <td>{metal}</td>
                            </tr>
                            <tr>
                                <td>Quality</td>
                                <td>{quality}</td>
                            </tr>
                            <tr>
                                <td>Denomination</td>
                                <td>{value}</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td>{year}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>{weight}</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>{price}</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className={styles.button_container}>
                            <button onClick={() => this.props.history.goBack()}>Back to the list</button>
                            {this.renderAddToCartButton()}
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div>Loading...</div>
        }
    }

    render() {
        return (
            <div>
                {this.renderCoin()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        user: state.loggedUser,
        coin: state.coins[id],
        cart: state.cart[id]
    };
}

export default connect(mapStateToProps, {fetchCoin, addToCart, updateCart, fetchFromCart})(CoinDescription);