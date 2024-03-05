import data from "../utils/fetch-json"

type Event = {
    period: string
    date: string
    description: string
    source: string
}
export default class Timeline{
    async getData(){
        const timeline = await data
        return timeline
    }

    async listPeriods(){
        const timeline = await this.getData()
        const periodsList = [... new Set(timeline.map((t: Event) => t.period))]
        const periods = periodsList.map((p: string | unknown, i: number) => {
            const period = timeline.filter((t: Event) => t.period === p)

            return {
                id:i , 
                period: p,
                first_event: period[0].date,
                last_event: period[period.length - 1].date
            }
        })
        return periods
    }

}