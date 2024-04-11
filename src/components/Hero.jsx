import React, { useState, useEffect } from "react";
import "../assets/css/hero.css";
import Info from "../assets/images/info.svg";
import Chart from "../assets/images/chart.svg";
import Product1 from "../assets/images/Product.svg";
import Product2 from "../assets/images/Product-2.svg";
import Product3 from "../assets/images/Product-3.svg";
import Product4 from "../assets/images/Product-4.svg";
import { HOST_URL } from "../assets/js/help_func";
import axios from "axios";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState();

  const GET_WALLET_BALANCE = `${HOST_URL()}/wallet`; // Updated API URL

   // FETCH ALL wallet
   useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(GET_WALLET_BALANCE);
        setWallet(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(wallet);

  return (
    <>
      <div className="hero">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="hero__container">

          <div className="hero__items">
            <div className="balance">
              <div className="balance__usd">
                <div>
                  <p className="available">Available Balance</p>
                  <p className="usd">USD {wallet?.balance}</p>
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
                <p className="usd__ledger">USD {wallet?.ledger_balance}</p>
              </div>
              <div>
                <div className="ledger__balance">
                  <p className="available">Total Payout</p>
                  <div>
                    <img src={Info} alt="" />
                  </div>
                </div>
                <p className="usd__ledger">USD {wallet?.total_payout}</p>
              </div>
              <div >
                <div className="ledger__balance">
                  <p className="available">Total Revenue</p>
                  <div>
                    <img src={Info} alt="" />
                  </div>
                </div>
                <p className="usd__ledger">USD {wallet?.total_revenue}</p>
              </div>
              <div>
                <div className="ledger__balance">
                  <p className="available">Pending Payout</p>
                  <div>
                    <img src={Info} alt="" />
                  </div>
                </div>
                <p className="usd__ledger">USD {wallet?.pending_payout}</p>
              </div>
            </div>
          </div>

        </div>
      )}

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
    </>
  );
};

export default Hero;
