import {useState, useCallback} from "react";
import {RequestConfig} from "../models/RequestConfig";

export const useHttp = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);

    const sendRequest = useCallback(

        async (requestConfig: RequestConfig, applyDataFn: (data: any) => any) => {

            setIsLoading(true);
            setError(null);

            try {
                const requestHeaders: HeadersInit = new Headers();
                requestHeaders.set('Content-Type', 'application/json');

                const response = await fetch(requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestHeaders,
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
                });

                const data = await response.json();
                if (!response.ok) {
                    setError(data.message + " Status: " + response.status ||
                        "Something went wrong! Status: " + response.status);
                }
                applyDataFn(data);

            } catch (e) {
                setError(e.message || "Something went wrong!");
            }
            setIsLoading(false);

        }, []);

    return {
        isLoading,
        error,
        sendRequest
    };
}
