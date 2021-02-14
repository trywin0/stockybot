const fetch = require('node-fetch');

export class StockManager {
private apiKey: string;
private base: string = 'https://finnhub.io/api/v1/';
constructor(apiKey:string) {
  this.apiKey = apiKey;
}
findSymbol(symbol: string) {
  return new Promise(async (res)=>{
    const fullData = await fetch(this.base +
    `search?q=${symbol}&token=${this.apiKey}`).then(
        (res: Response)=>res.json(),
    );

    res(fullData.result.find((stock:any)=>stock.symbol===symbol));
  });
}
findSymbols(symbol: string) {
  return new Promise(async (res)=>{
    const fullData = await fetch(this.base +
    `search?q=${symbol}&token=${this.apiKey}`).then(
        (res: Response)=>res.json(),
    );

    res(fullData.result);
  });
}
}
