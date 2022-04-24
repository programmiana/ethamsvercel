import { useEffect, useState } from "react";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { AbiItem } from "web3-utils";
import NFTContractBuild from "../../truffle/build/contracts/NFT.json";
import ColorNFTBuild from "../../truffle/build/contracts/Color.json";
// needed to satisfy ts

function colorHexToString(hexStr) {
  return "#" + hexStr.substring(2);
}

function colorStringToBytes(str) {
  if (str.length !== 7 || str.charAt(0) !== "#") {
    throw new Error("invalid color string");
  }
  const hexStr = "0x" + str.substring(1);
  return Web3.utils.hexToBytes(hexStr);
}

export function useLoadBlockchainData() {
  const [networkId, setNetworkId] = useState<number>();
  const [selectedAccount, setSelectedAccount] = useState<string>();
  const [activeContract, setActiveContract] = useState<Contract>();
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

  useEffect(() => {
    const fetchData = async () => {
      const response = await web3.eth.net.getId();
      setNetworkId(response);
    };

    fetchData().catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await web3.eth.getAccounts();

      setSelectedAccount(response[0]);
    };

    fetchData().catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (!networkId) return;

    console.log(ColorNFTBuild);

    const fetchData = async () => {
      const contract = new web3.eth.Contract(
        ColorNFTBuild.abi as unknown as AbiItem,
        "0x153cd07cbf55f48ee39898968bc5de3b62e8c0a3"
      );
      setActiveContract(contract);
      const colorstr = colorHexToString("#FF00FF");

      const tx = await contract.methods
        .mint(colorStringToBytes(colorstr))
        .send({ from: selectedAccount })
        .once("receipt", (receipt) => {
          console.log("transaction receipt: ", receipt);

          console.log(tx);
        });
    };

    fetchData().catch((e) => console.log(e));
  }, [networkId, selectedAccount]);

  // useEffect(() => {
  //   if (!activeContract) return;
  //   console.log(activeContract);

  //   const fetchData = async () => {
  //     const tx = await activeContract.methods
  //       .mint(2)
  //       .then((bla) => console.log(bla));

  //     console.log(tx);
  //   };

  //   fetchData().catch((e) => console.log(e));
  // }, [activeContract]);

  const mintToken = () => {
    // return activeContract.methods.totalSupply().call();
  };

  return {
    web3,
    accounts: selectedAccount,
    toDoList: activeContract,
    networkId,
    mintToken,
  };
}
