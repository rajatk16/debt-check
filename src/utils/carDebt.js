import moment from 'moment'

export const carDebt = (formInputs) => {
  const {
    price, 
    tax, 
    titleFees, 
    tradeIn, 
    dealerCharges, 
    rebates, 
    downPayment,
    interest,
    months
  } = formInputs
  
  const afterTaxPrice = (price * (tax / 100)) + price + titleFees
  const tradeInDiscount = afterTaxPrice - tradeIn
  const priceWithDealerCharges = dealerCharges + tradeInDiscount
  const rebateDiscount = priceWithDealerCharges - rebates
  const principal = rebateDiscount - downPayment
  const monthlyRate = (interest / 100) / 12 
  
  const numerator = (monthlyRate * ((1 + monthlyRate)** months)).toFixed(4)
  const denominator = (((1 + monthlyRate)**months) - 1).toFixed(4)
  
  const monthlyPayment = (principal * (numerator / denominator)).toFixed(2)
  const monthlyInterestPortion = ((interest/100) * principal) / 12
  const monthlyPrincipalPortion =  monthlyPayment - monthlyInterestPortion
  const balance = monthlyPayment * months
  const obj = [{
    month: moment().format("MMM DD YYYY"),
    payment: 0,
    interest: 0,
    principal: 0,
    balance: balance.toFixed(2)
  }]
  for(let i = 0; i < months; i++) {
    obj.push({
      month: moment().add(i+1, 'months').format("MMM DD YYYY"),
      payment: monthlyPayment,
      interest: monthlyInterestPortion.toFixed(2),
      principal: monthlyPrincipalPortion.toFixed(2),
      balance: (balance - (monthlyPayment * (i + 1))).toFixed(2)
    })
  }
  return obj
}