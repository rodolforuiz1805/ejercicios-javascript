console.log("Exercise #4");

function buscarCursosComunes() {
    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];
    let cursosComunes = "";

    for (let course of student1Courses) {
        if (student2Courses.includes(course)) {
            cursosComunes += `${course} es el curso común.`;
        }
    }

    document.getElementById("resultadoCursosComunes").innerHTML = cursosComunes;
}