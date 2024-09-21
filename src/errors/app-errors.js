export const appError = (mensagem, statusCode) => {
        const error = new Error(`${mensagem}`);
        error.status = statusCode;
        throw error;
}

