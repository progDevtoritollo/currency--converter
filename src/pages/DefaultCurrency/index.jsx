import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Combobox, Spinner } from "evergreen-ui";
import { useSelector, useDispatch } from "react-redux";

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
    <div className="DefaultCur">
      {isLoaded ? (
        <>
          <h1>Default Currency</h1>
          <h1>
            EUR:{CulcCurrency("EUR")} USD:{CulcCurrency("USD")}
          </h1>
          <Combobox
            items={rates}
            onChange={(selected) => {
              dispatch(setToCurrency(selected));
            }}
            placeholder="Currency"
            selectedItem={toCurrency}
          />
        </>
      ) : (
        <div>
          <Spinner delay={1000} size={100} />
        </div>
      )}
      <div>
        <Link to="/calculator">Calculator</Link>
      </div>
    </div>
  );
}

export default DefaultCurrency;
