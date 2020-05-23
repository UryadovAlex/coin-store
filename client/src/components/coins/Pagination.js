import React from "react";
import style from "./styles/Pagination.module.css";

const Pagination = ({coinsPerPage, totalCoins, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
        pageNumbers.push(i);
    }

    return totalCoins ? (
        <div>
            <ul className={style.main}>
                {pageNumbers.map(number => (
                    <li key={number} onClick={() => paginate(number)}>
                        <p>{number}</p>
                    </li>
                ))}
            </ul>
        </div>
    ) : '';
}

export default Pagination;