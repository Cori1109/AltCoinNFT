import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import toast, { Toast } from "react-hot-toast";
import web3 from "web3";
import ContractAbi from "../contract/AltcoinNFT.json";
import { Button, Card } from "react-bootstrap";
import NFTCard from "../components/NFTCard";
require("dotenv").config();

// IMPORTANT NOTE: In this example, the URI is used as a unique key to identify
// a token associated with an asset. This is fine for demonstration, but in a
// production project you should have a unique key associated with the asset
// and store that in the contract along with the URI.
export default function Mint(props) {
  const [assetURIs, setAssetURIs] = useState([]);
  const [sum, setSum] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [cntStarter, setCntStarter] = useState(0);
  const [cntBronze, setCntBronze] = useState(0);
  const [cntSilver, setCntSilver] = useState(0);
  const [cntGold, setCntGold] = useState(0);
  const [cntPlatinum, setCntPlatinum] = useState(0);
  const MAX_ELEMENTS = 100000;
  const LEVEL_STARTID = [0, 3800, 6300, 8200, 9200];
  let mintedCNT = [0, 0, 0, 0, 0];

  const NFT = {
    starter: {
      name: "Starter",
      price: 0.01,
      total: 3800,
    },
    bronze: {
      name: "Bronze",
      price: 0.02,
      total: 2500,
    },
    silver: {
      name: "Silver",
      price: 0.08,
      total: 1900,
    },
    gold: {
      name: "Gold",
      price: 0.16,
      total: 1000,
    },
    platinum: {
      name: "Platinum",
      price: 0.32,
      total: 800,
    },
  };

  useEffect(async () => {
    await getParams();
  });

  const getParams = async () => {
    console.log("getParams:!!!");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const SIPContract = new ethers.Contract(
      process.env.REACT_APP_NFT_ADDRESS,
      ContractAbi,
      provider.getSigner()
    );

    let pauseVal = await SIPContract.MINTING_PAUSED();
    console.log("Ispaused:", pauseVal);
    setIsPaused(pauseVal);

    let totalSupply = web3.utils.toDecimal(await SIPContract.totalSupply());
    let claimedPerWallet = web3.utils.toDecimal(
      await SIPContract._allowListClaimed(props.address)
    );
    console.log("claimed Per wallet:", claimedPerWallet);
    for (let i = 0; i < 5; i++) {
      mintedCNT[i] =
        web3.utils.toDecimal(await SIPContract._tokenIdTracker(i)) -
        LEVEL_STARTID[i];
    }
    console.log("Minted per Level:", mintedCNT);

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
    let price = ethers.utils.parseEther(sum.toString());

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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <NFTCard
              name={NFT["starter"].name}
              unit={NFT["starter"].price}
              minted={mintedCNT[0]}
              total={NFT["starter"].total}
              image={"/token_data/exobit_1.png"}
              doMint={(cntMint) => handleChangeStarter(cntMint)}
            ></NFTCard>

            <NFTCard
              name={NFT["bronze"].name}
              unit={NFT["bronze"].price}
              minted={mintedCNT[1]}
              total={NFT["bronze"].total}
              image={"/token_data/exobit_2.png"}
              doMint={(cntMint) => handleChangeBronze(cntMint)}
            ></NFTCard>

            <NFTCard
              name={NFT["silver"].name}
              unit={NFT["silver"].price}
              minted={mintedCNT[2]}
              total={NFT["silver"].total}
              image={"/token_data/exobit_3.png"}
              doMint={(cntMint) => handleChangeSilver(cntMint)}
            ></NFTCard>

            <NFTCard
              name={NFT["gold"].name}
              unit={NFT["gold"].price}
              minted={mintedCNT[3]}
              total={NFT["gold"].total}
              image={"/token_data/exobit_4.png"}
              doMint={(cntMint) => handleChangeGold(cntMint)}
            ></NFTCard>

            <NFTCard
              name={NFT["platinum"].name}
              unit={NFT["platinum"].price}
              minted={mintedCNT[4]}
              total={NFT["platinum"].total}
              image={"/token_data/exobit_1.png"}
              doMint={(cntMint) => handleChangePlatinum(cntMint)}
            ></NFTCard>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "black" }}>Total : </Card.Title>
                <Card.Text style={{ color: "black" }}>{sum} MATIC</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div style={{ marginTop: 20 }}>
            <Button onClick={purchase}>PURCHASE</Button>
          </div>
        </div>
      )}
    </div>
  );
}
