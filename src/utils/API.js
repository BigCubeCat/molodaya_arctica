

const fetch = async (url) => {
    const response = await fetch(url, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`, // notice the Bearer before your token
        },
    })
    const result = response.json()
    return result
}