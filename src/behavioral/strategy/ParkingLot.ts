import PriceCalculator from "./PriceCalculator"

export default class ParkingLot {
  parkedCars: { plate: string, checkinDate: Date}[]

  constructor(
    readonly location: string, 
    readonly capacity: number, 
    readonly priceCalculate: PriceCalculator
  ) {
    this.parkedCars = []
  }

  checkin(plate: string, checkinDate: Date): void {
    this.parkedCars.push({ plate, checkinDate })
  }

  checkout(plate: string, checkinDate: Date): number {
    const parkedCar = this.parkedCars.find(parkedCar => parkedCar.plate === plate)
    if(!parkedCar) throw new Error('Car not found')
    this.parkedCars.splice(this.parkedCars.indexOf(parkedCar), 1)
    const parkedHours = (checkinDate.getTime() - parkedCar.checkinDate.getTime()) / (1000*60*60)
    return this.priceCalculate.calculate(parkedHours)
  }

  getEmptySpaces(): number {
    return this.capacity - this.parkedCars.length
  }
}
