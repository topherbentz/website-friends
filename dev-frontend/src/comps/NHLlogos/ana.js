import React from "react";
import PropTypes from "prop-types";

const ANA = props => {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      version="1.1"
      viewBox="0 0 332.02633 186.63998"
    >
      <path
        d="M200.64586,0C111.57484,0,40.68,48.78449,40.68,48.78449s87.41865-7.08162,87.41865,11.01585c0,15.8943-69.24249,41.70286-69.24249,41.70286s54.60715,1.495,54.60715,14.63535C113.46326,138.4063,0,168.38515,0,168.38515S39.73575,186.64,101.81794,186.64c111.26009,0,229.20839-63.10508,229.20839-112.20431C331.02633,29.192,264.69516,0,200.64586,0Z"
        fill="#a4a9ad"
      />
      <path
        d="M200.64586,3.93423c-64.28536,0-119.522,26.202-144.0716,39.89312,0,0,75.45858-5.35056,75.45858,15.973,0,13.29771-32.41808,29.27069-55.07926,38.79154,18.56957,1.80974,40.5226,6.29478,40.5226,17.54667,0,20.77274-69.55723,42.96181-104.5719,52.79739,15.81562,5.27188,47.36816,13.69113,88.91366,13.69113,111.81089,0,225.27417-62.94772,225.27417-108.1914C327.0921,30.92307,261.46911,3.93423,200.64586,3.93423Z"
        fill="#111"
      />
      <path
        d="M81.04519,168.07038l-13.14034,3.46212a294.8346,294.8346,0,0,0,30.21491,1.33764c132.58364,0,220.55308-80.65177,220.55308-93.47736a9.15745,9.15745,0,0,0-.39343-2.59659C271.30469,132.66229,177.98468,171.2178,81.04519,168.07038Z"
        fill="#f95602"
      />
      <path
        d="M202.29823,14.87135c-49.57133,0-103.47032,19.19906-103.47032,19.19906s55.47267-2.754,55.47267,20.458c0,21.63828-39.185,37.53258-39.185,37.53258s23.76277,5.50792,23.76277,19.27774c0,31.23781-77.111,50.67292-77.111,50.67292C223.62177,169.88011,316.07623,83.327,316.07623,67.354,316.07625,52.404,271.06862,14.87135,202.29823,14.87135Z"
        fill="#fff"
      />
      <path
        d="M202.29823,18.09747c-31.08043,0-64.128,7.7111-84.03521,13.29771,0,0,39.26364,1.57369,39.26364,23.13329,0,17.468-21.953,30.92307-33.8344,36.98178,7.78978,3.14739,18.41221,9.36347,18.41221,19.82854,0,23.29066-37.06047,39.81443-60.66586,47.99764,146.82556,0,231.49025-78.05518,231.49025-91.98236C312.92885,54.68583,269.41625,18.09747,202.29823,18.09747Z"
        fill="#b5985a"
      />
      <path
        d="M175.152,41.46681s43.35524,9.7569,62.79036,22.73986L153.35639,86.081,233.536,83.48442c-17.86141,13.06166-83.01231,44.29946-83.01231,44.29946s80.101-11.88138,130.69521-58.148C236.21132,29.192,175.152,41.46681,175.152,41.46681Z"
        fill="#fff"
      />
      <path
        d="M193.72161,43.0405s33.51966,8.57663,51.8532,22.50381L181.99762,81.98941l61.76744-2.0458c-17.31062,14.55666-68.1409,39.02759-68.1409,39.02759,26.75277-7.08162,69.00643-21.79565,100.559-49.25659C248.0927,46.18789,214.10093,42.5684,193.72161,43.0405Z"
        fill="#111"
      />
    </svg>
  );
};

ANA.Primary_Color =  '#F47A38'
ANA.Secondary_Color =  '#B9975B'
ANA.Font_Color =  'White'
ANA.City =  'Anaheim'
ANA.Name =  'Ducks'

ANA.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ANA.defaultProps = {
  size: "100"
};

export default ANA;
