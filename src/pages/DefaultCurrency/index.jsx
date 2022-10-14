import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Combobox, Button } from "evergreen-ui";
import { useSelector } from "react-redux";

function DefaultCurrency() {
  const [loaded, setIsLoaded] = useState(false);
  const { rates, data } = useSelector((state) => state.response);
  const [selectedCurrency, setSelectedCurrency] = useState("UAH");

  useEffect(() => {
    console.log(data, rates);
    if (data !== null) {
      setIsLoaded(true);
    }
    return () => {
      setIsLoaded(false);
    };
  }, [data]);

  const CulcCurrency = (currency) => {
    return roundUp(data.rates[selectedCurrency] / data.rates[currency]);
  };

  const roundUp = (val) => {
    return val.toFixed(2);
  };

  return (
    <div className="DefaultCur">
      {!!loaded ? (
        <>
          <h1>Default Currency</h1>
          <h1>
            EUR:{CulcCurrency("EUR")} USD:{CulcCurrency("USD")}
          </h1>
          <Combobox
            items={rates}
            onChange={(selected) => {
              setSelectedCurrency(selected);
              console.log(selected);
            }}
            placeholder="Currency"
          />
        </>
      ) : (
        <div>Empty</div>
      )}
      <div>
        <Link to="/calculator">Calculator</Link>
      </div>
    </div>
  );
}

export default DefaultCurrency;
