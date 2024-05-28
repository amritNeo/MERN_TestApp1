const backendDomain = "http://localhost:8080"

const summaryAPI = {
    signup : {
        url : `${backendDomain}/api/signup`,
        method : "POST"
    },
    signin : {
        url : `${backendDomain}/api/signin`,
        method : "POST"
    },
    userDetails : {
        url : `${backendDomain}/api/userDetails`,
        method : "GET"
    },
    logout : {
        url : `${backendDomain}/api/logout`,
        method : "GET"
    },
    allUsers : {
        url : `${backendDomain}/api/userList`,
        method : "GET"
    },
    updateUser : {
        url : `${backendDomain}/api/updateUser`,
        method : "POST"
    }
    
}

export default summaryAPI