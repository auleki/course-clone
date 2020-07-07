import {
    handleResponse,
    handleError
} from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/courses/";

export function getCourses() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError)
};

export function getCourseBySlug(slug) {
    return fetch(baseUrl + "?slug=" + slug)
        .then(res => {
            if (!res.ok) throw new Error("Network response was not ok fetching slugs");
            return res.json().then(courses => {
                if (courses.length !== 1) throw new Error("Courses not found: " + slug);
                return courses[0];
            });
        })
        .catch(handleError);
};

export function saveCourse(course) {
    return fetch(baseUrl + (course.id || ""), {
            method: course.id ? "PUT" : "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                ...course,
                authorId: parseInt(course.id, 10)
            })
        })
        // .then(console.log('saved data'))
        .then(handleResponse)
        .catch(handleError)
};


export function deleteCourse(courseId) {
    return fetch(baseUrl + courseId, {
            method: "DELETE"
        })
        .then(handleResponse)
        .catch(handleError)
};