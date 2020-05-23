import React from "react";
import history from "../history";
import UserRegister from "./users/UserRegister";
import {Router, Route, Switch} from "react-router-dom";
import Header from "./Header";
import UserLogin from "./users/UserLogin";
import UserLogout from "./users/UserLogout";
import CoinDescription from "./coins/CoinDescription";
import StoreList from "./coins/StoreList";
import CoinAdd from "./coins/CoinAdd";
import UserEdit from "./users/UserEdit";
import UserList from "./users/UserList";
import UserDelete from "./users/UserDelete";
import styles from "./App.module.css";
import CoinList from "./coins/CoinList";
import CartList from "./coins/CartList";
import CoinEdit from "./coins/CoinEdit";
import CoinDelete from "./coins/CoinDelete";
import CoinListSearch from "./coins/CoinListSearch";
import CoinFilter from "./coins/CoinFilter";
import "../styles.css";

class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Router history={history}>
                    <div>
                        <Header/>
                        <div className={styles.content}>
                            <Switch>
                                <Route path="/users/new" exact component={UserRegister}/>
                                <Route path="/users" exact component={UserList}/>
                                <Route path="/users/edit/:id" exact component={UserEdit}/>
                                <Route path="/users/delete/:id" exact component={UserDelete}/>
                                <Route path="/users/login" exact component={UserLogin}/>
                                <Route path="/users/logout" exact component={UserLogout}/>
                                <Route path="/" exact component={StoreList}/>
                                <Route path="/coins" exact component={CoinListSearch}/>
                                <Route path="/coins/filter" exact component={CoinFilter} />
                                <Route path="/coins/new" exact component={CoinAdd}/>
                                <Route path="/coins/:id" exact component={CoinDescription}/>
                                <Route path="/coins/delete/:id" exact component={CoinDelete}/>
                                <Route path="/coins/edit/:id" exact component={CoinEdit}/>
                                <Route path="/:type" exact component={CoinList}/>
                                <Route path="/cart/:id" exact component={CartList}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;