import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Combobox, Spinner } from "evergreen-ui";
import { useSelector, useDispatch } from "react-redux";

import "./index.scss";
import { setLoaded, setNumberWithCurr, setToCurrency } from "redux/app/slice";

function DefaultCurrency() {
  const dispatch = useDispatch();
  const { isLoaded, toCurrency } = useSelector((state: any) => state.app);

  const { rates, data } = useSelector((state) => state.response);

  useEffect(() => {
    if (data !== null) {
      dispatch(setLoaded(true));
    }
    console.log(isLoaded, "isLoaded in DefaultCurrency ");

    return () => {
      dispatch(setLoaded(false));
      console.log(isLoaded, "isLoaded in DefaultCurrency unmount ");
    };
  }, [isLoaded]);

  const CulcCurrency = (currency) => {
    return roundUp(data.rates[toCurrency] / data.rates[currency]);
  };

  const roundUp = (val) => {
    return val.toFixed(2);
  };

  return (
    <div className="default block">
      {isLoaded ? (
        <>
          <h1>Default Currency</h1>
          <h4>
            EUR:{CulcCurrency("EUR")} USD:{CulcCurrency("USD")}
          </h4>

          <div className="combobox">
            <Combobox
              items={rates}
              onChange={(selected) => {
                dispatch(setToCurrency(selected));
              }}
              placeholder="Currency"
              selectedItem={toCurrency}
            />
          </div>
        </>
      ) : (
        <div>
          <Spinner delay={1000} size={400} />
        </div>
      )}
      <Link className="link" to="/calculator">
        Calculator
      </Link>
    </div>
  );
}

export default DefaultCurrency;
