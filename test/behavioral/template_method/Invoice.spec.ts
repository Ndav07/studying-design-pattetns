// Liskov Substitution Principle
// Se 'S' (Beer, Whisky, Water) é subclasse de 'T' (Item), então os objetos do tipo 'T' (Item)
// Podem ser substituidos por objetos do tipo 'S', sem quebrar o comportamento do programa

import Beer from "../../../src/behavioral/template_method/Beer"
import Invoice from "../../../src/behavioral/template_method/Invoice"
import Water from "../../../src/behavioral/template_method/Wanter"
import Whisky from "../../../src/behavioral/template_method/Whisky"

describe('Liskov Substitution Principle, test invoice', () => {
  it('should create incoive, with taxes', () => {
    const invoice = new Invoice()
    invoice.addItem(new Beer('Heineken', 10)) // 10% -> 1
    invoice.addItem(new Whisky('Jack Daniels', 100)) // 20% -> 20
    invoice.addItem(new Water('Santa Catarina', 5)) // 0% => 0
    const taxes = invoice.getTaxes()
    expect(taxes).toBe(21)
  })
})
