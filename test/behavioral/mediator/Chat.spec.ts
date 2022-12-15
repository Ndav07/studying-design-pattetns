// Encapsular como os objetos interage, ou seja, a comunicação entre os objetos é
// estabelecida através do Mediator. O Mediator promove o fraco acoplamento ao evitar
// que objetos se referiram uns aos outros explicitamente 

import Channel from "../../../src/behavioral/mediator/Channel"
import Participant from "../../../src/behavioral/mediator/Participant"

describe('Mediator, test chat', () => {
  it('shoud create a chat between the participants', () => {
    const participanta = new Participant('A')
    const participantb = new Participant('B')
    const participantc = new Participant('C')
    const channel = new Channel()
    channel.register(participanta)
    channel.register(participantb)
    channel.register(participantc)
    channel.brodcast(participanta, 'Hello')
    expect(participantb.messages[0]).toBe('Participant B recebeu a mensagem Hello do participante A')
    expect(participantc.messages[0]).toBe('Participant C recebeu a mensagem Hello do participante A')
  })

  it('shoud create a chat between the participants and message forwarded to a specific participant', () => {
    const participanta = new Participant('A')
    const participantb = new Participant('B')
    const participantc = new Participant('C')
    const channel = new Channel()
    channel.register(participanta)
    channel.register(participantb)
    channel.register(participantc)
    channel.message(participanta, participantc, 'Hello')
    expect(participantb.messages).toHaveLength(0)
    expect(participantc.messages[0]).toBe('Participant C recebeu a mensagem Hello do participante A')
  })
})