var customerName = `bob`
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
  return customerName;
}
function setBestCustomer() {
    bestCustomer = `not bob`
    return bestCustomer;
}
function overwriteBestCustomer() {
    bestCustomer = `maybe bob`
}
const leastFavoriteCustomer = `never bob`
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = `make bob`
}