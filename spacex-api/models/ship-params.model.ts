export interface ShipParams {
    ship_id?: string; // query parameters
    ship_name?: string;
    ship_model?: string;
    ship_type?: string;
    role?: string;
    active?: boolean;
    imo?: number;
    mmsi?: number;
    abs?: number;
    class?: number;
    weight_lbs?: number;
    weight_kg?: number;
    year_built?: number;
    home_port?: string;
    status?: string;
    speed_kn?: number;
    course_deg?: number;
    latitude?: number;
    longitude?: number;
    successful_landings?: number;
    attempted_landings?: number;
    mission?: string;
    id?: boolean; // output control
    limit?: number;
    offset?: number;
    sort?: 'ship_id' | 'ship_name' | 'ship_model' | 'ship_type' |
           'role' | 'active' | 'imo' | 'mmsi' | 'abs' | 'class' |
           'weight_lbs' | 'weight_kg' | 'year_built' | 'home_port' |
           'status' | 'speed_kn' | 'course_deg' | 'latitude' |
           'longitude' | 'successful_landings' | 'attempted_landings' |
           'mission';
    order?: 'asc' | 'desc';
}