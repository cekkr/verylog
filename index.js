import {Edge} from 'edge.js'

const edge = Edge.create()

async function run(){
    const template = `<h1> Hello {{ username || 'Guest' }}! </h1>`

    let res = await edge.renderRaw(template, { username: 'virk' })

    console.log(res)
}

run()