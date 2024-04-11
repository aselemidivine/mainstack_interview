import React, { useState, useEffect } from "react";
import Expand from "../assets/images/expand_more.svg";
import Download from "../assets/images/download.svg";
import Down_arrow from "../assets/images/down-arrow.svg";
import Up_arrow from "../assets/images/successful.svg";
import "../assets/css/hero.css";
import { HOST_URL } from "../assets/js/help_func";
import axios from "axios";
// import Filter from "./Filter";
// import { useDisclosure } from "@chakra-ui/react";

const Transactions = () => {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const GET_ALL_TRANSACTIONS = `${HOST_URL()}/transactions`; // Updated API URL

  // FETCH ALL TRANSACTIONS
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(GET_ALL_TRANSACTIONS);
        setTransactions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(transactions);

  return (
    <div>
      {/* TRANSACTIONS */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="hero__container">
          <div className="transaction">
            <div className="transaction__number">
              <p className="transaction__number--main">24 Transactions</p>
              <p className="detail">Your transactions for the last 7 days</p>
            </div>
            <div className="filter">
              <div className="filter__icon">
                <span className="filter__items">Filter</span>
                <img className="filter__items" src={Expand} alt="" />
              </div>

              <div className="filter__icon">
                <span>Export list</span>
                <img className="filter__items" src={Download} alt="" />
              </div>
            </div>
          </div>

          {transactions.map((transaction) => (
            <div key={transaction.id} className="transaction__list">
              <div className="">
                <div className="transaction__container">
                  {transaction.type === "deposit" ? (
                    <div>
                      <img src={Down_arrow} alt="Down Arrow" />
                    </div>
                  ) : (
                    <div>
                      <img src={Up_arrow} alt="Up Arrow" />
                    </div>
                  )}
                  <div className="transaction_details">
                    <p className="title">
                      {transaction.metadata?.product_name}{" "}
                    </p>
                    <p className="author">
                      {transaction.metadata?.name
                        ? transaction.metadata?.name
                        : transaction.status}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div>
                  <p className="price">USD {transaction.amount}</p>
                  <p className="date">
                    {new Date(transaction.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Transactions;
