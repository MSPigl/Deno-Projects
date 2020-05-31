export interface CapsuleParams {
    capsule_serial?: string, // query by
    capsule_id?: string,
    status?: string,
    original_launch?: string,
    mission?: string,
    landings?: number,
    type?: string,
    reuse_count?: number,
    id?: boolean, // output control
    limit?: number,
    offset?: number,
    sort?: 'capsule_serial' | 'capsule_id' | 'status' | 'original_launch' | 'mission' | 'landings' | 'type' | 'reuse_count',
    order?: 'asc' | 'desc'
}