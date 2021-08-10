class BankAccount:
    def __init__(self, balance, account_number):
        self.balance = balance
        self.account_number = account_number

    def deposit(self, amount_deposited):
        self.balance += amount_deposited
    
    def withdraw(self, amount_withdrawn):
        self.balance -= amount_withdrawn
    
    def transfer_funds(self, from_account, to_account, money_to_transfer):
        from_account.balance = self.balance - money_to_transfer
        to_account.balance += money_to_transfer
        
        


kayla_account = BankAccount(150, 78987)
jenny_account = BankAccount(100, 78654)
kayla_account.transfer_funds(kayla_account, jenny_account, 60)
print(kayla_account.balance)
print(jenny_account.balance)
# print(kayla_account.balance)
# kayla_account.deposit(50)
# print(kayla_account.balance)
# kayla_account.withdraw(25)
# print(kayla_account.balance)
