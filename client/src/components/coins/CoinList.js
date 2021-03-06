import React from "react";
import Coin from "./Coin";
import {connect} from "react-redux";
import {fetchCoins} from "../../actions/coins";
import styles from "./styles/CoinList.module.css";
import CoinSearch from "./CoinSearch";
import Pagination from "./Pagination";

class CoinList extends React.Component {
    state = {
        currentPage: 1,
        coinsPerPage: 4
    }

    componentDidMount() {
        this.props.fetchCoins(this.props.match.params.type);
    }

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

    changeCoinsPerRage = e => this.setState({coinsPerPage: e.target.value});

    paginate = (currentPage) => this.setState({currentPage});

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

export default connect(mapStateToProps, {fetchCoins})(CoinList);