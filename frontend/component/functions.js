import React from 'react'

export const handleApiError = (err) => {
    console.log("error",err);
    if(Boolean(err?.response?.status) && [500,400]?.includes(err?.response?.status)){
        return {
            redirect: {
                destination: "/" + err?.response?.status,
                permanent: false,
            },
        };
    }else{
        return {
            redirect: {
                destination: "/500",
                permanent: false,
            },
        }
    }
}
