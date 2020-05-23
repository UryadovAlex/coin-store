import React from "react";
import qs from "qs";
import Coin from "./Coin";
import {connect} from "react-redux";
import styles from "./styles/CoinList.module.css";
import {searchCoins} from "../../actions/coins";
import CoinSearch from "./CoinSearch";
import Pagination from "./Pagination";

class CoinListSearch extends React.Component {
    state = {
        currentPage: 1,
        coinsPerPage: 4
    }

    paginate = (currentPage) => this.setState({currentPage});

    changeCoinsPerRage = e => this.setState({coinsPerPage: e.target.value});

    renderCoinList = () => {
        let indexOfLastCoin = this.state.currentPage * this.state.coinsPerPage;
        let indexOfFirstCoin = indexOfLastCoin - this.state.coinsPerPage;
        let currentCoins = this.props.coins.slice(indexOfFirstCoin, indexOfLastCoin);
        if (this.props.coins) {
            return currentCoins.map(coin => <Coin key={coin.id} {...coin}/>);
        } else {
            return <div>Loading...</div>;
        }
    }

    render() {
        return (
            <div>
                <CoinSearch/>
                <div className={styles.pages_select}>
                    <label>Pages: </label>
                    <select name="numbers" onChange={this.changeCoinsPerRage}>
                        <option value="2">2</option>
                        <option selected value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div className={styles.wrapper}>
                    {this.renderCoinList()}
                </div>
                <Pagination
                    coinsPerPage={this.state.coinsPerPage}
                    totalCoins={this.props.coins.length}
                    paginate={this.paginate}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {coins: Object.values(state.coins)};
}

export default connect(mapStateToProps, {searchCoins})(CoinListSearch);