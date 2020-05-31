export interface CoreParams {
    core_serial?: string; // query by
    block?: number;
    status?: string;
    original_launch?: string;
    mission?: string;
    reuse_count?: number;
    rtls_attempts?: number;
    rtls_landings?: number;
    asds_attempts?: number;
    asds_landings?: number;
    water_landing?: boolean;
    id?: boolean; // output control
    limit?: number;
    offset?: number;
    sort?: 'core_serial' | 'block' | 'status' |
           'original_launch' | 'mission' | 'reuse_count' |
           'rtls_attempts' | 'rtls_landings' | 'asds_attempts' |
           'asds_landings' | 'water_landing';
    order?: 'asc' | 'desc';
}
