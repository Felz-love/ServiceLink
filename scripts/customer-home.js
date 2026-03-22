// account-switching.js

// Account Switching Functionality
class AccountSwitcher {
    constructor(accounts) {
        this.accounts = accounts;
        this.currentAccountIndex = 0;
    }

    switchAccount() {
        this.currentAccountIndex = (this.currentAccountIndex + 1) % this.accounts.length;
        console.log(`Switched to account: ${this.getCurrentAccount()}`);
    }

    getCurrentAccount() {
        return this.accounts[this.currentAccountIndex];
    }

    // Additional Interactive Features
    logAccounts() {
        console.log("Available Accounts:");
        this.accounts.forEach(account => console.log(account));
    }
}

// Usage Example
const accounts = ['user1@example.com', 'user2@example.com', 'user3@example.com'];
const switcher = new AccountSwitcher(accounts);

// Switch accounts and log current account
switcher.switchAccount();
switcher.logAccounts();
