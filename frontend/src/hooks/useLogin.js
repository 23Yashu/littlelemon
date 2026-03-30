import { useState, useCallback, useRef } from "react";
import API_BASE_URL from '../api/apiConfig';

const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const abortControllerRef = useRef(null);

    const submit = useCallback(async (url, values) => {
        if (isLoading) return;

        setIsLoading(true);
        setResponse(null);

        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        abortControllerRef.current = new AbortController();

        try {
            const res = await fetch(`${API_BASE_URL}/api/users/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                signal: abortControllerRef.current.signal,
                body: JSON.stringify({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    phoneNumber: values.phoneNumber,
                    email: values.email,
                    password: values.password,
                    specialRequest: values.request
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setResponse({
                    type: 'success',
                    message: `Welcome ${data.firstName}!`,
                    data: data
                });
            } else {
                setResponse({ type: 'error', message: data.message || "Error" });
            }
        } catch (e) {
            if (e.name !== 'AbortError') {
                setResponse({ type: 'error', message: "Connection failed" });
            }
        } finally {
            setIsLoading(false);
        }
    }, [isLoading]);

    return { isLoading, response, submit };
};

export default useLogin;