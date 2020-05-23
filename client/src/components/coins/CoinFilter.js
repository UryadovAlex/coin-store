import React from "react";
import {connect} from "react-redux";
import {getDataForFilter, getFilteredCoins} from "../../actions/coins";
import styles from "./styles/CoinFilter.module.css";
import CoinSearch from "./CoinSearch";

class CoinFilter extends React.Component {
    state = {
        country: '',
        metal: '',
        quality: '',
        price1: '',
        price2: '',
        year1: '',
        year2: ''
    }

    componentDidMount() {
        this.props.getDataForFilter();
    }

    renderSelect = (type) => {
        return (
            <select name={type} id="" onChange={this.onInputChange} value={this.state[type]}>
                <option value="">Please Select {type}</option>
                {this.props.filterData[type].map(el => <option key={el} value={el}>{el}</option>)}
            </select>
        );
    }

    onInputChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = () => {
        this.props.getFilteredCoins(this.state)
    }

    render() {
        let flag = this.props.filterData.hasOwnProperty('country');
        return (
            <div>
                <CoinSearch/>
                <div className={styles.wrapper}>
                    <div className={styles.column}>
                        <div className={styles.filter_select}>
                            <label htmlFor="">Issuing Country</label>
                            {flag && this.renderSelect('country')}
                        </div>
                        <div className={styles.filter_select}>
                            <label htmlFor="">Metal</label>
                            {flag && this.renderSelect('metal')}
                        </div>
                        <div className={styles.filter_select}>
                            <label htmlFor="">Quality of coin</label>
                            {flag && this.renderSelect('quality')}
                        </div>
                    </div>
                    <div className={styles.column}>
                        <label>Price</label>
                        <div className={styles.filter_field}>
                            <div className={styles.field_item}>
                                <span>from </span><input name="price1" type="number" onChange={this.onInputChange}
                                                         value={this.state.price1}/>
                            </div>
                            <div className={styles.field_item}>
                                <span> to </span><input name="price2" type="number" onChange={this.onInputChange}
                                                        value={this.state.price2}/>
                            </div>

                        </div>
                        <label>Year of issue</label>
                        <div className={styles.filter_field}>

                            <div className={styles.field_item}>
                                <span>from </span><input name="year1" type="number" onChange={this.onInputChange}
                                                         value={this.state.year1}/>
                            </div>
                            <div className={styles.field_item}>
                                <span> to </span><input name="year2" type="number" onChange={this.onInputChange}
                                                        value={this.state.year2}/>
                            </div>

                        </div>
                        <div className={styles.buttons}>
                            <button onClick={this.onSubmit}>Apply filter</button>
                            <button onClick={() => this.props.history.goBack()}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({filterData}) => {
    return {filterData};
}

export default connect(mapStateToProps, {getDataForFilter, getFilteredCoins})(CoinFilter);