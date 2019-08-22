const URL = 'https://grandgolfcourses.herokuapp.com/api';

export function getGolfCourse() {
    const url = `${URL}/golfcourse`;

    return fetch(url)
        .then(response => response.json());
}