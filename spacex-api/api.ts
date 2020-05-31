import api from 'https://deno.land/x/api/index.ts';
import { Capsule } from './models/capsule.model.ts';

export async function getAllCapsules(
    queryParams?: {
        capsule_serial?: string,
        capsule_id?: string,
        status?: string,
        original_launch?: string,
        mission?: string,
        landings?: number,
        type?: string,
        reuse_count?: number
    }
): Promise<Array<Capsule>> {
    let querystring = '';

    if (queryParams && Object.keys(queryParams).length) {
        querystring = '?';
        for (const key of Object.keys(queryParams)) {
            const value = (queryParams as any)[key];
            querystring += `${key}=${value}&`;
        }
        querystring = querystring.substring(0, querystring.length - 1);
    }

    return api.get('https://api.spacexdata.com/v3/capsules' + querystring);
}