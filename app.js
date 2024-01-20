const express = require('express')
const { toFileStream } = require('qrcode')
const { PassThrough } = require('stream')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const protocol = req.headers['x-forwarded-proto'] // check if https
    const { data, size } = req.query //get data and size in query
    const width = size || 300 // set default size to 300

    if (!data) { // if no data in query (undefined)
        return res.send(`Usage: ${protocol || 'http'}://${req.get('host')}?data=your-data&size=your-size(optional)`)
    }

    const passThroughStream = PassThrough()

    toFileStream(passThroughStream, data, {
        type: 'png',
        width: width,
        margin: 0.5,
        // color: { dark: '#97D700', light: '#fffffe' }
    })

    passThroughStream.pipe(res)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})