import React, { useState, useEffect, useCallback } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "../../../utils/load-contracts";
import {
  getSchedule,
  postAsyncBookedSeats,
  getStatus,
} from "../../../feature/seats/seatSlices";
import { useDispatch, useSelector } from "react-redux";
import ZaloPay from "../../../image/zalo-pay.svg";
import Momo from "../../../image/logo-momo.svg";
import paymentMap from "../../../common/payment/paymentMethod.js";

const PaymentMethod = () => {
  let seats = localStorage.getItem("seats");
  let schedule = localStorage.getItem("schedule_id");
  // let payment_method = "62ac2196c719c9ecd0f1cd75";
  const [payment_method, setMethod] = useState("");
  let user_token = localStorage.getItem("user_token");
  // const data = {
  //   schedule: schedule,
  //   array: seats,
  //   paymentMethod: payment_method,
  //   token: user_token,
  // };
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const scheduleData = useSelector(getSchedule);
  const status = useSelector(getStatus);
  const navigate = useNavigate();
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [activeMethod, setActiveMethod] = useState("");

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      const contract = await loadContract("Cinema", provider);
      if (provider) {
        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract,
        });
      } else {
        console.error("Please Install Metamask");
      }
    };
    loadProvider();
  }, []);
  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    };
    const loadBalance = async () => {
      const { contract, web3 } = web3Api;
      const _balance = await web3.eth.getBalance(contract.address);
      setBalance(web3.utils.fromWei(_balance, "ether"));
    };
    web3Api.web3 && getAccount() && loadBalance();
  }, [web3Api.web3, web3Api]);

  const addFunds = useCallback(async () => {
    const { contract, web3 } = web3Api;
    await contract.addFunds({
      from: account,
      value: web3.utils.toWei("1", "ether"),
    });
    // setMethod(paymentMap['meta']);
    // navigate("/ticket");
  }, [web3Api, account, navigate]);
  const [confirm, setConfirm] = useState(false);
  useEffect(() => {
    if (status && confirm) {
      navigate("/ticket");
    }
  }, [status, scheduleData, navigate]);
  useEffect(() => {
    console.log(payment_method);
    const temp = {
      schedule: schedule,
      array: seats,
      paymentMethod: payment_method,
      token: user_token,
    };
    setData(temp);
  }, [payment_method]);
  return (
    <div className="payment-method-section">
      <p className="bold-text">Payment Method</p>
      <div className="payment-method-body">
        <div className="inner-body">
          <div className="row">
            <div className="icon-wrapper">
              <div className="card-pay">
                <div className={activeMethod === "zalo" ? "icon-active" : "icon"}>
                  <button
                    onClick={() => {
                      setMethod(paymentMap["Zalo"]);
                      setActiveMethod("zalo");
                    }}
                  >
                    <img src={ZaloPay} />
                  </button>
                </div>
              </div>
            </div>
            <div className="icon-wrapper">
              <div className="card-pay">
                <div className={activeMethod === "momo" ? "icon-active" : "icon"}>
                  <button
                    onClick={() => {
                      setMethod(paymentMap["Momo"]);
                      setActiveMethod("momo");
                    }}
                  >
                    <img src={Momo} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="break">
            <hr />
            <div className="or">Or</div>
            <hr />
          </div>
          <p>
            <strong>Pay via Metamask.</strong>
            <div className="checkout">
              <button
                onClick={() => {
                  web3Api.provider.request({ method: "eth_requestAccounts" });
                }}
              >
                Connect wallet
              </button>
              <button onClick={addFunds}>Transact</button>
            </div>
          </p>
        </div>
      </div>
      <div className="checkout">
        <button onClick={() => navigate(-1)}>Previous Step</button>
        <button
          onClick={() => {
            dispatch(postAsyncBookedSeats(data));
            setConfirm(!confirm);
          }}
        >
          Pay Your Order
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
