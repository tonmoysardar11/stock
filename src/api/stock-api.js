const baseURL = "https://finnhub.io/api/v1";


export const stockSearch = async (input) => {
  const fetchedData = await fetch(
    `${baseURL}/search?q=${input}&token=${process.env.REACT_APP_API_KEY}`
  );
  if (!fetchedData.ok) {
    const message = `Oops!! Something Wrong => ${fetchedData.status}:${fetchedData.statusText}`;
    throw new Error(message);
  }
  return await fetchedData.json();
};

export const stockProfile = async (input) => {
    const fetchedData = await fetch(
      `${baseURL}/stock/profile2?symbol=${input}&token=${process.env.REACT_APP_API_KEY}`
    );
    if (!fetchedData.ok) {
      const message = `Oops!! Something Wrong => ${fetchedData.status}:${fetchedData.statusText}`;
      throw new Error(message);
    }
    return await fetchedData.json();
  };

  export const stockPrice = async (input) => {
    const fetchedData = await fetch(
      `${baseURL}/quote?symbol=${input}&token=${process.env.REACT_APP_API_KEY}`
    );
    if (!fetchedData.ok) {
      const message = `Oops!! Something Wrong => ${fetchedData.status}:${fetchedData.statusText}`;
      throw new Error(message);
    }
    return await fetchedData.json();
  };

  export const stockChart = async (symbol,resolution,from,to) => {
    const fetchedData = await fetch(
      `${baseURL}stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`
    );
    if (!fetchedData.ok) {
      const message = `Oops!! Something Wrong => ${fetchedData.status}:${fetchedData.statusText}`;
      throw new Error(message);
    }
    return await fetchedData.json();
  };
