import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (parameter) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(parameter)
      .then((response) => {
        setData(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
      .catch((error) => console.log(error));
  }, []);

  return [data, loading];
};

export default useFetch;
