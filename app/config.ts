// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://jhon.codes';
export const BUY_MY_COFFEE_CONTRACT_ADDR = '0x79499A61e96A3B31a5DDfc992964647bB527B540';
