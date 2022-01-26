// Business Logic

function Account (accountName, deposit) {
  this.name = accountName;
  this.deposit = deposit;
  this.balance = 0;

}

Account.prototype.moneyDeposit = function(funds) {
  this.balance += funds;
}

Account.prototype.moneyWithdrawl = function(funds) {
  this.balance -= funds;
}

// UI Logic

$(document).ready(function() {
  $("#withdrawl-deposit").submit(function(event) {
    event.preventDefualt();
    const accountName = $("input#account-name").val();
    const initialDeposit = parseFloat($("input#initial-deposit").val());
    userAccount.name = accountName;
    userAccount.amount = initialDeposit;
    $("#new-info").html("Thanks " +  userAccount.name  + "Your initial account balance is $" + userAccount.amount)
  })
})