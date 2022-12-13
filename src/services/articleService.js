const URL = 'http://localhost:3000/articles'

export async function getAllArticles() {
    try {
        const response = await fetch(URL + '?_sort=date&_order=desc')
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}

export async function addArticle(article) {
    try {
        console.log(JSON.stringify(article))
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        })
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}

export async function updateArticle(article) {
    try {
        const response = await fetch(URL + '/' + article.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        })
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}
