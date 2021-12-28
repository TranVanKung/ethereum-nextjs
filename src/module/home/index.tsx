import { useEffect, useState } from "react";
import Web3 from "web3";
import { HomePageWrapper } from "./style";

const Home = () => {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });
  useEffect(() => {
    const loadProvider = async () => {
      // with metamask we have an access to window.ethereum & to window.web3
      // metamask inject a global API into website
      // this API allows website to request users, accounts, read data from blockchain, sign messages and transactions

      let provider = null;
      if (window?.ethereum) {
        provider = window?.ethereum;
      } else if (window?.web3) {
        provider = window?.web3?.currentProvider;
      } else if (!process?.env?.production) {
        provider = new Web3.providers.HttpProvider("http://localhost:7545");
      }
    };

    loadProvider();
  }, []);

  const getListAccount = async () => {
    const accounts = await window?.ethereum?.request({
      method: "eth_requestAccounts",
    });
    console.log("accounts", accounts);
  };

  return (
    <HomePageWrapper>
      <div className="faucet">
        <div className="balance-view is-size-2">
          Current Balance: <strong>10</strong> ETH
        </div>

        <button className="btn mr-2" onClick={getListAccount}>
          Ethereum
        </button>
        <button className="btn mr-2">Donate</button>
        <button className="btn">Withdraw</button>
      </div>
    </HomePageWrapper>
  );
};

export default Home;
