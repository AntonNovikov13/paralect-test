import React, { useEffect } from 'react';

import axios from 'axios';
import {
    xSecret,
    clientId,
    clientSecret,
    base_url,
    login,
    password,
} from '../../config/config';

export const Authorization = ({ setAccessToken }) => {
    useEffect(() => {
        axios
            .get(`${base_url}/2.0/oauth2/password/`, {
                params: {
                    login,
                    password,
                    client_id: clientId,
                    client_secret: clientSecret,
                    hr: 0,
                },
                headers: {
                    'x-secret-key': xSecret,
                    'X-Api-App-Id': clientSecret,
                },
            })
            .then((response) => {
                const data = response.data;
                setAccessToken(data.access_token);
            });
    }, []);

    return <></>;
};
