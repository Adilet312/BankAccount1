function BankAccount (fullName, balance) {
  this.fullName = fullName;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
  if (amount<0)
  {
    amount=0;
  }
  this.balance+=parseFloat(amount);
};

BankAccount.prototype.withdraw = function(amount) {
  if (amount<=0 && amount>this.balance) {
    amount=0;
  }
  this.balance-=amount;
};

BankAccount.prototype.getBalance = function(){
  return this.balance;
}

function AccountList (){
  this.list =[];
  this.id=0;
}
/*----------------------------------------------------------*/

AccountList.prototype.addAccount=function(account){
  account.id= this.assignID();
  this.list.push(account);
}

AccountList.prototype.assignID=function(){
  this.id += 1;
  return this.id;
}

AccountList.prototype.delAccount=function(idx){
  for (var i=0; i<this.list.length; i++) {
    if (this.list[i]){
      if (this.list[i].id==idx){
        delete this.list[i];
        return true;
      }
    }
  };
  return false;
}

AccountList.prototype.depositByID=function(idx,amount){
  for (var i=0; i<this.list.length; i++) {
    if (this.list[i]){
      if (this.list[i].id===idx) {
        list[i].deposit(amount);
      }
    }
  }
}

AccountList.prototype.withdrawByID=function(idx,amount){
  for (var i=0; i<this.list.length; i++) {
    if (this.list[i]){
      if (this.list[i].id===idx) {
        list[i].withdraw(amount);
      }
    }
  }
}
/*---------------------------------------------------------*/
var listAccount = new AccountList();
function displayContactDetails(displayAccounts)
{
  var listOfAccounts = $("ul#contacts");
  var htmlforAccounts = "";
  displayAccounts.list.forEach(function(account)
  {
    console.log( account.id );
    htmlforAccounts+="<li id=" + account.id + ">" + account.fullName + " " + account.balance + "</li>";
  });
  listOfAccounts.html(htmlforAccounts);
};
/*---------------------------------------------------------*/
$(document).ready(function() {
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var inputFullName = $("#name").val();
    var inputInitialAmount = parseFloat($("#initialAmount").val());
    var bankAccount = new BankAccount(inputFullName,inputInitialAmount);
    listAccount.addAccount(bankAccount);
    //$("#outputID").text(bankAccount.getBalance()).show();
    displayContactDetails(listAccount);
    console.log();
  });

  $("form#formTwo").submit(function(event) {
    event.preventDefault();
    var inputID = parseInt($("userID").val());
    var depositAmount = parseFloat($("#depositAmount").val());
    var bankAccount = new BankAccount();
    console.log(inputID, depositAmount);
    // var withdrawalAmount = parseFloat($("#withdrawalAmount").val());
    listAccount.depositByID(inputID, depositAmount);
    console.log(bankAccount.getBalance());
});

  });
