import Account from "../../../src/behavioral/command/Account"
import CreditCommand from "../../../src/behavioral/command/CreditCommand"
import DebitCommand from "../../../src/behavioral/command/DebitCommand"

describe('Test account', () => {
  it('should create an account', () => {
    const account = new Account()
    const balance = account.getBalance()
    expect(balance).toBe(0)
  })

  it('should credit an account', () => {
    const account = new Account()
    account.credit(30)
    const balance = account.getBalance()
    expect(balance).toBe(30)
  })

  it('should debit an account', () => {
    const account = new Account()
    account.credit(30)
    account.debit(13)
    const balance = account.getBalance()
    expect(balance).toBe(17)
  })

  it('should credit an account, used a command', () => {
    const account = new Account()
    const creditCommand = new CreditCommand(account, 100)
    creditCommand.execute()
    const balance = account.getBalance()
    expect(balance).toBe(100)
  })

  it('should debit an account, used a command', () => {
    const account = new Account()
    const creditCommand = new CreditCommand(account, 30)
    creditCommand.execute()
    const debitCommand = new DebitCommand(account, 13)
    debitCommand.execute()
    const balance = account.getBalance()
    expect(balance).toBe(17)
  })
})
