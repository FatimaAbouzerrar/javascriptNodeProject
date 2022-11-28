export {
    getRandomNumber,
    areAllWomen,
    getRandomGender,
    getRandomName,
    createNewRandomStudent,
    alphabeticalOrder,
    getYoungestStudent,
    sumAges,
    getAvgAge,
    getSmartestStudent,
    getHighestAvgStudent,
    increaseGrades
}


/*case 5*/
function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
/*case 8*/
function areAllWomen(students){
    let allWomen = false
    let anyMan = students.some(student => student.gender === "male")
    if (anyMan === false){
    allWomen = true
    }
    return allWomen
}

function getRandomName(newGender, femaleNames, maleNames) {
    let newName
    let randomNameNumber
    if (newGender === "female"){
        randomNameNumber = getRandomNumber(0, femaleNames.length - 1)
        newName = femaleNames[randomNameNumber]
    }
    else if (newGender === "male"){
        randomNameNumber = getRandomNumber(0, maleNames.length - 1)
        newName = maleNames[randomNameNumber]
    }
    return newName
}

function getRandomGender(genders) {
    let randomGenderNumber = getRandomNumber(0, 1)
    let newGender = genders[randomGenderNumber]
    return newGender
}

/*case 10*/
function createNewRandomStudent(maleNames, femaleNames, genders) {
    let randomGender = getRandomGender(genders)
    let randomName = getRandomName(randomGender, femaleNames, maleNames)
    let randomAge = getRandomNumber(20, 50)
    let newRandomStudent = {name: randomName, age: randomAge, gender: randomGender, examScores: []}
    return newRandomStudent
}

/*case 11*/
function getYoungestStudent(students) {
    let smallestAge = 51
    let studentName
    students.forEach(student => {
        if (student.age < smallestAge) {
            studentName = student.name
            smallestAge = student.age
        }
    })
  return studentName
}

function sumAges(students) {
    let sumOfAges = 0
    students.forEach(item => {
        sumOfAges += item.age
    })
    return sumOfAges
}

/*case 12*/
function getAvgAge(students) {
    let sumOfAges = sumAges(students)
    let averageAge = sumOfAges / students.length
    return averageAge
}

/*case 15*/
function alphabeticalOrder(students) {
    students.sort((studentA, studentB) => { 
        if (studentA.name > studentB.name){
            return 1
        }
        if (studentA.name < studentB.name){
            return -1
        }
        return 0
    })
    console.table(students)
}

/*case 16*/
function getSmartestStudent(students) {
    let bestScore = 0
    let bestScoredStudent = "No hay notas"
    students.forEach(student => {
        if (student.examScores.length === 0) {
            return
        }
        let totalScore = student.examScores.reduce(
            (a, b) => a + b
        )
        if (totalScore > bestScore) {
            bestScore = totalScore
            bestScoredStudent = student
        }
    })
    return bestScoredStudent
}

/*case 17*/
function getHighestAvgStudent(students) {
    let bestAvg = 0
    let bestAvgStudent
    let studentAndAvg = ""
    students.forEach(student => {
        if (student.examScores.length === 0) {
            return
        }
        let totalScore = student.examScores.reduce(
            (a, b) => a + b
        )
        let avgScore = totalScore / student.examScores.length
        if (avgScore > bestAvg) {
            bestAvg = avgScore
            bestAvgStudent = student.name
        }
        studentAndAvg = {name: bestAvgStudent, averageScore: bestAvg}
    })
    return studentAndAvg
}

/*case 18*/
function increaseGrades(students) {
    students.forEach(student => {
        if (student.examScores.length === 0){
        student.examScores.push(10)
            return
        }
        student.examScores = student.examScores.map(score => {
            if (score !== 10) {
                score += 1
            }
            return score
        })
    })
    return students
}