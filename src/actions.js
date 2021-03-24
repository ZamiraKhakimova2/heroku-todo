export const loadingTodos = () => {
    return function (dispatch) {
        dispatch({type: 'start'});

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'load',
                    payload: json
                });
            });
    };
};
export const deleteTodo = (id) => {
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/posts/", {
            method: 'delete'
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'delete', payload: id })
            })
    }
}
