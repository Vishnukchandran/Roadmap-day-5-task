const jsonData = {
    "Name": "R2-D2",
    "Gender": "Male",
    "Homeworld": "Naboo",
    "Born": "33BBY",
    "Jedi": "no"
  };

  //for loop
  console.log("For loop");
  for (let i = 0; i < Object.keys(jsonData).length; i++) {
    const key = Object.keys(jsonData)[i];
    const value = jsonData[key];
    console.log(`${key}: ${value}`);
  }


   //for in loop
   console.log("For in loop");
   for (const key in jsonData) {
    const value = jsonData[key];
    console.log(`${key}: ${value}`);
  }



  //for of loop
  console.log("For of loop");
  for (const [key, value] of Object.entries(jsonData)) {
    console.log(`${key}: ${value}`);
  }


   //forEach loop
   console.log("forEach loop");
   Object.keys(jsonData).forEach(key => {
    const value = jsonData[key];
    console.log(`${key}: ${value}`);
  });