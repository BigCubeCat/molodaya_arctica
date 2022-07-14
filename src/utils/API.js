import { AsyncStorage } from 'react-native';

export const fetchAPI = async (url) => {
    const token = await AsyncStorage.getItem('access_token');
    if(!token){
        console.error('no token')
        throw new Error("no token")
    }
    const response = await fetch(url, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })

    const result = await response.json()
    if (response.status !== 200) {
        console.log('error:', result)
        throw new Error(result.message)
    }
    return result
}