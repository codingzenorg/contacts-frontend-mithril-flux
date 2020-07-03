const Bundler = require('parcel-bundler')
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')


const app = express()
app.use(createProxyMiddleware('/contacts', {
    target: 'http://localhost:8010',
    changeOrigin: true,
    logLevel: 'debug'
}))

const bundler = new Bundler('src/index.html')
app.use(bundler.middleware())

app.listen(Number(process.env.PORT || 1234))