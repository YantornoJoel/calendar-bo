


export const getEnvVariables = () => {

    // import.meta.env

    return {
        VITE_API_URL: import.meta.env.VITE_API_URL,
        VITE_API_HEROKU: import.meta.env.VITE_API_HEROKU
    }
}