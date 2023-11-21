class Account {
    protected balance: number;

    constructor(balanceInit: number = 0) {
        this.balance = balanceInit;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.error("Insufficient funds");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

class SonAccount extends Account {
   
}

class MotherAccount extends Account {
    addInterest(): void {
        const interest = this.balance * 0.10; 
        this.balance += interest;
    }
}


const sonAccount = new SonAccount();
const motherAccount = new MotherAccount();

function getInputElementValue(elementId: string): number {
    const inputElement = document.getElementById(elementId) as HTMLInputElement;
    return parseFloat(inputElement.value);
}

function sonDeposit() {
    const amount = getInputElementValue('sonAmount');
    sonAccount.deposit(amount);
    console.log("Saldo Figlio:", sonAccount.getBalance());
}

function sonWithdraw() {
    const amount = getInputElementValue('sonAmount');
    sonAccount.withdraw(amount);
    console.log("Saldo Figlio:", sonAccount.getBalance());
}

function motherDeposit() {
    const amount = getInputElementValue('motherAmount');
    motherAccount.deposit(amount);
    console.log("Saldo Madre:", motherAccount.getBalance());
}

function motherWithdraw() {
    const amount = getInputElementValue('motherAmount');
    motherAccount.withdraw(amount);
    console.log("Saldo Madre:", motherAccount.getBalance());
}

function motherAddInterest() {
    motherAccount.addInterest();
    console.log("Saldo Madre con Interessi:", motherAccount.getBalance());
}
