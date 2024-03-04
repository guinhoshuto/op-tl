import data from '../utils/fetch-json'
import { fastify } from 'fastify'
// import { Server, IncomingMessage } from 'http'

const app = fastify()

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
    const timeline = await data
    reply.status(200).send(timeline)
})

app.get('/period', async (request, reply) => {
   const timeline = await data 
//    const res = timeline.map((t: Event) => t.period)
   reply.status(200).send([... new Set(timeline.map((t: Event) => t.period))])
})

const port = process.env.PORT || 3333


app.listen({ port: +port }).then(() => {
    console.log(`HTTP server running | http://localhost:${port}`)
})