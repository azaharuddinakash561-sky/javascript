interface Response<T> {
    data: T;
    status: number;
    
}


const transactionResponse: Response<string> = {
    data: "Transaction successful",
    status: 200,
};