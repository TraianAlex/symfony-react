function fetchJson(url, options) {
    return fetch(url, Object.assign({
        credentials: 'same-origin',
    }, options))
        .then(response => {
            return response.json();
        });
}

export function getRepLogs() {
    return fetchJson('/reps')
        .then(data => data.items);

    // return fetch('/reps', {
    //     credentials: 'same-origin'
    // })
    //     .then(response => {
    //         //return response.json();
    //         return response.json().then((data) => data.items)
    //     });
}

export function deleteRepLog(id) {
    return fetchJson(`/reps/${id}`, {
        method: 'DELETE'
    });

    // return fetch(`/reps/${id}`, {
    //     credentials: 'same-origin',
    //     method: 'DELETE'
    // });
}

export function createRepLog(repLog) {
    return fetchJson('/reps', {
        method: 'POST',
        body: JSON.stringify(repLog),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
