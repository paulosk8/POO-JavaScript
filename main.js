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

