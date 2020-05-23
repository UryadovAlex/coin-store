import React from "react";
import {Link} from "react-router-dom";
import styles from "./styles/StoreList.module.css"
import coin1 from "../../images/pic1.png";
import coin2 from "../../images/pic2.png";
import coin3 from "../../images/pic3.png";
import CoinSearch from "./CoinSearch";

class StoreList extends React.Component{

    render() {
        return (
            <div>
                <CoinSearch />
                <div className={styles.wrapper}>
                    <div className={styles.coin_container}>
                        <p>Bullion coins</p>
                        <Link to="/memorial">Show all ></Link>
                        <img src={coin1} alt="Bullion coins"/>
                    </div>
                    <div className={styles.coin_container}>
                        <p>Exclusive coins</p>
                        <Link to="/exclusive">Show all ></Link>
                        <img src={coin2} alt="Exclusive coins"/>
                    </div>
                    <div className={styles.coin_container}>
                        <p>Commemorative coins</p>
                        <Link to="/invested">Show all ></Link>
                        <img src={coin3} alt="Commemorative coins"/>
                    </div>
                </div>
            </div>
        );
    }
}


export default StoreList;