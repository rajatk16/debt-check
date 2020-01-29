import moment from 'moment'

export const creditCardDebt = (outstandingBalance, minimumPayment, apr, period) => {
  const obj = [{
    month: moment().format("MMM DD YYYY"),
    payment: 0,
    interest: 0,
    principal: 0,
    balance: outstandingBalance
  }]
  let monthlyPR = (apr / 100) / 12
  let balance = outstandingBalance;
  for(let i = 0; i < period; i++) {
    let payment = balance * (minimumPayment / 100)
    let interest = monthlyPR * balance
    let principal = payment - interest
    balance = balance - principal
    if(balance <= 0) {
      break;
    }
    obj.push({
      month: moment().add(i+1, 'months').format("MMM DD YYYY"),
      payment: payment,
      interest: interest,
      principal: principal,
      balance: balance
    })
  }
  console.log(obj)
  return obj
}


