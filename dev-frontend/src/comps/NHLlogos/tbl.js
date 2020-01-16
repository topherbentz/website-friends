import React from "react";
import PropTypes from "prop-types";

const TBL = props => {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      version="1.1"
      viewBox="0 0 218.96601 204.34766"
    >
      <path
        d="M218.966,92.43563c0-22.21458-13.82341-44.12-38.29035-57.59009l-9.407,7.46375c16.73823,10.55524,26.58684,26.27769,26.58684,44.16418,0,41.691-51.53959,79.49553-108.8647,79.49553a116.40421,116.40421,0,0,1-17.26819-1.28077L52.37874,179.04159a125.31614,125.31614,0,0,0,40.10108,6.31548C160.581,185.35707,218.966,139.38215,218.966,92.43563Z"
        fill="#002868"
      />
      <path
        d="M9.31864,108.11392c0-43.1484,53.96862-79.49552,108.90888-79.49552h1.14827L66.24627,88.01921l30.51744-4.8139L36.61211,141.4137l24.42279-4.41642-17.04737,19.4764C23.27452,146.66924,9.31864,129.75436,9.31864,108.11392Zm123.04141-.17666-35.0222,6.84545L175.02264,50.9213l-36.17046,4.85806L209.16156,0,127.32533,21.55212c-1.05994,0-2.164-.04416-3.26815-.04416C56.97179,21.508,0,67.08539,0,115.22434c0,23.58367,12.67512,42.35344,32.41651,54.49859L2.164,204.34766Z"
        fill="#002868"
      />
    </svg>
  );
};

TBL.Primary_Color =  '#002868'
TBL.Secondary_Color =  'White'
TBL.Font_Color =  'Black'
TBL.City =  'Tampa Bay'
TBL.Name =  'Lightning'

TBL.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TBL.defaultProps = {
  size: "100"
};

export default TBL;
