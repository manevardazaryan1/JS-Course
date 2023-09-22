class Account{
    #balance = 0;

    constructor (name) {
        this.name = name;
        this.id = Date.now();
    }

    get balance() {
        return this.#balance;
    }

    set balance(balance) {
        this.#balance = balance;
    }

    credit(balance) {
        this.#balance += balance;
    }

    debit(balance) {
        if (this.#balance < balance)
            return 'There is not enought money in the account';

        this.#balance -= balance;

        return 'The action is done';
    }

    transferTo(otherAccount, balance) {
        if (otherAccount.balance < balance)
            return 'In this account is not enought money';

        otherAccount.balance -= balance;
        this.#balance += balance;

        return 'The action is done';
    }

    static identifyAccounts(account1, account2) {
        return account1.id === account2.id;
    }
}
