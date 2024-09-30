// Objeto literal
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso básico de HTML y CSS",
    "Curso práctico de HTML y CSS",
  ],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};

// Prototipos
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  /* this.aprobarCurso = function (nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
  } */
}

Student.prototype.aprobarCurso = function (nuevoCursoAvanzado) {
  this.cursosAprobados.push(nuevoCursoAvanzado);
};

const alumno1 = new Student("Paulo Galarza", 31, [
  "Curso de POO",
  "Curso de Diseño",
]);

// Prototipo con la sintaxis de una clase
class Student2 {
  constructor(name, age, cursosAprobados, email) {
    this.name = name;
    this.age = age;
    this.email = "erick@gmail.com";
    this.cursosAprobados = cursosAprobados;
  }
  aprobarCurso(nuevoCursoAvanzado) {
    this.cursosAprobados.push(nuevoCursoAvanzado);
  }
}

const erick = new Student2("Erick Suarez", 20, [
  "Curso de analisis de datos",
  "Curso de PHP",
]);

const paulo = new Student2("Erick Suarez", 20, [
  "Curso de analisis de datos",
  "Curso de PHP",
]);
const carol = new Student2("Erick Suarez", 20, [
  "Curso de analisis de datos",
  "Curso de PHP",
]);
