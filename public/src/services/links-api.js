
const url = //INSERT URL HERE

export function getGolfCourse() {
    const url = `${URL}/` //PUT SOMETHING HERE TOO

    return fetch(url)
        .then(response => response.json());
}