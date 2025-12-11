import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!url) return;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(err => console.error("Fetch error:", err));
  }, [url]);
  return [data];
}

export default useFetch;
