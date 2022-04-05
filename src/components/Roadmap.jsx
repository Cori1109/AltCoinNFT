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
          title="Phase 1: The beginning, "
          subTitle="quarter 1 of 2022"
          detail="Start:
Whitelisting and marketing starts.
After Whitelist is full:
Announcement of presale/public sale date and price.
24h after sell out reveal of metadata
You have a chance to mint one of the 7 Founde NFTs and win 2.5 ETH!!
Paying 2.5 ETH to each holder who minted one of the founders NFTs (7 Founder NFTS), announcement on discord with the transaction hashes of payout.

Giveaways:
Daily holder giveaways for at least 30 days; Prices; NFTs , ETH and Whitelist spots for our Coin IDO.
Winners will be excluded from giveaways for 1 Week to give everyone a chance to win.
announcement on discord with the transaction hashes of giveaway payout.

Creation of community crypto portfolio 
10% of the minting revenue will be used to set up a community portfolio. We will open a new metamask wallet and post the address into our discord server.
The money will be used to buy either coins or other NFTs.
There are 2 pre-sets; 15% of portfolio will be Bitcoin and 15% Ethereum.
Holders can propose the coins they want to allocate but must also provide information where they want to stake the coins.
The staking rewards will be distrubited to random holders!

Land in Metaverse
We will acquire Land in the Sandbox Metaverse and start building our headquarter."
        />
        <RoadmapStep
          progress={50}
          percent="50%"
          title="Phase 2 Decentralized Application, "
          subTitle="quarter 2 of 2022"
          detail="Launch App, Staking and C3S Token
Our Dapp will go live and with it the NFT staking.
You earn 2.5 C3ST/Day for each NFT staked for the next 5 Years.
The Coin IDO will take place 14 days after Staking feature goes live.

Coin Staking
After the IDO the Coin Staking feature will be released in our App. The coins staking must be unlocked by burning C3ST. You can stake your C3ST on our platform for additional rewards. Staking rewards will be paid out weekly.

Buyback burn
We will periodically buy C3ST and burn them, transaction hash will be posted in discord server.

Raffles
The Raffle Feature will be released in our application.
Holders can use their C3ST to participate in raffles and win prices such as holder event and tournament entries, Staking rewards Airdrops, specials like a rolex etc.
All coins used in the raffles will be burned.

In-App Shop
Our own shop will be launched on the C3S Decentralized Application. Holders will be able to use their C3ST to buy products in our shop such as;
-Netflix and Disney+ subscriptions
-PSN or XBOX Cards
-Vouchers for Weekend trips, hotels and restaurants.
-C3S Merchandise
And many more...
The products will be continuously updated and the community can vote which products will be added to the shop. All products will be discounted for our holders. C3ST used will be burned.

DAO
As the Crypto Staking Society, we work together and take part in all our decisions. Each holder has governance rights, which means you have the right to vote. The voting will take place on Dapp and you need to have the holder role to access the voting chat in discord. There will also be 2 additional chats for pro and contra where the holders can discuss the subject of voting."
        />
        <RoadmapStep
          progress={75}
          percent="75%"
          title="Phase 3 Crypto Staking Society Lifestyle, "
          subTitle="quarter 2 and 3 of 2022"
          detail="Tournaments/Events
We are going to organize tournaments/events for our holders where they can win NFTs and Ethereum.
Tournament entries can only be won through raffles. We will hold virtual and live tournaments.

Virtual tournaments/events:
Call of duty, Fortnite, FIFA, Pokemon display openings and other voted by community.
All virtual tournaments/events are going to be livestreamed on Twitch.

Live tournaments/events:
Poker evenings and sports tournaments (Soccer, Basketball etc.)
Holder Parties
Holders can win entries to exclusive parties through participating in raffles. The parties will be held in Switzerland first but later also take place internationally. They will be all inclusive (entry, food and drinks).

Collabs and second collection release:
We will try to do collabs with different companies and offer the products in our Shop.
The second C3S NFT collection will be launched. Holders can use their C3ST to breed our second collection. The second generation NFTs will not be getting C3ST but grant access to our shop and all the other app features, like coin staking."
        />
        <RoadmapStep
          progress={100}
          percent="100%"
          title="Phase 4 into the Metaverse, "
          subTitle="quarter 3 and 4 of 2022"
          detail="Genesis(first) Collection C3S NFT Holders can mint a metaverse avatar of their C3S NFT for free and receive other metaverse NFT airdrops.
4561 additional metaverse avatar NFTs will be available for breeding with C3ST by first and second C3S NFT collection holders. We will offer metaverse products in our shop such as Adidas Originals Into The Metaverse NFTs and other.
We will host events for our holders in the metaverse and try do to collabs with other metaverse projects."
        />
      </Container>
    </div>
  );
}
