// preciso verificar se a idade do aluno é maio que sete anos

//para alunos entre 8 a 12 anos: infantil
//para alunos entre 13 a 17 anos: adolescente
//para alunos maiores de 18: adulto

let idadeAluno = 8;

if(idadeAluno > 7 && idadeAluno < 13){
    console.log("Aluno está na categoria infantil");
} else if (idadeAluno > 12 && idadeAluno < 18) {
    console.log("Aluno está na categoria adolescente");
} else if (idadeAluno >= 18) {
    console.log("Aluno esta na cetegoria adulto")
}
else {
    console.log("O aluno nao pode se matricular!");
}

