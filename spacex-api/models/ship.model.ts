export interface Ship {
    ship_id: string,
    ship_name: string,
    ship_model: string,
    ship_type: string,
    roles: Array<string>
    active: boolean,
    imo: number,
    mmsi: number,
    abs: number,
    class: number,
    weight_lbs: number,
    weight_kg: number,
    year_built: number,
    home_port: string,
    status: string,
    speed_kn: number,
    course_deg: number,
    position: {
        latitude: number,
        longitude: number
    },
    successful_landings: number,
    attempted_landings: number,
    missions: Array<{name: string, flight: number}>,
    url: string,
    image: string
}