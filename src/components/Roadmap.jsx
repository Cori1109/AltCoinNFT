import { React, useRef } from "react";
import { Container } from "react-bootstrap";
import RoadmapStep from "./RoadmapStep";
export default function Roadmap() {
  return (
    <div id="roadmap">
      <Container>
        <h2
          className="mt-5 text-orange font-xxl"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          ROADMAP
        </h2>
        <span className="white-divider"></span>
        <RoadmapStep
          progress={25}
          percent="25%"
          title="Phase 1: NFT Minting Platform & Site, "
          subTitle="April 4, 2022"
          detail="Smart contract
For minting NFT on MATIC
Website
1 homepage/salespage for NFT minting. Fully designed and ready for pre-sale traffic
NFT Art (Provided by client)
NFT Metadata
10,000 NFT collection
Must allow proportion of ownership based on how many NFT’s have been minted
"
        />
        <RoadmapStep
          progress={50}
          percent="50%"
          title="Phase 2 Minting-Staking Contracts, "
          subTitle="April 11, 2022"
          detail="Choose coin to purchase for the day based on 3-month historical averages
Out of: AVAX, FTM, SOL, MATIC, NU
Bridge to native chain of that coin (in MATIC/ETH)
Choose defi protocol for the day
Swap WMATIC/WETH to 50% the coin chosen + 50% what pair was chosen for the protocol (Ex. AVAX-USDC)
"
        />
        <RoadmapStep
          progress={75}
          percent="75%"
          title="Phase 3 Smart Contracts, "
          subTitle="April 18, 2022"
          detail="Monthly reward
Calculate to Admin Area, Update NFT owner dashboard
When rewards are claimed it triggers
Day 1: All of that day’s ‘claims’ are sold in one transaction from the farming accounts
Day 2: All of yesterday’s ‘claims’ are bridged to MATIC blockchain
Day 3: Rewards are withdrawable when users are logged in
Monthly rebalance
The highest yield protocol used on each chain, gets 30% of the other protocols balances moved to it (note: this can be overridden in both % and protocol by team admin)
Website
1 Page that the admin can make TX to bridge it over as well as claim/distribute monthly reward to the users(admin page)
Allow overriding the purchase and protocol selection for the day
1 Page that displays all the histories of selected coin/defi per day
This will be the user experiencing frontend so that everyone can see the activity list. ** Can front-end easily allow NFT holders (of some levels) to vote on things
1 Page that displays all the histories of monthly reward distribution
"
        />
        <RoadmapStep
          progress={100}
          percent="100%"
          title="Marketplace, "
          subTitle="April 28, 2022"
          detail="There will be a marketplace smart contract and marketplace webpage.
Display all NFT Collection
List NFT
Show how many unclaimed rewards that NFT has
Buy NFT
Transfer NFT
"
        />
      </Container>
    </div>
  );
}
