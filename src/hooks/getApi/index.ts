import { useEffect, useState } from "react"
import api from "../../helper/api"

function GetApi<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() =>{
    api.get(url)
      .then(res =>{
        setData(res.data)
      })
      .catch(err =>{
        setError(err)
      })
      .finally(() =>{
        setIsLoading(false);
      })
  }, [url]);

  return { data, isLoading, error}
}

export default GetApi;