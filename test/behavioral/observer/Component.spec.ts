import InputText from "../../../src/behavioral/observer/InputText"
import Label from "../../../src/behavioral/observer/Label"

describe('Component test', () => {
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
