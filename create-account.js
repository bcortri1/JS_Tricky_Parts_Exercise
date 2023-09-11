function createAccount(pin, bal = 0) {
    return {
        checkBalance(check) {
            return check === pin ? `$${bal}` : "Invalid PIN."
        },
        deposit(check, amount) {
            if (check === pin) {
                bal += amount;
                return `Succesfully deposited $${amount}. Current balance: $${bal}.`
            }
            return "Invalid PIN."
        },
        withdraw(check, amount) {
            if (check === pin) {
                if (bal >= amount) {
                    bal -= amount;
                    return `Succesfully withdrew $${amount}. Current balance: $${bal}.`
                }
                else {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled."
                }
            }
            return "Invalid PIN."
        },
        changePin(oldPin, newPin) {
            if (oldPin === pin) {
                pin = newPin;
                return "PIN successfully changed!";
            }
            else {
                return "Invalid PIN."
            }
        }
    }
}

module.exports = { createAccount };
