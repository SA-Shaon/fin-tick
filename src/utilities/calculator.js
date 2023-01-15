const LumpsumCalculation = (investment, rateOfReturn, year) => {
    const corpus = parseFloat((investment * (1 + rateOfReturn * 0.01) ** year).toFixed(2));
    const totalDeposited = investment;
    const totalEearning = parseFloat((corpus - totalDeposited).toFixed(2));
    return { corpus, totalDeposited, totalEearning };
}
const SIPCalculation = (investment, rateOfReturn, year) => {
    const i = (rateOfReturn / 1200);
    const n = year * 12;
    const futureValue = parseFloat((investment * [((1 + i) ** n) - 1] * (1 + i) / i).toFixed(2));
    const totalDeposited = investment * n;
    const totalEearning = parseFloat((futureValue - totalDeposited).toFixed(2));
    return { futureValue, totalDeposited, totalEearning };
}
const gpLumsumCalculation = (tWealth, rateOfReturn, year) => {
    const i = (rateOfReturn / 100);
    const futureValue = parseFloat((tWealth / (1 + i) ** year).toFixed(2));
    return futureValue;
}
const gpSIPCalculation = (tWealth, rateOfReturn, year) => {
    const i = (rateOfReturn / 1200);
    const n = year * 12;
    const investmentPM = parseFloat((tWealth / ([((1 + i) ** n) - 1] * (1 + i) / i)).toFixed(2));
    return investmentPM;
}
const stockMvsFDreturns = (investment, year) => {
    const bankFD = parseFloat((investment * (1 + 6.5 * 0.01) ** year).toFixed(2));
    const stockM = parseFloat((investment * (1 + 12 * 0.01) ** year).toFixed(2));
    return { bankFD, stockM };
}
export {
    LumpsumCalculation,
    SIPCalculation,
    gpLumsumCalculation,
    gpSIPCalculation,
    stockMvsFDreturns
}
