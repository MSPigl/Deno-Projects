import api from 'https://deno.land/x/api/index.ts';
import { Capsule, CapsuleParams, Core, CoreParams, Dragon } from './models/index.ts';

const BASE_PATH = 'https://api.spacexdata.com/v3';

export async function getAllCapsules(queryParams?: CapsuleParams): Promise<Array<Capsule>> {
    const querystring = buildQueryString(queryParams);
    return api.get(`${BASE_PATH}/capsules${querystring}`);
}

export async function getCapsuleBySerial(serial: string, id = false): Promise<Capsule> {
    const response = await api.get(`${BASE_PATH}/capsules/${serial}${id ? '?id=true' : ''}`);
    return !!response['error'] ? Promise.reject(response['error']) : response;
}

export async function getUpcomingCapsules(queryParams?: CapsuleParams): Promise<Array<Capsule>> {
    const querystring = buildQueryString(queryParams);
    return api.get(`${BASE_PATH}/capsules/upcoming${querystring}`);
}

export async function getPastCapsules(queryParams?: CapsuleParams): Promise<Array<Capsule>> {
    const querystring = buildQueryString(queryParams);
    return api.get(`${BASE_PATH}/capsules/past${querystring}`);
}

export async function getAllCores(queryParams?: CoreParams): Promise<Array<Core>> {
    const querystring = buildQueryString(queryParams);
    return api.get(`${BASE_PATH}/cores${querystring}`);
}

export async function getCoreBySerial(serial: string, id = false): Promise<Core> {
    const response = await api.get(`${BASE_PATH}/cores/${serial}${id ? '?id=true' : ''}`);
    return !!response['error'] ? Promise.reject(response['error']) : response;
}

export async function getUpcomingCores(queryParams?: CoreParams): Promise<Array<Core>> {
    const querystring = buildQueryString(queryParams);
    return api.get(`${BASE_PATH}/cores/upcoming${querystring}`);
}

export async function getPastCores(queryParams?: CoreParams): Promise<Array<Core>> {
    const querystring = buildQueryString(queryParams);
    return api.get(`${BASE_PATH}/cores/past${querystring}`);
}

export async function getAllDragons(queryParams?: { id?: boolean, limit?: number, offset?: number }): Promise<Array<Dragon>> {
    const querystring = buildQueryString(queryParams);
    return api.get(`${BASE_PATH}/dragons${querystring}`);
}

export async function getDragonById(dragonId: string, id = false): Promise<Dragon> {
    const response = await api.get(`${BASE_PATH}/dragons/${dragonId}${id ? '?id=true' : ''}`);
    return !!response['error'] ? Promise.reject(response['error']) : response;
}

function buildQueryString(queryParams: any): string {
    let querystring = '';

    if (queryParams && Object.keys(queryParams).length) {
        querystring = '?';
        for (const key of Object.keys(queryParams)) {
            const value = (queryParams as any)[key];
            querystring += `${key}=${value}&`;
        }
        querystring = querystring.substring(0, querystring.length - 1);
    }

    return querystring;
}
