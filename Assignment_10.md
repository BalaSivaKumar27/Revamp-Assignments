1. What is JavaScript?
         JavaScript is a high-level programming language that enables interactive features on websites. It is primarily used for client-side scripting, though it can also be used for server-side development with environments like Node.js.

2. print the userage and useername ?

    var userage = 19
    var username =  "Bala SivaKumar"
    console.log(userage)
    console.log(username)

3. Comments in JavaScript:

         /*
             This function takes a name as input and returns a greeting message.
             It demonstrates how to pass parameters and return values in JavaScript.
          */

4. Operations :
   
        var a = 20 
        var b = 10 
        let addition = a + b
        let subtraction = a - b
        let multiplication = a * b
        let division = a / b
        console.log("Addition = ",addition)
        console.log("Subtraction = ",subtraction)
        console.log("Multiplication = ",multiplication)
        console.log("Division = ",division)

5. Data Types:

        let name = "Alice";                      // String type
        let age = 30;                            // Number type
        let isStudent = true;                    // Boolean type
        let colors = ["Red", "Green", "Blue"];   // Array type

6. Functions in js :

        function greetUser(name) {
              return "Hello, " + name + "!";
        }
        console.log(greetUser("Alice"));

7. if-else in js :

       let temperature = 32;
       if (temperature > 30) {
          console.log("It's hot outside!");
       }
       else {
          console.log("It's not that hot outside.");
       }

8. For loop :

       for (let i = 1; i <= 5; i++) {
              console.log(i);
        }

9. Loose Equality and Strict Equality :

        Loose equality (==):
                It allows for implicit type conversion.
                It compares values after converting them to a common type.
                Example :  console.log(5 == "5"); // true (because of type coercion)
   
        Strict equality (===):
                It does not perform any type conversion, so both the value and type must match exactly.
                Example : console.log(5 === "5"); // false (different types: number vs string)
