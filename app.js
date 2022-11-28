import { createInterface } from "readline";
import { getRandomNumber, areAllWomen, createNewRandomStudent, getYoungestStudent, getAvgAge, alphabeticalOrder, getSmartestStudent, getHighestAvgStudent, increaseGrades } from './lib/lib.js';

/* Lista de alumn@s*/
const students = [{
    age: 41,
    examScores: [5,8,9,2,6],
    gender: 'female',
    name: 'Laura'
  },
  {
    age: 23,
    examScores: [9,9,4,3,2],
    gender: 'female',
    name: 'Flor'
  },
  {
    age: 33,
    examScores: [7,6,7,1,2],
    gender: "female",
    name: "Victoria"
  },
  {
    age: 29,
    examScores: [9,10,10,8,1],
    gender: "male",
    name: "Raúl"
  },
  {
    age: 37,
    examScores: [6,6,8,5,7],
    gender: "male",
    name: "Ignacio"
  },
  {
    age: 45,
    examScores: [7,7,8,3,4],
    gender: "male",
    name: "Pedro"
  },
  {
    age: 24,
    examScores: [4,4,4,3,5],
    gender: "male",
    name: "Antonio"
  },
  {
    age: 19,
    examScores: [9,9,5,10,7],
    gender: "female",
    name: "Sara"
  }]

const maleNames = ['Pepe', 'Juan', 'Victor', 'Leo', 'Francisco', 'Carlos'];
const femaleNames = ['Cecilia', 'Ana', 'Luisa', 'Silvia', 'Isabel', 'Virginia'];
const genders = ['male', 'female'];


const prompt = createInterface({
    input: process.stdin, 
    output: process.stdout, 
});

/* Menu de opciones*/
const menu = `
1 -> Mostrar en formato de tabla todos los alumnos.
2 -> Mostrar por consola la cantidad de alumnos que hay en clase.
3 -> Mostrar por consola todos los nombres de los alumnos.
4 -> Eliminar el último alumno de la clase.
5 -> Eliminar un alumno aleatoriamente de la clase.
6 -> Mostrar por consola todos los datos de los alumnos que son chicas.
7 -> Mostrar por consola el número de chicos y chicas que hay en la clase.
8 -> Mostrar true o false por consola si todos los alumnos de la clase son chicas.
9 -> Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
10 -> Añadir un alumno nuevo con los siguientes datos: (nombre aleatorio, edad aleatoria entre 20 y 50 años, género aleatorio, listado de calificaciones vacío)
11 -> Mostrar por consola el nombre de la persona más joven de la clase.
12 -> Mostrar por consola la edad media de todos los alumnos de la clase.
13 -> Mostrar por consola la edad media de las chicas de la clase.
14 -> Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
15 -> Ordenar el array de alumnos alfabéticamente según su nombre.
16 -> Mostrar por consola el alumno de la clase con las mejores notas.
17 -> Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.
18 -> Añadir un punto extra a cada nota existente de todos los alumnos.
      Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.

Por favor, elija una de las opciones del menú de arriba:`

function getUserChoice() {
    const promise = new Promise((resolve) => {
        prompt.question(menu, (num) => {
            prompt.pause(); 
            resolve(parseInt(num))
        })
    })
    return promise;
}

let quit = false
while (!quit){

  let userChoice = await getUserChoice()
  
  switch(userChoice) {

    case 1:
        console.table(students)
        /*quit=true
        prompt.close()*/
    break
    
    case 2:
        console.log("Hay un total de ", students.length, "alumn@s en la clase.")
        /*quit=true
        prompt.close()*/
    break
    
    case 3:
        students.forEach(item => console.log("Nombre: ", item.name))
        /*quit=true
        prompt.close()*/
    break
    
    case 4:
        students.pop()
        console.table(students)
        /*quit=true
        prompt.close()*/
    break
    
    case 5:
        let randomNumber = getRandomNumber(0, students.length-1)
        students.splice(randomNumber, 1)
        console.table(students)
        /*quit=true
        prompt.close()*/
    break
    
    case 6:
        let showOnlyWomen = students.filter(student => student.gender === "female" )
        console.table(showOnlyWomen)
        /*quit=true
        prompt.close()*/
    break
    
    case 7:
        let men = students.filter(student => student.gender === "male" )
        let numberOfMen = men.length
        let women = students.filter(student => student.gender === "female" )
        let numberOfWomen = women.length
        console.log("Hay un total de " + numberOfMen + " hombres en clase.")
        console.log("Hay un total de " + numberOfWomen + " mujeres en clase.")
        /*quit=true
        prompt.close()*/
    break
    
    case 8:
        if(areAllWomen(students)){
            console.log("True, todas son mujeres.")
        } 
        else if(!areAllWomen(students)){
            console.log("False, no todos son mujeres.")
        }
       /*quit=true
        prompt.close()*/
    break
    
    case 9:
        let youngStudents = students.filter(student => student.age >= 20 & student.age <= 25 )
        youngStudents.forEach(item => console.log(item.name))
        /*quit=true
        prompt.close()*/
    break
    
    case 10:
        students.push(createNewRandomStudent(maleNames, femaleNames, genders))
        console.table(students)
        /*quit=true
        prompt.close()*/
    break
    
    case 11:
        console.log("La/El alumn@ más joven es: ", getYoungestStudent(students), ".")
        /*quit=true
        prompt.close()*/
    break
  
    case 12:
        console.log("La edad media de entre todos los alumnos es de ", getAvgAge(students), "años.")
        /*quit=true
        prompt.close()*/
    break
  
    case 13:
        let listWomen = students.filter(student => student.gender === "female" )
        console.log("La edad media de las alumnas es de", getAvgAge(listWomen), "años.")
        /*quit=true
        prompt.close()*/
    break
  
    case 14:
        let randomGrade
        students.forEach(item => {
            randomGrade = getRandomNumber(1, 10)
            item.examScores.push(randomGrade)
        })
        console.table(students)
        /*quit=true
        prompt.close()*/
    break

    case 15:
        alphabeticalOrder(students)
       /*quit=true
        prompt.close()*/
    break
    
    case 16:
        console.table(getSmartestStudent(students))
        /*quit=true
        prompt.close()*/
    break
  
    case 17:
        console.table(getHighestAvgStudent(students))
        /*quit=true
        prompt.close()*/
    break
  
    case 18:
        console.table(increaseGrades(students))
        /*quit=true
        prompt.close()*/
    break
  
    default:
        quit = true
        console.log("No has elegido ninguna de las opciones disponibles, por favor, vuelva a ejecutar la aplicación para intentarlo de nuevo.")
        prompt.close()
    break
  }
}