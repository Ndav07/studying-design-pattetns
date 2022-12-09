// Definir uma família de algoritimos, encapsular cada uma delas e torná-las INTERCAMBIAVEIS

import AirportPriceCalculator from "../../../src/behavioral/strategy/AirportPriceCalculator"
import BeachPriceCalculator from "../../../src/behavioral/strategy/BeachPriceCalculator"
import ParkingLot from "../../../src/behavioral/strategy/ParkingLot"
import ShoppingPriceCalculator from "../../../src/behavioral/strategy/ShoppingPriceCaculator"

describe('Strategy, test parking lot', () => {
  it('should create a empty parking lot', () => {
    const parkingLot = new ParkingLot('beach', 500, new BeachPriceCalculator())
    expect(parkingLot.getEmptySpaces()).toBe(500)
  })

  it('should a car comes in', () => {
    const parkingLot = new ParkingLot('beach', 500, new BeachPriceCalculator())
    parkingLot.checkin('AAA-9999', new Date('2022-01-01T10:00:00'))
    expect(parkingLot.getEmptySpaces()).toBe(499)
  })

  it('should out a car', () => {
    const parkingLot = new ParkingLot('beach', 500, new BeachPriceCalculator())
    parkingLot.checkin('AAA-9999', new Date('2022-01-01T10:00:00'))
    const price = parkingLot.checkout('AAA-9999', new Date('2022-01-01T15:00:00'))
    expect(parkingLot.getEmptySpaces()).toBe(500)
  })

  it('return calculate the amount that must be paid on the beach, 20 reais per unlimited time', () => {
    const parkingLot = new ParkingLot('beach', 500, new BeachPriceCalculator())
    parkingLot.checkin('AAA-9999', new Date('2022-01-01T10:00:00'))
    const price = parkingLot.checkout('AAA-9999', new Date('2022-01-01T15:00:00'))
    expect(price).toBe(20)
  })

  it('return calculate the amount that must be paid on the shopping, 10 reais per hour, the car remained 5 hours', () => {
    const parkingLot = new ParkingLot('shopping', 500, new ShoppingPriceCalculator())
    parkingLot.checkin('AAA-9999', new Date('2022-01-01T10:00:00'))
    const price = parkingLot.checkout('AAA-9999', new Date('2022-01-01T15:00:00'))
    expect(price).toBe(50)
  })

  it('return calculate the amount that must be paid on the airport, 3 hours per 20 reais and after 10 reais per hour, the car remained 5 hours', () => {
    const parkingLot = new ParkingLot('airport', 500, new AirportPriceCalculator())
    parkingLot.checkin('AAA-9999', new Date('2022-01-01T10:00:00'))
    const price = parkingLot.checkout('AAA-9999', new Date('2022-01-01T15:00:00'))
    expect(price).toBe(40)
  })
})
