import { Alert, AlertTitle, CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export const withDataFetching = (url: string) => (WrappedComponent: any) => {
  return function WithDataFetching(props: any) {
    const [error, setError] = useState<string>();
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
      if (error) {
        alert(error);
      }
    }, [error]);

    useEffect(() => {
      const fetchData = async () => {
        const id = props.params?.slug ? `/${props.params?.slug}` : "";
        try {
          const response = await axios.get(`${url}${id}`);
          setData(response.data);
        } catch (error: any) {
          setError("Erro ao tentar realizar a consulta");
        } finally {
          //setIsLoading(false);
        }
      };
      fetchData();
    }, [props.params?.slug]);

    return (
      <>
        <WrappedComponent {...props} data={data} />
        {isLoading ? (
          <CircularProgress
            sx={{
              position: "absolute",
              top: "calc(100vh / 2",
              left: "calc(100vw/2",
            }}
          />
        ) : undefined}
        {error ? (
          <Alert severity="error" variant="filled" sx={{ marginTop: "70px" }}>
            <AlertTitle>Erro</AlertTitle>
            {error}
          </Alert>
        ) : undefined}
      </>
    );
  };
};
