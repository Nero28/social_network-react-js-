import * as axios from 'axios';





const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '290d2384-20a8-40f2-a13d-7e674f3a213e'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });

    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },

    follow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            });
    },

    getProfile(userId) {
        return instance.get('profile/' + userId)
            .then(response => {
                return response.data
            });
    }

}


export const authAPI = {

    me() {
        return instance.get('auth/me')
            .then(response => {
                return response.data
            });
    }
}
