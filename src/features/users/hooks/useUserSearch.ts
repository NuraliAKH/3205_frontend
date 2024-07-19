import { useState, useRef } from "react";
import axios from "axios";
import userService from "../service/usersService";

const useUserSearch = () => {
  const [results, setResults] = useState<{ email: string; number: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const cancelTokenRef = useRef<any>(null);

  const handleSearch = async (values: { email: string; number?: string }) => {
    if (cancelTokenRef.current) {
      cancelTokenRef.current.cancel("Operation canceled due to new request.");
    }

    cancelTokenRef.current = axios.CancelToken.source();
    setLoading(true);

    try {
      const cleanedValues = {
        ...values,
        number: values.number ? values.number.replace(/\D/g, "") : undefined,
      };
      const data = await userService.searchUsers(cleanedValues, cancelTokenRef.current.token);
      setResults(data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
      } else {
        console.error("Something went wrong:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    results,
    loading,
    handleSearch,
  };
};

export default useUserSearch;
