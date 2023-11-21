var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(balanceInit) {
        if (balanceInit === void 0) { balanceInit = 0; }
        this.balance = balanceInit;
    }
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    Account.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.error("Insufficient funds");
        }
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
var SonAccount = /** @class */ (function (_super) {
    __extends(SonAccount, _super);
    function SonAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SonAccount;
}(Account));
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        var interest = this.balance * 0.10;
        this.balance += interest;
    };
    return MotherAccount;
}(Account));

var sonAccount = new SonAccount();
var motherAccount = new MotherAccount();

function getInputElementValue(elementId) {
    var inputElement = document.getElementById(elementId);
    return parseFloat(inputElement.value);
}
function sonDeposit() {
    var amount = getInputElementValue('sonAmount');
    sonAccount.deposit(amount);
    console.log("Saldo Figlio:", sonAccount.getBalance());
}
function sonWithdraw() {
    var amount = getInputElementValue('sonAmount');
    sonAccount.withdraw(amount);
    console.log("Saldo Figlio:", sonAccount.getBalance());
}
function motherDeposit() {
    var amount = getInputElementValue('motherAmount');
    motherAccount.deposit(amount);
    console.log("Saldo Madre:", motherAccount.getBalance());
}
function motherWithdraw() {
    var amount = getInputElementValue('motherAmount');
    motherAccount.withdraw(amount);
    console.log("Saldo Madre:", motherAccount.getBalance());
}
function motherAddInterest() {
    motherAccount.addInterest();
    console.log("Saldo Madre con Interessi:", motherAccount.getBalance());
}
