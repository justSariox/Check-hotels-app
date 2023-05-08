export type MainDataTypes = {
    hotelId: number
    hotelName: string
    location: {
        country: string
        geo: {
            lat: number
            lon: number
        }
        name: string
        state: null | string
    }
    locationId: string
    priceAvg: string
    priceFrom: string
    pricePercentile: {
        3: number
        10: number
        35: number
        50: number
        75: number
        99: number

    }
    stars: number
}
