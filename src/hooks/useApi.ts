import { useEffect, useState } from "react";
// import { fetchProducts } from "../features/products/services/products";

type State<T> =
  | {
      // pending
      data: undefined;
      isLoading: true;
      isError: false;
    }
  | {
      // resolved
      data: T;
      isLoading: false;
      isError: false;
    }
  | {
      // rejected
      data: undefined;
      isLoading: false;
      isError: true;
    };

// useState<T>, useRef<T>, createContext<T>
export const useApi = <T>(fetcher: () => Promise<T>) => {
  const [state, setState] = useState<State<T>>({
    data: undefined,
    isLoading: true,
    isError: false,
  });
  const { data, isLoading, isError } = state;
  // const [data, setData] = useState<T>();
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  useEffect(() => {
    // fetchProducts().then((data) => setData(data.records)).catch(error => console.error(error));

    const loadData = async () => {
      try {
        const responseData = await fetcher();
        setState({
          data: responseData,
          isLoading: false,
          isError: false,
        });
      } catch (error) {
        console.error(error); // TODO: send to logger
        // setIsError(true);
        setState({
          data: undefined,
          isLoading: false,
          isError: true,
        });
      }
      //   finally {
      //   // setIsLoading(false);
      //   setState({
      //     data: undefined,
      //     isLoading: false,
      //     isError: true,
      //   });
      // }
    };

    loadData();
  }, []); // fetcher, fetcher(id)

  return { data, isLoading, isError };
};
