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
