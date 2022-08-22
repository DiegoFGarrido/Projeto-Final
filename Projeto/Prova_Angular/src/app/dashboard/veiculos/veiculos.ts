
export interface Veiculo {
  id: number | string
  veiculo: string
  volumetotal: number | string
  conectado: number | string
  softwareUpdates: number | string
}

export interface VehicleData {
  vin: number | string
  odometer: number
  tirePressure: number | string
  status: string
  batteryStatus: string
  fuelLevel: number
  lat: string
  long: string
}

export interface Veiculos extends Array<Veiculo> {}

export interface VeiculosAPI {
  vehicles: Veiculos;
}
