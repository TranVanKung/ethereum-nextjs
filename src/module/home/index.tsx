import { useCallback, useEffect, useState, Fragment } from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "@/helper/util";
import { HomePageWrapper } from "./style";

const Home = () => {
  const [web3Api, setWeb3Api] = useState<any>({
    provider: null,
    isProviderLoaded: false,
    web3: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [shouldReload, reload] = useState(false);

  const canConnectToContract = account && web3Api?.contract;
  const reloadEffect = useCallback(() => reload(!shouldReload), [shouldReload]);

  const setAccountListener = (provider: any) => {
    provider?.on("accountsChanged", (accounts: any) => {
      window.location.reload();
    });

    provider?.on("chainChanged", (accounts: any) => {
      window.location.reload();
    });

    // provider?._jsonRpcConnection?.events?.on("notification", (payload: any) => {
    //   const { method } = payload;

    //   if (method === "metamask_unlockStateChanged") {
    //     setAccount(null);
    //   }
    // });
  };

  useEffect(() => {
    const loadProvider = async () => {
      // with metamask we have an access to window.ethereum & to window.web3
      // metamask inject a global API into website
      // this API allows website to request users, accounts, read data from blockchain, sign messages and transactions

      const provider: any = await detectEthereumProvider();

      if (provider) {
        const contract = await loadContract("Faucet", provider);
        setAccountListener(provider);

        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract,
          isProviderLoaded: true,
        });
      } else {
        setWeb3Api((api: any) => ({
          ...api,
          isProviderLoaded: true,
        }));

        console.error("Please, install Metamask");
      }
    };

    loadProvider();
  }, []);

  useEffect(() => {
    const getAccounts = async () => {
      const accounts = await web3Api?.web3?.eth?.getAccounts();

      setAccount(accounts?.[0]);
    };

    web3Api?.web3 && getAccounts();
  }, [web3Api?.web3]);

  useEffect(() => {
    const loadBalance = async () => {
      const { contract, web3 } = web3Api;
      const contractBalance = await web3?.eth?.getBalance(contract?.address);
      setBalance(web3?.utils?.fromWei(contractBalance, "ether"));
    };

    web3Api?.contract && loadBalance();
  }, [web3Api, shouldReload]);

  const onConnectWallet = () => {
    web3Api?.provider?.request({ method: "eth_requestAccounts" });
  };

  const addFunds = useCallback(async () => {
    const { contract, web3 } = web3Api;

    await contract?.addFunds({
      from: account,
      value: web3?.utils?.toWei("1", "ether"),
    });

    reloadEffect();
  }, [web3Api, account, reloadEffect]);

  const withdrawFunds = async () => {
    const { contract, web3 } = web3Api;

    const withdrawAmount = web3?.utils?.toWei("0.1", "ether");
    await contract?.withdraw(withdrawAmount, {
      from: account,
    });

    reloadEffect();
  };

  return (
    <HomePageWrapper>
      <div className="faucet">
        {web3Api.isProviderLoaded ? (
          <div className="is-flex is-align-items-center">
            <span>
              <strong className="mr-2">Account:</strong>
            </span>

            {account ? (
              <span>{account}</span>
            ) : !web3Api.provider ? (
              <Fragment>
                <div className="notification is-warning is-small is-rounded is-size-6">
                  Wallet is not detected!{" "}
                  <a
                    href="https://docs.metamask.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Install metamask
                  </a>
                </div>
              </Fragment>
            ) : (
              <button className="button is-small" onClick={onConnectWallet}>
                Connect Wallet
              </button>
            )}
          </div>
        ) : (
          <span>Looking for Web3...</span>
        )}

        <div className="balance-view is-size-2 mb-4 my-4">
          Current Balance: <strong>{balance}</strong> ETH
        </div>

        {!canConnectToContract ? (
          <i className="is-block mb-4">Please connect to Ganache</i>
        ) : null}

        <button
          className="button is-link mr-2"
          onClick={addFunds}
          disabled={!canConnectToContract}
        >
          Donate 1 ETH
        </button>

        <button
          className="button is-primary"
          onClick={withdrawFunds}
          disabled={!canConnectToContract}
        >
          Withdraw 0.1 ETH
        </button>
      </div>
    </HomePageWrapper>
  );
};

export default Home;
