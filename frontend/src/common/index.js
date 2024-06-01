const backendDomain = "https://mern-test-app1-backend-kr9p5x0gc.vercel.app/"

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