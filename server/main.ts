import Timeline from '../services/timeline'
import data from '../utils/fetch-json'
import { fastify } from 'fastify'
// import { Server, IncomingMessage } from 'http'

const app = fastify()
const tl = new Timeline()

type Event = {
    period: string
    date: string
    description: string
    source: string
}

// get all
// list years
// list eras
// get by year
// get by era
// search 

app.get('/', async (request, reply) => {
    const timeline = await tl.getData()
    reply.status(200).send(timeline)
})

app.get('/periods', async (request, reply) => {
//    const res = timeline.map((t: Event) => t.period)
    const periods = await tl.listPeriods()

    reply.status(200).send(periods)
})

const port = process.env.PORT || 3333


app.listen({ port: +port }).then(() => {
    console.log(`HTTP server running | http://localhost:${port}`)
})