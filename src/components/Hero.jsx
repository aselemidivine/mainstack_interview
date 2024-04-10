import React from "react";
import "../assets/css/hero.css";
import Info from "../assets/images/info.svg";
import Expand from "../assets/images/expand_more.svg";
import Download from "../assets/images/download.svg";
import Down_arrow from "../assets/images/down-arrow.svg";
import Chart from "../assets/images/chart.svg";
import Product1 from "../assets/images/Product.svg";
import Product2 from "../assets/images/Product-2.svg";
import Product3 from "../assets/images/Product-3.svg";
import Product4 from "../assets/images/Product-4.svg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__items">
            <div className="balance">
              <div className="balance__usd">
                <div>
                  <p className="available">Available balance</p>
                  <p className="usd">USD 120,500.00</p>
                </div>
                <div className="project">
                  <button type="button" class="css-kdh3kf">
                    Withdraw
                  </button>
                </div>
              </div>
              <div className="">
                <div>
                  <div>
                    <div className="chart">
                      <img src={Chart} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="line__flex">
                      <div className="line__1"></div>
                      <div className="line__2"></div>
                      <div className="line__3"></div>
                    </div>
                    <div className="date__container">
                      <p>April 2, 2022</p>
                      <p>April 30, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ledger">
              <div>
                <div className="ledger__balance">
                  <p className="available">Ledger Balance</p>
                  <div>
                    <img src={Info} alt="" />
                  </div>
                </div>
                <p className="usd__ledger">USD 0.00</p>
              </div>
              <div>
                <div className="ledger__balance">
                  <p className="available">Total Payout</p>
                  <div>
                    <img src={Info} alt="" />
                  </div>
                </div>
                <p className="usd__ledger">USD 55,080.00</p>
              </div>
              <div>
                <div className="ledger__balance">
                  <p className="available">Total Revenue</p>
                  <div>
                    <img src={Info} alt="" />
                  </div>
                </div>
                <p className="usd__ledger">USD 175,580.00</p>
              </div>
              <div>
                <div className="ledger__balance">
                  <p className="available">Pending payout</p>
                  <div>
                    <img src={Info} alt="" />
                  </div>
                </div>
                <p className="usd__ledger">USD 0.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="side__icons">
        <div className="img__icons">
          <img src={Product1} alt="" />
        </div>
        <div className="img__icons">
          <img src={Product2} alt="" />
        </div>
        <div className="img__icons">
          <img src={Product3} alt="" />
        </div>
        <div className="img__icons">
          <img src={Product4} alt="" />
        </div>
      </div>
      {/* TRANSACTIONS */}
      <div className="hero__container">
        <div className="transaction">
          <div className="transaction__number">
            <p className="transaction__number--main">23 Transactions</p>
            <p className="detail">Your transactions for the last 7 days</p>
          </div>
          <div className="filter">
            <div className="user__icon">
              <span>Filter</span>
              <img className="filter__items" src={Expand} alt="" />
            </div>
            <div className="user__icon">
              <span>Export list</span>
              <img className="filter__items" src={Download} alt="" />
            </div>
          </div>
        </div>
        <div className="transaction__list">
          <div className="">
            <div className="transaction__container">
              <div>
                <img src={Down_arrow} alt="" />
              </div>
              <div>
                <p className="title">Psychology of Money </p>
                <p className="author">Roy Hudson</p>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <p className="price">USD 120</p>
              <p className="date">Apr 02, 2022</p>
            </div>
          </div>
        </div>
        <div className="transaction__list">
          <div className="">
            <div className="transaction__container">
              <div>
                <img src={Down_arrow} alt="" />
              </div>
              <div>
                <p className="title">Psychology of Money </p>
                <p className="author">Roy Hudson</p>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <p className="price">USD 120</p>
              <p className="date">Apr 02, 2022</p>
            </div>
          </div>
        </div>
        <div className="transaction__list">
          <div className="">
            <div className="transaction__container">
              <div>
                <img src={Down_arrow} alt="" />
              </div>
              <div>
                <p className="title">Psychology of Money </p>
                <p className="author">Roy Hudson</p>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <p className="price">USD 120</p>
              <p className="date">Apr 02, 2022</p>
            </div>
          </div>
        </div>
        <div className="transaction__list">
          <div className="">
            <div className="transaction__container">
              <div>
                <img src={Down_arrow} alt="" />
              </div>
              <div>
                <p className="title">Psychology of Money </p>
                <p className="author">Roy Hudson</p>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <p className="price">USD 120</p>
              <p className="date">Apr 02, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
