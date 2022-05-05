const express = require('express')

const app = express()

const { uuid, isUuid } = require('uuidv4') //id unico universal

app.use(express.json())

/*
tipos de parametros (formas do cliente que está requisitando as rotas de informação, enviar um tipo de informação.)
query params: filtros e paginação
1) query params: principalmente para filtros e paginação
2) Route Params: identificar recursos (na hr de atualizar ou deletar)
3) request body: conteudo na hora de criar ou editar um recurso
*/ 

/**
 * Middleware
 * É um interceptador de requisições, podendo interromper totalmente a requisição ou alterar dados da requisição.
 */

const projects = []

//utilizando funções, com labe ([FUNCTION], url)
function logRequests(request, response, next) {
    const { method, url } = request

    const logLabel = `[${method.toUpperCase()}] ${url}`

    console.log(logLabel)

    return next()
}

//função validar id, executado no put e delete
function validateProjectId(request, response, next) {
    const { id } = request.params

    if(!isUuid(id)) {
        return response.status(400).json({ error: 'Invalid project ID' })
    }

    return next()
}

app.use(logRequests)
// ou entao, ao inves de chamar a função antes da função de put e delete...
// app.use('/projects/:id', validateProjectId)

app.get('/projects', (request, response) => {
    const { title } = request.query

    console.log(title)

    const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects
    return response.json(results)
})

app.post('/projects', (request, response) => {

    const { title, owner } = request.body
    const project = {id: uuid(), title, owner}

    projects.push(project)

    // console.log(title)
    // console.log(owner)

    return response.json(project)
})

app.put('/projects/:id', validateProjectId, (request, response) => {
    // const params = request.params
    // console.log(params)

    const { id } = request.params
    const { title, owner } = request.body

    const projectIndex = projects.findIndex(project => project.id === id)

    if(projectIndex < 0) {
        return response.status(400).json({ error: 'Project not found.' })
    }

    const project = {
        id,
        title,
        owner,
    }

    projects[projectIndex] = project
    
    return response.json(project)
})


app.delete('/projects/:id', validateProjectId, (request, response) => {
    // const params = request.params
    // console.log(params)

    const { id } = request.params

    const projectIndex = projects.findIndex(project => project.id === id)

    if(projectIndex < 0) {
        return response.status(400).json({ error: 'Project not found.' })
    }

    projects.splice(projectIndex, 1)

    return response.status(204).send()
})

app.listen(3333, () => {
    console.log('Back-end started!😍')
})

