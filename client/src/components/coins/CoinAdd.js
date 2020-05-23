import React from 'react';
import { connect } from 'react-redux';
import { createCoin } from "../../actions/coins";
import CoinForm from "./CoinForm";

class CoinAdd extends React.Component {
    onSubmit = formValues => {
        this.props.createCoin(formValues);
    }

    render() {
        return (
            <div>
                <h3>Add coin</h3>
                <CoinForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default connect(null, { createCoin })(CoinAdd);