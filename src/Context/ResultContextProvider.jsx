import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = `https://google-search74.p.rapidapi.com/`;
const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchterm, setSearchTerm] = useState(" ");

  // /videos, /search,.images
  const getResults = async (type) => {
    setLoading(true);
    const response = await fetch(`${baseUrl}${type},{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a35c8af98cmshf99f31962e4a8f1p11c47cjsn0bb4134c244c',
            'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
          }
    }`);
    const data = await response.json();
    setResult(data);
    setLoading(false);
  };
  return (
    <>
      <ResultContext.Provider
        value={{ result, searchterm, setSearchTerm, loading, getResults }}
      >
        {children}
      </ResultContext.Provider>
    </>
  );
};

export const useResultContext = () => {
  useContext(ResultContext);
};

export default ResultContextProvider;
