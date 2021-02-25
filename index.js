import express from 'express'
import { port } from './config/environment.js'
import connectToDatabase from './lib/connectToDb.js'
import logger from './lib/logger.js'
import router from './config/router.js'
import errorHandler from './lib/errorHandler.js'
import path from 'path' // * <—- a new import from node


const app = express()

const __dirname = path.resolve() // * this line has been added, note this has a double underscore before it

async function startServer() {
  try {
    await connectToDatabase()

    console.log('🤖 Database has connected')

    app.use(express.static(`${__dirname}/client/build`)) // * <— This line has been added before the express json middleware, it will allow the app to respond to a request with contents of this directory “build”, which will contain our React App code.

    app.use(express.json())

    app.use(logger)

    app.use('/api', router)

    app.use('/*', (_, res) => res.sendFile(`${__dirname}/client/build/index.html`)) // * <— This additional route handler has been added between the router and error handler middleware, it means that any incoming request that does not match a route in router should respond back with our frontend.

    app.use(errorHandler)

    app.listen(port, () => console.log(`🤖 Up and running on port ${port}`))
  } catch (err) {
    console.log('🤖 Something went wrong starting the App')
    console.log(err)
  }
}

startServer()