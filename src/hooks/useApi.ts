import { useEffect, useState } from "react";
// import { fetchProducts } from "../features/products/services/products";

// useState<T>, useRef<T>, createContext<T>
export const useApi = <T>(fetcher: () => Promise<T>) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // fetchProducts().then((data) => setData(data.records)).catch(error => console.error(error));

    const loadData = async () => {
      try {
        const responseData = await fetcher();
        setData(responseData);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, isLoading, isError };
};
