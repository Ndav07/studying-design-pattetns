// Fornecer uma interface para criação de FAMILIAS DE OBJETOS RELACIONADOS,
// sem especificar as suas classes concretas 

import DarkWidgetFactory from "../../../src/creational/abstract_factory/DarkWidgetFactory"
import LightWidgetFactory from "../../../src/creational/abstract_factory/LightWidgetFactory"
import View from "../../../src/creational/abstract_factory/View"

describe('Abstract factory, test view', () => {
  it('should create light themed graphic interface', () => {
    const view = new View(new LightWidgetFactory())
    expect(view.label.color).toBe('black')
    expect(view.button.color).toBe('white')
    expect(view.button.backgroundColor).toBe('blue')
  })

  it('should create dark themed graphic interface', () => {
    const view = new View(new DarkWidgetFactory())
    expect(view.label.color).toBe('white')
    expect(view.button.color).toBe('white')
    expect(view.button.backgroundColor).toBe('black')
  })
})
