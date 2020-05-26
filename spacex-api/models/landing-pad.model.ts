export interface LandingPad {
    id: string,
    full_name: string,
    status: string,
    location: {
        name: string,
        region: string,
        latitude: number,
        longitude: number
    },
    landing_type: string,
    attempted_landings: number,
    successful_landings: number,
    wikipedia: string,
    details: string
}