import { withProviders } from "./providers";
import { setResponse, setRates } from "redux/response/slice";
import { setIsAlert } from 'redux/app/slice';

import { Routing } from "pages";


import { Pane, Alert, } from "evergreen-ui"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import axios from "axios";


const data = {
  success: true,
  timestamp: 1665589323,
  base: "EUR",
  date: "2022-10-12",
  rates: {
    AED: 3.561901,
    AFN: 82.912201,
    ALL: 116.321458,
    AMD: 391.516177,
    ANG: 1.747979,
    AOA: 426.290033,
    ARS: 146.455865,
    AUD: 1.547506,
    AWG: 1.745548,
    AZN: 1.645914,
    BAM: 1.952344,
    BBD: 1.958304,
    BDT: 98.601922,
    BGN: 1.9632,
    BHD: 0.36573,
    BIF: 1989.924311,
    BMD: 0.969749,
    BND: 1.392549,
    BOB: 6.702035,
    BRL: 5.133557,
    BSD: 0.969868,
    BTC: 0.000050763371,
    BTN: 79.80877,
    BWP: 13.018957,
    BYN: 2.45881,
    BYR: 19007.074317,
    BZD: 1.95501,
    CAD: 1.338646,
    CDF: 1985.075586,
    CHF: 0.967955,
    CLF: 0.032951,
    CLP: 909.226826,
    CNY: 6.95795,
    COP: 4475.3999,
    CRC: 610.679742,
    CUC: 0.969749,
    CUP: 25.69834,
    CVE: 110.696679,
    CZK: 24.55211,
    DJF: 172.671726,
    DKK: 7.438458,
    DOP: 52.079239,
    DZD: 136.432992,
    EGP: 19.091634,
    ERN: 14.54623,
    ETB: 51.08615,
    EUR: 1,
    FJD: 2.255826,
    FKP: 0.838441,
    GBP: 0.875562,
    GEL: 2.710435,
    GGP: 0.838441,
    GHS: 10.424832,
    GIP: 0.838441,
    GMD: 54.548097,
    GNF: 8461.057383,
    GTQ: 7.640459,
    GYD: 202.917727,
    HKD: 7.612575,
    HNL: 24.020584,
    HRK: 7.529027,
    HTG: 120.268283,
    HUF: 432.665074,
    IDR: 14870.999181,
    ILS: 3.465271,
    IMP: 0.838441,
    INR: 79.779866,
    IQD: 1415.833087,
    IRR: 41020.369855,
    ISK: 140.099435,
    JEP: 0.838441,
    JMD: 148.274283,
    JOD: 0.688331,
    JPY: 142.508936,
    KES: 117.236121,
    KGS: 80.816432,
    KHR: 4019.60843,
    KMF: 489.601874,
    KPW: 872.773864,
    KRW: 1385.062828,
    KWD: 0.301,
    KYD: 0.808203,
    KZT: 464.251164,
    LAK: 16316.022353,
    LBP: 1475.957523,
    LKR: 355.455105,
    LRD: 148.904739,
    LSL: 17.53308,
    LTL: 2.863416,
    LVL: 0.586591,
    LYD: 4.877813,
    MAD: 10.662372,
    MDL: 18.840464,
    MGA: 4087.490756,
    MKD: 61.596497,
    MMK: 2036.713506,
    MNT: 3126.898459,
    MOP: 7.841655,
    MRO: 346.200115,
    MUR: 42.475704,
    MVR: 14.992444,
    MWK: 992.535105,
    MXN: 19.426093,
    MYR: 4.531622,
    MZN: 61.899368,
    NAD: 17.532669,
    NGN: 421.617476,
    NIO: 34.911317,
    NOK: 10.454638,
    NPR: 127.691105,
    NZD: 1.731894,
    OMR: 0.373334,
    PAB: 0.969868,
    PEN: 3.849608,
    PGK: 3.418339,
    PHP: 57.106073,
    PKR: 210.581358,
    PLN: 4.846057,
    PYG: 6904.17385,
    QAR: 3.530879,
    RON: 4.938832,
    RSD: 117.247446,
    RUB: 61.797223,
    RWF: 1014.842004,
    SAR: 3.644568,
    SBD: 7.903496,
    SCR: 12.537189,
    SDG: 549.358134,
    SEK: 11.00176,
    SGD: 1.392705,
    SHP: 1.335735,
    SLL: 15952.365606,
    SOS: 551.787308,
    SRD: 27.244095,
    STD: 20071.83996,
    SVC: 8.486848,
    SYP: 2436.522983,
    SZL: 17.533568,
    THB: 36.860321,
    TJS: 9.844524,
    TMT: 3.403818,
    TND: 3.170592,
    TOP: 2.376177,
    TRY: 18.020648,
    TTD: 6.585143,
    TWD: 30.883599,
    TZS: 2261.454181,
    UAH: 35.820848,
    UGX: 3719.559401,
    USD: 0.969749,
    UYU: 39.838875,
    UZS: 10739.966771,
    VND: 23232.754232,
    VUV: 115.363124,
    WST: 2.643126,
    XAF: 654.750926,
    XAG: 0.051088,
    XAU: 0.000581,
    XCD: 2.620795,
    XDR: 0.759728,
    XOF: 655.064657,
    XPF: 119.52144,
    YER: 242.679675,
    ZAR: 17.73969,
    ZMK: 8728.900295,
    ZMW: 15.397311,
    ZWL: 312.258682,
  },
};
function App() {
  const dispatch = useDispatch();
  const { isAlert, alertMassage } = useSelector((state: any) => state.app);




  const getCurrency = () => {
    //   const URL_API =
    // "https://api.apilayer.com/fixer/latest?apikey=5152p6gP79jPkKik0VeGdWdcA067gJL1";
    // axios.get(URL_API).then((res: any) => {
    //   console.log("data", res);
    //   dispatch(setResponse(res.data))
    //   dispatch(setRates(res.data.rates));
    // });

    dispatch(setResponse(data))
    dispatch(setRates(data.rates));
  }
  //  сделать get запрос и звенести его в редакс 

  useEffect(() => {
    getCurrency()
  }, [])

  return (
    <div className="App-wrapper">
      <Pane>
        {alertMassage && isAlert ? (<Alert className='alert'
          intent="success"
          title={"Your source is now sending datav " + alertMassage}
          marginBottom={32}
          isRemoveable={true}
          onRemove={() => { dispatch(setIsAlert(!isAlert)) }}
        >
        </Alert>) : (<>  </>)}
      </Pane>
      <Routing />
    </div>
  );
}

export default withProviders(App);

