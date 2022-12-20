// Evitar aclopamento por um remetente de solicitação ao seu recepitor
// ao dar a mais de um objeto a oportunidade de tratar a solicitação
// encadeando objetos receptores, passando a solicitação ao longo de uma cadeia de tratamento

import Atm from "../../../src/behavioral/chain_of_respansibility/Atm"
import BillHandler from "../../../src/behavioral/chain_of_respansibility/BillHandler"

describe('Test Atm', () => {
  it('should withdraw money from ATM 1', () => {
    const handle1 = new BillHandler(undefined, 1)
    const handle5 = new BillHandler(handle1, 5)
    const handle10 = new BillHandler(handle5, 10)
    const handle20 = new BillHandler(handle10, 20)
    const handle50 = new BillHandler(handle20, 50)
    const handle100 = new BillHandler(handle50, 100)
    const atm = new Atm(handle100)
    const bills = atm.withdraw(978)
    expect(bills).toStrictEqual([
      { type: 100, quantity: 9 },
      { type: 50, quantity: 1 },
      { type: 20, quantity: 1 },
      { type: 10, quantity: 0 },
      { type: 5, quantity: 1 },
      { type: 1, quantity: 3 }
    ])
  })

  it('should withdraw money from ATM 2', () => {
    const handle1 = new BillHandler(undefined, 1)
    const atm = new Atm(handle1)
    const bills = atm.withdraw(978)
    expect(bills).toStrictEqual([
      { type: 1, quantity: 978 }
    ])
  })

  it('should withdraw money from ATM 3', () => {
    const handle1 = new BillHandler(undefined, 1)
    const handle5 = new BillHandler(handle1, 5)
    const atm = new Atm(handle5)
    const bills = atm.withdraw(978)
    expect(bills).toStrictEqual([
      { type: 5, quantity: 195 },
      { type: 1, quantity: 3 }
    ])
  })
})