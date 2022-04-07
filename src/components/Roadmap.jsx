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
          progress={10}
          percent="10%"
          title="Phase 1: "
          subTitle="April 4, 2022"
          detail="
                      <p><img src='images/checkmark.png' width='20px' /> Website</p>
<p><img src='images/checkmark.png' width='20px' /> Socials</p>"
        />
        <RoadmapStep
          progress={26}
          percent="26%"
          title="Phase 2: "
          subTitle="April 11, 2022"
          detail="<p><img src='images/checkmark.png' width='20px' /> NFT Smart Contracts</p>
<p><img src='images/checkmark.png' width='20px' /> Smart Contract Audit</p>"
        />
        <RoadmapStep
          progress={42}
          percent="42%"
          title="Phase 3: "
          subTitle="April 18, 2022"
          detail="<p><img src='images/checkmark.png' width='20px' /> Pre-Launch</p>
<p><img src='images/checkmark.png' width='20px' /> Launch</p>"
        />
        <RoadmapStep
          progress={62}
          percent="62%"
          title="PHASE 4: "
          subTitle="April 28, 2022"
          detail="<p><img src='images/checkmark.png' width='20px' /> Marketing</p>
<p><img src='images/checkmark.png' width='20px' /> Media</p>
<p><img src='images/checkmark.png' width='20px' /> Organic</p>
<p><img src='images/checkmark.png' width='20px' /> Referrals</p>"
        />
        <RoadmapStep
          progress={78}
          percent="78%"
          title="PHASE 5: "
          subTitle="May 8, 2022"
          detail="<p><img src='images/checkmark.png' width='20px' /> Voting</P>
<p><img src='images/checkmark.png' width='20px' /> What new coins do we add to the protocol</p>
<p><img src='images/checkmark.png' width='20px' /> Upgrade NFT Smart Contracts</p>
<p><img src='images/checkmark.png' width='20px' /> Increase # of Protocol Options</p>
<p><img src='images/checkmark.png' width='20px' /> Rebalancing</p>"
        />
        <RoadmapStep
          progress={90}
          percent="90%"
          title="PHASE 6: "
          subTitle="May 18, 2022"
          detail="<p><img src='images/checkmark.png' width='20px' /> DaaP Development</p>
<p><img src='images/checkmark.png' width='20px' /> ALCS Token</p>
<p><img src='images/checkmark.png' width='20px' /> Bluechip Nodes</p>
<p><img src='images/checkmark.png' width='20px' /> Staking Pairs</p>"
        />
        <RoadmapStep
          progress={100}
          percent="100%"
          title="PHASE 7: "
          subTitle="May 28, 2022"
          detail="<p><img src='images/checkmark.png' width='20px' /> Marketing</p>
<p><img src='images/checkmark.png' width='20px' /> Paid Media</p>
<p><img src='images/checkmark.png' width='20px' /> Content Marketing</p>"
        />
      </Container>
    </div>
  );
}
