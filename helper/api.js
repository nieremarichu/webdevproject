var axios = require('axios')
// var url = "http://localhost:4000"
var url = "http://localhost:3000"

function login(body)  {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/login`, body)
        .then(resp => {
            resolve(resp)
        })
        .catch(err => {
            resolve(err)
        })
    })
}

function addPlaces(body) {
    return new Promise((resolve, reject) => {
        axios.post('${url}/route/create', body), then (resp => {
            resolve(resp)
        }).catch(err => {
            reject(err)
        })
    })
} 

function deleteRoute(id) {
    return new Promise((resolve, reject) => {
        let newUrl = '${url}/route/delete/${id}'
        axios.post(newUrl).then(resp => {
            resolve(resp)
        }).catch(err => {
            reject(err)
        })
    })
}

function deletePlaces(id) {
    return new Promise((resolve, reject) => {
        new newUrl = '${url}/places/delete/${id}'
        axios.post(newUrl).then(resp => {
            resolve(resp)
        }).catch(err => {
            reject(err)
        })
    })
}

function updateRoute(id, body) {
    return new Promise((resolve, reject) =>{
        let newUrl = '${url}/route/update/${id}'
        axios.post(newUrl,body).then(resp => {
            resolve(resp)
        }).catch(err => {
            reject(err)
        })
    })
}

function updatePlaces(id, body) {
    return new Promise((resolve, reject) =>{
        let newUrl = '${url}/places/update/${id}'
        axios.post(newUrl,body).then(resp => {
            resolve(resp)
        }).catch(err => {
            reject(err)
        })
    })
}

function retrieveAll() {
    return new Promise((resolve, reject)=>{
        axios.get('${url}/getUsers').then(resp => {
            resolve(resp)
        }).catch(err => {
            reject(err)
        })
    })
}

export default {
    login,
    deleteRoute,
    deletePlaces,
    updateRoute,
    updatePlaces,
    retrieveAll

}