export interface UserData{
    name:string,
    email:string,
    username:string,
    password:string,
    phoneNumber:number,
    accountNumber:number,
    verified:boolean,
    wallet:{}[],
    history:{}[],
}
export interface IWalletData{
    balance:number,
    credit:number,
    debit:number
}
export interface IHistory{
message:string,
transactionRefrence:string,
transactionType:string,
}