import api from 'https://deno.land/x/api/index.ts';
import {
    Capsule, CapsuleParams, Core, CoreParams, Dragon,
    HistoricalEvent, CompanyInfo, ApiInfo, LandingPad, Launch,
    LaunchParams
} from './models/index.ts';

const BASE_PATH = 'https://api.spacexdata.com/v3';

export async function getAllCapsules(queryParams?: CapsuleParams): Promise<Array<Capsule>> {
    return fetchList('/capsules', queryParams);
}

export async function getCapsuleBySerial(serial: string, id = false): Promise<Capsule> {
    return fetchOne(`/capsules/${serial}`, id);
}

export async function getUpcomingCapsules(queryParams?: CapsuleParams): Promise<Array<Capsule>> {
    return fetchList('/capsules/upcoming', queryParams);
}

export async function getPastCapsules(queryParams?: CapsuleParams): Promise<Array<Capsule>> {
    return fetchList('/capsules/past', queryParams);
}

export async function getAllCores(queryParams?: CoreParams): Promise<Array<Core>> {
    return fetchList('/cores', queryParams);
}

export async function getCoreBySerial(serial: string, id = false): Promise<Core> {
    return fetchOne(`/cores/${serial}`, id);
}

export async function getUpcomingCores(queryParams?: CoreParams): Promise<Array<Core>> {
    return fetchList('/cores/upcoming', queryParams);
}

export async function getPastCores(queryParams?: CoreParams): Promise<Array<Core>> {
    return fetchList('/cores/past', queryParams);
}

export async function getAllDragons(queryParams?: { id?: boolean, limit?: number, offset?: number }): Promise<Array<Dragon>> {
    return fetchList('/dragons', queryParams);
}

export async function getDragonById(dragonId: string, id = false): Promise<Dragon> {
    return fetchOne(`/dragons/${dragonId}`, id);
}

export async function getAllHistoricalEvents(
    queryParams?: {
        id?: number, start?: string, end?: string, flight_number?: number,
        limit?: number, offset?: number, sort?: 'id' | 'start' | 'end' | 'flight_number',
        order?: 'asc' | 'desc'
    }
): Promise<Array<HistoricalEvent>> {
    return fetchList('/history', queryParams);
}

export async function getHistoricalEventById(eventId: number, id = false): Promise<HistoricalEvent> {
    return fetchOne(`/history/${eventId}`, id);
}

export async function getCompanyInfo(): Promise<CompanyInfo> {
    return fetchOne('/info');
}

export async function getApiInfo(): Promise<ApiInfo> {
    return fetchOne('');
}

export async function getAllLandingPads(queryParams?: { id?: number, limit?: number, offset?: number }): Promise<Array<LandingPad>> {
    return fetchList('/landpads', queryParams);
}

export async function getLandingPadById(padId: string, id = false): Promise<LandingPad> {
    return fetchOne(`/landpads/${padId}`, id);
}

export async function getAllLaunches(queryParams?: LaunchParams): Promise<Array<Launch>> {
    return fetchList('/launches', queryParams);
}

async function fetchOne(url: string, id = false): Promise<any> {
    const response = await api.get(`${BASE_PATH}${url}${id ? '?id=true' : ''}`);
    return !!response['error'] ? Promise.reject(response['error']) : response;
}

async function fetchList(url: string, queryParams?: any): Promise<Array<any>> {
    const querystring = buildQueryString(queryParams);
    return api.get(`${BASE_PATH}${url}${querystring}`);
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
