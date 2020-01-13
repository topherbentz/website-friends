import React from "react";
import PropTypes from "prop-types";

const VAN = props => {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      version="1.1"
      viewBox="0 0 250.96972 228.1381"
    >
      <path
        d="M123.40746,162.68862l37.91312-18.93125c26.01781,7.289,33.71179,17.15961,33.71179,17.15961l14.88178-16.80528c.8099-.86051,3.23957-3.89761,3.23957-9.46563,0-5.92235-6.22606-10.52861-10.57922-13.66694-7.39027-19.43743-48.39111-25.10669-51.4282-31.83893-.96175-2.37906-6.98533-22.57577-6.98533-22.57577-3.54328-10.478-14.07189-10.478-18.02012-10.478a116.05207,116.05207,0,0,0-12.55335,1.3667c0,14.57807-2.02473,32.3451-4.04947,35.6353a147.74246,147.74246,0,0,1-16.09663,6.98533L72.73852,86.05249l5.41616,18.88063C43.228,124.11747,34.72417,157.62679,34.72417,157.62679s8.95944,70.5113,97.44026,70.5113c46.77133,0,73.75089-22.57576,73.75089-22.57576l-15.08426-33.66119a125.7,125.7,0,0,1-52.44058,11.94593c-27.08079,0-37.66-12.65458-41.55763-19.99423C119.76294,164.51089,123.40746,162.68862,123.40746,162.68862Z"
        fill="#99999a"
      />
      <path
        d="M18.98187,28.24638l-5.31492,3.442L25.866,59.78159,5.36554,37.00335,0,40.496l.05062.10124L29.91543,71.87937l5.31492-3.49266L19.03249,28.34762Zm18.172,1.9235,11.136,15.94477L42.67124,48.848ZM44.291,54.163l7.13718-3.49266,4.65688,6.68162,5.66925-2.73339L35.939,19.79312l-6.02358,2.88524,10.98418,41.912v.05062l5.71987-2.73339ZM202.87821,14.17449v-.10124l-6.02358-1.97411L182.83336,39.33179,187.49025,9.062l-6.12481-1.97411v.10124l-5.41617,42.87372,6.0742,1.97411ZM236.59,53.30245l-6.73225-4.40379,7.4409-11.23727,6.68163,4.40379Zm12.50273-14.42622-14.12253-9.31377L211.534,65.09651l5.26431,3.49266L227.32688,52.695l1.721,1.1136-4.91,19.63991,5.568,3.64452.15185-.15186,4.60626-19.79176,1.8729,1.21484c2.02473,1.26546,3.847.91113,5.21368-1.16422l8.60507-12.9583C251.52243,42.16642,251.16809,40.29354,249.09275,38.87622ZM199.84112,53.15059,205.561,41.05281l8.65573,4.10008,2.37905-4.9606L207.94,36.09218,213.255,24.85491l10.073,4.80874,2.42968-5.11248-15.84353-7.49151L191.69157,55.479l15.94476,7.59275,2.37907-5.06183Zm-50.46647-9.01006,13.31262,2.37906c2.4803.45557,4.10008-.65806,4.55564-3.13836l6.78285-38.065-6.27667-1.1136L161.27,40.69848l-8.45326-1.46793,6.47915-36.54642-6.22606-1.1136-6.78286,38.065C145.83137,42.1158,146.89435,43.68494,149.37465,44.14053ZM125.28034,5.51875l8.80759.15185-.60742,31.63645-8.757-.15186Zm-3.189,37.05261,13.8188.25309c2.42968.05065,3.847-1.316,3.89761-3.847l.60742-34.72419c.05062-2.53092-1.31607-3.94823-3.79637-3.99885L122.8.00136c-2.42968-.05062-3.79637,1.31608-3.79637,3.847l-.658,34.72414C118.34562,41.1034,119.61108,42.52074,122.09138,42.57136Zm-30.47222-.75928c.35433,2.4803,1.82226,3.64452,4.25194,3.34081l13.16076-1.82226c2.4803-.30371,3.64453-1.87285,3.34081-4.35316l-1.41732-10.42739-6.32729.86051,1.26546,8.85821-8.20017,1.1136L93.39079,8.04967l8.14955-1.1136,1.16422,8.352,6.27667-.91113-1.31607-9.87057c-.35433-2.4803-1.9235-3.64452-4.40379-3.34081L90.10061,2.98784c-2.37906.30371-3.54328,1.87288-3.189,4.40379Zm-19.63991,9.415L64.589,26.576,81.34363,48.44309l5.36554-1.61978L74.45955,6.02494,68.5372,7.8472l7.23842,24.14494L59.17281,10.6312,53.85789,12.251l12.199,40.79837Zm133.683,86.9623a5.2852,5.2852,0,0,0,.20248-2.32844,6.15894,6.15894,0,0,1-.20248,2.32844,5.71233,5.71233,0,0,0,.658-2.73339A5.71233,5.71233,0,0,1,205.66222,138.18936ZM121.99015,158.9935l38.92549-19.48806c26.42275,7.44089,34.0155,15.48921,34.0155,15.48921l12.04716-13.56571s2.22721-2.126,2.22721-6.78285c0-4.35318-6.52977-8.757-9.9718-11.23727-7.1878-19.53867-47.075-23.082-51.47883-32.29449-1.77165-3.69513-4.04947-12.50272-7.33965-23.23381-2.68276-7.79522-10.42737-7.79522-14.27436-7.79522a66.5869,66.5869,0,0,0-8.60511.75928c0,7.94707-1.51855,31.029-5.21368,35.02787-.91113,1.21484-7.694,3.94823-15.08426,6.78286l2.17659,1.46793-2.22721,2.22721L92.93525,110.653l-4.6569,14.57807-6.12482-3.13834,2.22721,5.41616-10.88294,1.77165,6.12482,2.17659L61.95682,145.02284l4.75812.35433-6.27667,11.38912c9.1113-4.1507,11.84469-4.91,11.84469-4.91l-2.63215-2.68276,18.37445-7.4409s-1.41731,3.69514-1.41731,10.83232a22.917,22.917,0,0,0,.50618,4.25193c2.27782,11.08541,13.11015,33.96489,51.27635,33.96489a130.60484,130.60484,0,0,0,48.94792-9.6681l9.92119,22.12021S171.343,221.20339,132.1644,221.20339c-80.17942,0-90.3537-63.0198-90.3537-63.0198,11.03479-29.56109,29.66233-42.51939,41.4564-47.98617l-3.69513-.35433-.30371-1.11361C47.98617,125.93973,38.723,157.87989,38.723,157.87989s9.51624,66.31,93.3908,66.31c42.92434,0,68.84092-19.893,68.84092-19.893L188.857,177.16545a132.05761,132.05761,0,0,1-50.46647,10.62985c-41.40579,0-47.48-28.1944-47.48-28.1944S114.49863,161.01822,121.99015,158.9935Z"
        fill="#001f5b"
      />
      <path
        d="M196.7534,125.28169c-6.68162-19.0831-43.228-20.4498-51.47883-32.44634-2.27782-3.34081-6.02358-24.70174-9.87057-27.6376-4.1507-3.23959-14.88178-1.77164-14.88178-1.77164,0,2.98648-.70865,29.20677-6.17544,34.62293-3.64453,3.08772-9.82,4.45441-17.15961,8.3014L92.93523,110.653l-4.65688,14.57807-6.0742-3.13834,2.17659,5.41616L73.4978,129.28054l6.17543,2.17659L61.95682,145.02284l4.80874.35433-6.32729,11.38912c9.1113-4.1507,11.84469-4.91,11.84469-4.91l-2.63215-2.68276,18.37445-7.4409s-1.3667,3.74576-1.3667,10.83232a19.24179,19.24179,0,0,0,.50618,4.25193c.70865-.75927,16.55219-16.50157,33.155-19.893l-25.66349,19.8424s21.10784.91113,26.32152-.60742c16.2991-7.54213,29.40924-14.67931,39.63414-19.79175,23.79061,6.32729,34.0155,14.52746,34.0155,14.52746l2.53092-2.784c-1.21484-.91113-9.97181-6.93471-27.182-12.604,5.11245-2.02473,11.33851-4.40379,12.95829-4.40379,3.79637,0,11.5916,4.9606,20.04485,10.37676l1.87288-2.126a3.13391,3.13391,0,0,0,.8099-1.16423,5.71233,5.71233,0,0,0,.658-2.73339C206.32026,131.45713,201.1572,128.8756,196.7534,125.28169Z"
        fill="#071c2c"
      />
      <path
        d="M111.05659,104.022,94.5044,113.28515,98.807,123.61129ZM91.771,137.98689l1.67041-12.30025L70.56193,141.17584Zm12.75582-15.53982-9.87057,5.51739,19.74115,2.68276Z"
        fill="#99999a"
      />
      <path
        d="M98.45262,120.21986l9.06068-12.30025L96.9847,113.842Zm12.45211,8.80759-7.54213-4.40379-5.36554,2.83463ZM76.13,139.04988l14.07189-2.22721,1.46793-8.352Z"
        fill="#001f5b"
      />
      <path
        d="M75.97809,91.06371l5.82111,17.00776,10.2249,2.53092,4.10008-5.61864Zm62.41238,102.95765c-43.9367,0-54.9715-30.1179-54.9715-41.4564,0-2.53092.20247-4.60627.35433-6.32729l-10.073,3.29019,1.26546,2.88524-7.84584,2.88524-6.83347,4.45441,13.8188,2.53092-2.83463,9.87057,5.87172-1.721,5.71987,14.42623,6.78286-.86052,2.27782,10.12366s12.80643,8.85821,34.47107,10.83232c28.70059,2.53092,54.31346-7.1878,54.31346-7.1878s-30.57347,11.94593-58.36291,9.01005c-21.25969-2.27782-35.0785-10.88293-35.0785-10.88293l-.20247-9.16192-8.40264.10123-3.89761-14.02127-7.44089,3.49266,3.23957-12.55335-14.27436-1.77165,2.88524-8.757,3.442-6.83348-4.60627.10123L77.19293,132.267l-8.352-3.29019,13.61633-2.63215-4.75812-9.56687,8.40264,4.80874,3.29019-10.42737c-10.02242,3.49266-31.73769,14.62869-44.24041,47.32812,1.51855,7.49152,14.62869,59.47652,86.96227,59.47652,31.23151,0,54.00974-11.79406,61.04569-15.94476l-7.54213-16.704A136.28273,136.28273,0,0,1,138.39047,194.02136Z"
        fill="#001f5b"
      />
      <path
        d="M195.33608,142.69439a18.1792,18.1792,0,0,0-1.721,1.26546l4.40379,2.73339,1.61978-1.82226c-1.31607-.91113-3.29019-2.27782-3.39143-2.27782A1.42936,1.42936,0,0,0,195.33608,142.69439Zm-.86052-.658a.40289.40289,0,0,0-.10123-.45556,36.35893,36.35893,0,0,0-3.64453-1.97411,3.44435,3.44435,0,0,0-1.01236.10123,20.207,20.207,0,0,0-1.97411,1.31607l4.91,2.27782c.86051-.5568,1.721-1.16423,1.82226-1.26546Zm2.27782-.70865c-.10123.25309-.15185.35433-.05062.40494.10123.15185,2.17659,1.51855,3.5939,2.42968l1.56917-1.56917-3.64452-2.42968a17.80981,17.80981,0,0,0-1.46791,1.16423Zm-1.61978-.40494a1.73967,1.73967,0,0,0,.8099-.20248,13.77132,13.77132,0,0,0,1.46794-1.11361l-3.99885-2.53092a17.713,17.713,0,0,0-2.07536,1.41731c0,.05062.05062.15185.25309.45556Zm-6.37791-1.82226c.10123-.15185.15185-.30371.05062-.40494a23.08141,23.08141,0,0,0-3.847-2.02473.95121.95121,0,0,0-.91113.10123c-.30371.15185-1.97411,1.063-2.58153,1.41731l5.16306,2.37907a20.02154,20.02154,0,0,0,2.126-1.46794Zm-3.13834-3.49266c-.05062.10123,0,.20248.20248.35433.25309.20248,3.5939,1.9235,3.847,1.97411a3.8309,3.8309,0,0,0,.75927-.05062c.15185-.05062,1.36669-.8099,2.126-1.31607l-4.45441-2.42968a16.92024,16.92024,0,0,0-2.48029,1.46794Zm-6.37791-2.22721c1.721.658,4.10008,1.61978,4.30256,1.6704a3.06464,3.06464,0,0,0,.96175,0c.20248-.05062,1.61978-.8099,2.68276-1.31607a12.51138,12.51138,0,0,0-4.40379-1.41731,11.86369,11.86369,0,0,0-3.54327,1.063Zm-5.41616,2.02473,6.42852,2.27782a12.19531,12.19531,0,0,0,2.58153-1.31607c.10123-.15185.10123-.30371-.20248-.5568-.20248-.15185-3.0371-1.21484-4.85935-1.87288Zm22.9301-10.12366c-17.36208-1.9235-22.06959-6.0742-22.06959-8.757,0-1.01236.91113-1.31607,1.721-1.31607,3.94822,0,9.1113,2.83463,12.09777,6.02358-1.77163-4.55564-12.14839-9.92119-18.93124-9.92119-1.26546,0-3.13834.40494-3.13834,2.4803,0,4.25193,6.47914,9.61748,22.98072,10.98418,8.85821,2.07536,18.02012,7.03594,16.24848,13.41385a5.71233,5.71233,0,0,0,.658-2.73339C206.32026,131.45713,201.1572,128.8756,196.7534,125.28169Zm-63.526,1.6704c-30.9278,1.82226-45.30339,28.39688-46.06267,29.91543.70865-.75927,16.55219-16.50157,33.155-19.893Zm-.5568-34.67355c-1.46794-1.87288-3.29019-20.956-3.29019-20.956S129.07671,90.76,127.96311,92.481s-6.68162,4.96059-6.68162,4.96059,6.17544-2.02473,9.21253-2.22721c2.22721-.10124,9.31376,1.3667,9.31376,1.3667s-5.61864-2.37905-7.13719-4.30255Z"
        fill="#fff"
      />
      <path
        d="M160.61193,136.3671c23.79061,6.32729,34.01552,14.52746,34.01552,14.52746l2.4803-2.784c-1.16423-.91113-9.92119-6.93471-27.13142-12.604,5.11245-2.02473,11.33851-4.40379,12.95829-4.40379,3.79637,0,11.5916,4.9606,20.04485,10.37676l1.87288-2.07536c-7.33965-5.11245-15.94476-11.08541-22.12021-11.08541C177.6703,128.31879,170.43188,131.45713,160.61193,136.3671Z"
        fill="#fff"
      />
    </svg>
  );
};

VAN.Primary_Color =  '#00205B'
VAN.Secondary_Color =  '#00843D'
VAN.Font_Color =  'White'
VAN.City =  'Vancouver'
VAN.Name =  'Canucks'

VAN.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VAN.defaultProps = {
  size: "100"
};

export default VAN;
