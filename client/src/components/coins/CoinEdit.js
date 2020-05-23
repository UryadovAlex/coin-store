import React from 'react';
import {connect} from 'react-redux';
import {updateCoin, fetchCoin} from "../../actions/coins";
import CoinForm from "./CoinForm";

class CoinEdit extends React.Component {
    componentDidMount() {
        this.props.fetchCoin(this.props.match.params.id);
    }

    onSubmit = formValues => this.props.updateCoin(this.props.match.params.id, formValues);


    render() {
        if(this.props.coin){
            const {
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
            } = this.props.coin;
            return (
                <div>
                    <h2>Edit coin</h2>
                    <CoinForm
                        initialValues={{
                            name,
                            value,
                            year,
                            price,
                            country,
                            metal,
                            fullDescription,
                            shortDescription,
                            quality,
                            weight,}}
                        onSubmit={this.onSubmit}
                    />
                </div>
            );
        } else {
            return <div>Loading...</div>
        }

    }
}

const mapStateToProps = (state, ownProps) => {
    return {coin: state.coins[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {updateCoin, fetchCoin})(CoinEdit);