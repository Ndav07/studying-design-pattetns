// Definir uma depedência de um para muitos, entre objetos, de maneira que quando
// um mudar de estado, todos os seus dependentes são notificados e atualizados automaticamente

import InputText from "../../../src/behavioral/observer/InputText"
import Label from "../../../src/behavioral/observer/Label"

describe('Observer, test component', () => {
  it('should create a reactive component', () => {
    const inputText = new InputText('country')
    const labela = new Label('País: {{country}}')
    const labelb = new Label('Country: {{country}}')
    inputText.register(labela)
    inputText.register(labelb)
    inputText.setValue('Brasil')
    expect(labela.getValue()).toBe('País: Brasil')
    expect(labelb.getValue()).toBe('Country: Brasil') 
  })
})
