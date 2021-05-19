/* eslint-disable import/no-anonymous-default-export */
export default {
    getTodos: () => {
        return fetch('/user/todos')
            .then(response => {
                if (response.status != 401) {
                    return response.json().then(data => data);
                } else {
                    return { message: { msgBody: "unauthorized" }, msgError: true };
                }
            });
    }

}