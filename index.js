// An Array of student objects.
const students = [
    {
      firstName: "Kelechi",
      lastName: "Otugbuali",
      age: 28,
      score: 85,
      courses: ["Maths", "English"]
    },
    {
      firstName: "Muslim",
      lastName: "Ibrahim",
      age: 25,
      score: 90,
      courses: ["Physics", "Chemistry"]
    },
    {
      firstName: "Silvester",
      lastName: "Musa",
      age: 27,
      score: 78,
      courses: ["Government", "History"]
    },
    {
      firstName: "Salma",
      lastName: "Abdulhadi",
      age: 21,
      score: 92,
      courses: ["Computer Science", "Further Maths"]
    },
    {
      firstName: "Merry",
      lastName: "Timi",
      age: 22,
      score: 88,
      courses: ["Economics", "Civic Education"]
    }
  ];
  
  // Destructuring to extract values and .map() to a new array.
  const studentDescriptions = students.map(({ firstName, lastName, age, score, courses }) => {
    return `${firstName} ${lastName} is ${age} years old and scored ${score}. He/She is taking: ${courses.join(", ")}`;
  });
  
  // forEach to log each student's details.
  studentDescriptions.forEach(description => {
    console.log(description);
  });
  