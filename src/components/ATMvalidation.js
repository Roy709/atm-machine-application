import React, { useState } from "react";
import "./ATMvalidation.css";
const ATMvalidation = () => {
  const [amount, setAmount] = useState("");
  const [show, setShow] = useState(false);
  const [withdrawNotification, setWithdrawNotification] = useState(false);
  const [invalidPopup, setInvalidPopup] = useState(false);
  const [initialFormate, setInitialFormate] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: ""
  });
  const EnteredAmount = (e) => {
    setAmount(e.target.value);
  };
  const inputFocus = () => {
    setInvalidPopup(false);
    setWithdrawNotification(false);
  };
  const withdrawMoneyClick = (e) => {
    e.preventDefault();
    const lastIndex = amount.length - 1;
    const myArray = amount.split("");
    const data = myArray[lastIndex];
    if (data === "0") {
      const Thousand = parseInt(amount / 1000);
      const FiveHundred = parseInt((amount - Thousand * 1000) / 500);
      const Hundred = parseInt(
        (amount - (Thousand * 1000 + FiveHundred * 500)) / 100
      );
      const Fifty = parseInt(
        (amount - (Thousand * 1000 + FiveHundred * 500 + Hundred * 100)) / 50
      );
      const Twenty = parseInt(
        (amount -
          (Thousand * 1000 + FiveHundred * 500 + Hundred * 100 + Fifty * 50)) /
          20
      );
      const Ten = parseInt(
        (amount -
          (Thousand * 1000 +
            FiveHundred * 500 +
            Hundred * 100 +
            Fifty * 50 +
            Twenty * 20)) /
          10
      );
      const updateFormate = {
        A: Thousand,
        B: FiveHundred,
        C: Hundred,
        D: Fifty,
        E: Twenty,
        F: Ten
      };
      setInitialFormate(updateFormate);
      setShow(true);
    } else {
      const updateFormate = {
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        F: ""
      };
      setInitialFormate(updateFormate);
      setAmount(" ");
      setShow(false);
      setInvalidPopup(true);
    }
    setWithdrawNotification(false);
  };
  const withdrawConfirmClick = () => {
    setAmount(" ");
    setShow(false);
    setWithdrawNotification(true);
  };
  return (
    <>
      <div className="bankHome">
        <h1 className="title">Your Bank ATM!</h1>
        <div className="form">
          <div>
            <div className="input-field">
              <label htmlFor="amount">Enter Withdraw Amount</label>
              <br />
              <input
                type="number"
                name="amount"
                value={amount}
                onChange={EnteredAmount}
                onFocus={inputFocus}
              />
              <br />

              <button className="buttons" onClick={withdrawMoneyClick}>
                Withdraw
              </button>
            </div>
            {invalidPopup ? (
              <div className="ivalid-amount-popup">
                <p className="ivalid-amount-popup-body">
                  You Entered Invalid Amount!
                </p>
              </div>
            ) : null}
            {show ? (
              <div className="formate-main">
                <div className="formate-body">Cash Out Formate</div>
                {initialFormate.A ? (
                  <p>
                    {initialFormate.A} x 1000 = {initialFormate.A * 1000}
                  </p>
                ) : null}
                {initialFormate.B ? (
                  <p>
                    {initialFormate.B} x 500 = {initialFormate.B * 500}
                  </p>
                ) : null}
                {initialFormate.C ? (
                  <p>
                    {initialFormate.C} x 100 = {initialFormate.C * 100}
                  </p>
                ) : null}
                {initialFormate.D ? (
                  <p>
                    {initialFormate.D} x 50 = {initialFormate.D * 50}
                  </p>
                ) : null}
                {initialFormate.E ? (
                  <p>
                    {initialFormate.E} x 20 = {initialFormate.E * 20}
                  </p>
                ) : null}
                {initialFormate.F ? (
                  <p>
                    {initialFormate.F} x 10 = {initialFormate.F * 10}
                  </p>
                ) : null}
                <p>
                  Grand Total ={" "}
                  {initialFormate.A * 1000 +
                    initialFormate.B * 500 +
                    initialFormate.C * 100 +
                    initialFormate.D * 50 +
                    initialFormate.E * 20 +
                    initialFormate.F * 10}
                </p>
                <button onClick={withdrawConfirmClick} className="buttons">
                  Confirm
                </button>
              </div>
            ) : null}
            {withdrawNotification ? (
              <div className="withdraw-message">
                <h4 className="withdraw-message-body">
                  Collect Withdraw Amount!
                </h4>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ATMvalidation;
