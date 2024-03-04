import jsonfile from 'jsonfile'
import path from 'node:path'

const jsonPath = path.join('output.json')

const data = jsonfile.readFile(jsonPath)
                .then(r => r)
export default data
