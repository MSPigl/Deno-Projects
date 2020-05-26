export interface HistoricalEvent {
    id: number,
    title: string,
    event_date_utc: string,
    event_date_unix: number,
    flight_number: number,
    details: string,
    links: {
      reddit: string,
      article: string,
      wikipedia: string
    }
}