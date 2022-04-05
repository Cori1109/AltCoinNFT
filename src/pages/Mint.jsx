import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import toast, { Toast } from "react-hot-toast";
import web3 from "web3";
import ContractAbi from "../config/SteakInPool.json";
import { Button, Card } from "react-bootstrap";
import NFTCard from "../components/NFTCard";
require("dotenv").config();

// IMPORTANT NOTE: In this example, the URI is used as a unique key to identify
// a token associated with an asset. This is fine for demonstration, but in a
// production project you should have a unique key associated with the asset
// and store that in the contract along with the URI.
export default function Mint(props) {
  const [balance, setBalance] = useState([]);
  const [balMatic, setBalMatic] = useState([]);
  const [sum, setSum] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [purLimit, setPurLimit] = useState(10);

  const [cntStarter, setCntStarter] = useState(0);
  const [cntBronze, setCntBronze] = useState(0);
  const [cntSilver, setCntSilver] = useState(0);
  const [cntGold, setCntGold] = useState(0);
  const [cntPlatinum, setCntPlatinum] = useState(0);
  const MAX_ELEMENTS = 100000;
  const [mintedCNT, setMintedCNT] = useState([0, 0, 0, 0, 0]);

  const NFT = {
    starter: {
      name: "Starter",
      color: "dimgray",
      price: 0.01,
      total: 3800,
    },
    bronze: {
      name: "Bronze",
      color: "bisque",
      price: 0.02,
      total: 2500,
    },
    silver: {
      name: "Silver",
      color: "silver",
      price: 0.08,
      total: 1900,
    },
    gold: {
      name: "Gold",
      color: "gold",
      price: 0.16,
      total: 1000,
    },
    platinum: {
      name: "Platinum",
      color: "dodgerblue",
      price: 0.32,
      total: 800,
    },
  };

  useEffect(async () => {
    await getParams();
  });

  const getParams = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const SIPContract = new ethers.Contract(
      process.env.REACT_APP_NFT_ADDRESS,
      ContractAbi,
      provider.getSigner()
    );
    provider.getBalance(props.address).then((balance) => {
      const balanceInMatic = ethers.utils.formatEther(balance);
      setBalMatic(balanceInMatic);
    });

    let pauseVal = await SIPContract.MINTING_PAUSED();
    setIsPaused(pauseVal);

    let _purLimit = web3.utils.toDecimal(await SIPContract.maxItemsPerWallet());
    setPurLimit(_purLimit);
    let totalSupply = web3.utils.toDecimal(await SIPContract.totalSupply());
    let _balance = web3.utils.toDecimal(
      await SIPContract.balanceOf(props.address)
    );
    setBalance(_balance);
    let _mintedCNT = await SIPContract.mintedCnt();
    let _tmp = [];
    for (let i = 0; i < _mintedCNT.length; i++) {
      _tmp[i] = web3.utils.toDecimal(_mintedCNT[i]);
    }
    setMintedCNT(_tmp);

    if (totalSupply === MAX_ELEMENTS) {
      console.log("Sold Out");
    }
  };

  const purchase = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const SIPContract = new ethers.Contract(
      process.env.REACT_APP_NFT_ADDRESS,
      ContractAbi,
      provider.getSigner()
    );

    const totalCnt = cntStarter + cntBronze + cntSilver + cntGold + cntPlatinum;

    if (balMatic < sum) {
      toast.error("Payment amount is not sufficient!");
    } else if (totalCnt > purLimit - balance) {
      toast.error("Purchase would exceed max supply!");
    } else {
      let price = ethers.utils.parseEther(sum.toString());
      console.log("sum:", sum, price);

      try {
        await SIPContract.mint(
          [cntStarter, cntBronze, cntSilver, cntGold, cntPlatinum],
          { value: price }
        )
          .then((tx) => {
            return tx.wait().then(
              (receipt) => {
                // This is entered if the transaction receipt indicates success
                console.log("receipt", receipt);
                toast.success("Mint Success!");
                return true;
              },
              (error) => {
                console.log("error", error);
                toast.error("Mint Fail!");
              }
            );
          })
          .catch((error) => {
            console.log(error);
            if (error.message.indexOf("signature")) {
              toast.error("You canceled transaction!");
            } else {
              toast.error("Transaction Error!");
            }
          });
      } catch (error) {
        console.log("Minting error", error);
      }
    }
  };

  // Handle contract unavailable.
  // This is an extra precaution since the user shouldn't be able to get to this page without connecting.
  // if (!props.contract)
  //   return <div className="page error">Contract Not Available</div>;

  // // Set up the list of available token URIs when the component mounts.
  // if (!assetURIs.length) CheckAssetURIs();

  const handleChangeStarter = (cntMint) => {
    setCntStarter(cntMint);
  };

  const handleChangeBronze = (cntMint) => {
    setCntBronze(cntMint);
  };

  const handleChangeSilver = (cntMint) => {
    setCntSilver(cntMint);
  };

  const handleChangeGold = (cntMint) => {
    setCntGold(cntMint);
  };

  const handleChangePlatinum = (cntMint) => {
    setCntPlatinum(cntMint);
  };

  useEffect(() => {
    let total =
      NFT["starter"].price * cntStarter +
      NFT["bronze"].price * cntBronze +
      NFT["silver"].price * cntSilver +
      NFT["gold"].price * cntGold +
      NFT["platinum"].price * cntPlatinum;
    setSum(total);
  }, [cntStarter, cntBronze, cntSilver, cntGold, cntPlatinum]);

  // Display the minting gallery
  return (
    <div className="page mint">
      {isPaused ? (
        <div>
          <h1>Minting has been paused!</h1>
        </div>
      ) : (
        <div>
          <div className="Card_box">
            <NFTCard
              name={NFT["starter"].name}
              unit={NFT["starter"].price}
              color={NFT["starter"].color}
              minted={mintedCNT[0]}
              total={NFT["starter"].total}
              image={"images/1.jpg"}
              doMint={(cntMint) => handleChangeStarter(cntMint)}
            ></NFTCard>

            <NFTCard
              name={NFT["bronze"].name}
              unit={NFT["bronze"].price}
              color={NFT["bronze"].color}
              minted={mintedCNT[1]}
              total={NFT["bronze"].total}
              image={"images/2.jpg"}
              doMint={(cntMint) => handleChangeBronze(cntMint)}
            ></NFTCard>

            <NFTCard
              name={NFT["silver"].name}
              unit={NFT["silver"].price}
              color={NFT["silver"].color}
              minted={mintedCNT[2]}
              total={NFT["silver"].total}
              image={"images/3.jpg"}
              doMint={(cntMint) => handleChangeSilver(cntMint)}
            ></NFTCard>

            <NFTCard
              name={NFT["gold"].name}
              unit={NFT["gold"].price}
              color={NFT["gold"].color}
              minted={mintedCNT[3]}
              total={NFT["gold"].total}
              image={"images/4.jpg"}
              doMint={(cntMint) => handleChangeGold(cntMint)}
            ></NFTCard>

            <NFTCard
              name={NFT["platinum"].name}
              unit={NFT["platinum"].price}
              color={NFT["platinum"].color}
              minted={mintedCNT[4]}
              total={NFT["platinum"].total}
              image={"images/5.jpg"}
              doMint={(cntMint) => handleChangePlatinum(cntMint)}
            ></NFTCard>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "black" }}>Total : </Card.Title>
                <Card.Text style={{ color: "black" }}>
                  {parseFloat(parseInt(sum * 100) / 100)} MATIC
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div style={{ marginTop: 20 }}>
            {sum !== 0 ? (
              <Button onClick={purchase}>PURCHASE</Button>
            ) : (
              <Button disabled>PURCHASE</Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
