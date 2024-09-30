function videoPlay(id) {
  const urlSecreta = "https://youtube.com/urlsecreta.com" + id;
  console.log("Se esta reproducioendo desde la url " + urlSecreta);
}
function videoStop(id) {
  const urlSecreta = "https://youtube.com/urlsecreta.com" + id;
  console.log("Se esta pausando desde la url " + urlSecreta);
}

export class ClasesCursos {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }
  reproducir() {
    videoPlay(this.videoID);
  }
  pausar() {
    videoStop(this.videoID);
  }
}

class Course {
  constructor({ name, classes = [], comments = [] }) {
    this._name = name;
    this.classes = classes;
  }
  get name() {
    return this._name;
  }
  set name(nuevoNombre) {
    if (nuevoNombre === "Curso de programación básica") {
      console.error("Es web no básica");
    } else {
      this._name = nuevoNombre;
    }
  }
}

const cursoProgBasic = new Course({
  name: "Curso de programación básica",
});

/* cursoProgBasic.name();
cursoProgBasic.changeName("Mi curso de IA"); */

const cursoHTMLyCSS = new Course({
  name: "Curso HTML y CSS",
});
const cursoResponsiveDesigne = new Course({
  name: "Curso Responsive Designe",
});

class LearningPaths {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPaths({
  name: "Escuela de Desarrollo Web",
  courses: [cursoProgBasic, cursoHTMLyCSS, cursoResponsiveDesigne],
});
const escuelaDataScience = new LearningPaths({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasic,
    "Curso DataBusiness",
    "Curso Excel Tablas dinámicas",
  ],
});
const escuelaMarketing = new LearningPaths({
  name: "Escuela de Marjeting Digital",
  courses: [cursoProgBasic, "Curso Google Analitics", "Curso Email Marketing"],
});

class Student {
  constructor({
    name,
    email,
    username,
    points,
    x = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.points = points;
    this.socialMedia = {
      x,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const paulo1 = new Student({
  name: "PauloC",
  email: "paulo-123@hotmail.es",
  username: "pauloc",
  points: 100,
  learningPaths: [escuelaWeb, escuelaDataScience],
});

const miguel = {
  name: "MiguelA",
  username: "miguela",
  points: 1000,
  socialMedia: {
    x: "miguelaa",
    instagram: "miguelaa",
    facebook: undefined,
  },
  approvedCourses: ["Curso DataBusiness", "Curso de visualizacion de datos"],
  learningPaths: [escuelaWeb, escuelaMarketing],
};
