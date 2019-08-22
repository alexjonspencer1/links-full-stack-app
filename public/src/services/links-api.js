
const URL = '/api';

export function getGolfCourse() {
    const url = `${URL}/golfCourse`;

    return fetch(url)
        .then(response => response.json());
}