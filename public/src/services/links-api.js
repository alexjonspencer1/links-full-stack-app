const URL = '/api';

export function getGolfCourse() {
    const url = `${URL}/golfcourses`;

    return fetch(url)
        .then(response => response.json());
}

export function getCourse(id) {
    const url = `${URL}/golfcourses/${id}`;
    return fetch(url)
        .then(response => response.json());
}

export function addCourse(golfCourse) {
    const url = `${URL}/golfcourses`;
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(golfCourse)
    })
        .then(response => response.json());
}

export function getRegions() {
    const url = `${URL}/regions`;
    return fetch(url)
        .then(response => response.json());
}