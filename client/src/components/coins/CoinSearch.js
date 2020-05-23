import React from "react";
import {connect} from "react-redux";
import {searchCoins} from "../../actions/coins";
import styles from "./styles/CoinSearch.module.css";
import {Link} from "react-router-dom";

class CoinSearch extends React.Component {
    state = {search: ''}

    onInputChange = e => this.setState({search: e.target.value});

    search = () => this.props.searchCoins(this.state.search);

    render() {
        console.log(this.props.isAdmin)
        return (
            <div className={styles.search_bar}>
                <label>Input field</label>
                <div className={styles.input_button}>
                    <input type="text" value={this.state.search} onChange={this.onInputChange}/>
                    <button onClick={this.search}>Search</button>
                    {+this.props.isAdmin ? <Link to="/coins/new">Add coin</Link> : ''}
                </div>
                <Link className={styles.filter_link} to="/coins/filter">Advanced filter ^</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { isAdmin: state.loggedUser.isAdmin }
}

export default connect(mapStateToProps, {searchCoins})(CoinSearch);