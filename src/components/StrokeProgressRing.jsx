import React, {useState, useEffect} from 'react'

export default function StrokeProgressRing(props) {
  const [radius, setRadius] = useState(props.radius);
  const [stroke, setStroke] = useState(props.stroke);
  const [progress, setProgress] = useState(props.progress);
  const [percent, setPercent] = useState(props.text);
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      viewBox={'0 0 ' + radius * 2 + ' ' + radius * 2}
      >
     
      <image 
        className="progress-ring__circle"
        href={"roadmap/stroke_back_" + progress +".png"} 
        height={radius * 2 - stroke * 2} 
        width={radius * 2 - stroke * 2}
        style={{transform: 'translate(10px, 10px)'}}
      />
      <circle 
        stroke="#f7941d"
        fill="transparent"
        strokeWidth={ 1 }
        r= { normalizedRadius - 10}
        cx={ radius }
        cy={ radius }
        style={{ transition: "all 0.5s"}}
       
      />
      <text
        x={ radius } 
        y={ radius } 
        alignmentBaseline="middle" 
        fontSize="1.6rem" 
        strokeWidth="0" 
        fill="#f7941d" 
        textAnchor="middle"
      >
        {percent}
      </text>
    </svg>
  )
}
