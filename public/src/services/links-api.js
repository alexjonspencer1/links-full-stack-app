const URL = '/api';

export function getGolfCourse() {
    const url = `${URL}/golfcourses`;

    return fetch(url)
        .then(response => response.json());
}