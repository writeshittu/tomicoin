import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();
const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(0);
  const [transactions, setTransactions] = useState([]);
  
  const [formData, setformData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions=async()=>{
    try {
      !ethereum && alert("Please install metamask");
      const transactionContract = getEthereumContract();
      const availableTransaction = await transactionContract.getAllTransactions()

      const structuredTransactions =availableTransaction.map((transaction)=>({
        addressTo: transaction.receiver,
        addressFrom: transaction.sender,
        timestamp:new Date(transaction.timestamp.toNumber* 1000).toLocaleString(),
        message:transaction.message,
        keyword:transaction.keyword,
        amount: parseInt(transaction.amount._hex) * (10**18)
      }))
        setTransactions(structuredTransactions)
      console.log(availableTransaction);
    } catch (error) {
      console.log(error);
    }
  }
  const isWalletConnected = async () => {
    try {
      !ethereum && alert("Please install metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
      } else {
        console.log("No account found!");
      }
      console.log(accounts);
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object");
    }
  };

  const isTransactionExist = async()=>{
   try {
    const transactionContract = getEthereumContract();
    const transactionCount = await transactionContract.getTransactionCount();
  window.localStorage.setItem('transactionCount',transactionCount) 
  } catch (error) {
    console.log(error);
    throw new Error("No Ethereum object");
   } 
  }

  const connectWallet = async () => {
    try {
      !ethereum && alert("Please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object");
    }
  };

  const sendTransaction = async () => {
    try {
      !ethereum && alert("Please install metamask");
      // const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      const { addressTo, keyword, amount, message } = formData;
      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", //21000 gwei
            value: parsedAmount._hex,
          },
        ],
      });
      const transactionHash = transactionContract.addToBlock(
        addressTo,
        parsedAmount,
        message,
        keyword
      );
      setLoading(true);
      console.log(`loading -${transactionHash.hash}`);

      await transactionHash.wait();
      setLoading(false);
      console.log(`success -${transactionHash.hash}`);
      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
      setLoading(true);
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object");
    }
  };

  useEffect(() => {
    isWalletConnected();
    isTransactionExist()
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        sendTransaction,
        currentAccount,
        formData,
        setformData,
        handleChange,
        transactions,
        isLoading
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
