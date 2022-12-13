const URL = 'http://localhost:3000/users'

export async function checkUserPseudo(pseudo) {
    try {
        const response = await fetch(URL + '?pseudo=' + pseudo)
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}

export async function checkUserEmail(email) {
    try {
        const response = await fetch(URL + '?email=' + email)
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}

export async function checkUserEmailAndPassword(identifiers) {
    try {
        const response = await fetch(URL + '?email=' + identifiers.email + '&password=' + identifiers.password)
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}

export async function addUser(user) { 
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}

export async function updateUser(userId, user) {
    try {
        const response = await fetch(URL + '/' + userId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}
