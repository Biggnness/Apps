
import type { Level } from './types';

export const ALL_LEVELS: Level[] = [
  {
    id: 0,
    title: "Hello, World!",
    task: "Write a Java program to print 'Hello, World!' to the console.",
    context: "The `System.out.println()` method is a standard way to output text in Java. It's the first step for any new programmer.",
    starterCode: `public class Main {\n  public static void main(String[] args) {\n    // Your code here\n  }\n}`,
    solution: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}`,
    explanation: "This code defines a class `Main` with a `main` method, the entry point of the program. `System.out.println(\"Hello, World!\");` prints the string followed by a new line.",
    hint: "Use `System.out.println()` and put the text `\"Hello, World!\"` inside the parentheses."
  },
  {
    id: 1,
    title: "Variables",
    task: "Declare an integer variable named `score` and assign it the value `100`.",
    context: "Variables are containers for storing data values. In Java, you must declare the type of the variable (e.g., `int` for integers, `String` for text).",
    starterCode: `public class Main {\n  public static void main(String[] args) {\n    // Your code here\n    System.out.println(score);\n  }\n}`,
    solution: `public class Main {\n  public static void main(String[] args) {\n    int score = 100;\n    System.out.println(score);\n  }\n}`,
    explanation: "The line `int score = 100;` declares a variable of type `int` named `score` and initializes it with the value `100`.",
    hint: "The syntax for declaring and assigning an integer is `int variableName = value;`."
  },
  {
    id: 2,
    title: "Basic Arithmetic",
    task: "Create two integer variables, `a` and `b`, with values 10 and 5. Then, print their sum.",
    context: "Java supports standard arithmetic operators like `+` (addition), `-` (subtraction), `*` (multiplication), and `/` (division).",
    starterCode: `public class Main {\n  public static void main(String[] args) {\n    int a = 10;\n    int b = 5;\n    // Your code here\n  }\n}`,
    solution: `public class Main {\n  public static void main(String[] args) {\n    int a = 10;\n    int b = 5;\n    System.out.println(a + b);\n  }\n}`,
    explanation: "The expression `a + b` calculates the sum of the two variables, which is then passed to `System.out.println()` to be printed.",
    hint: "Use the `+` operator inside `System.out.println()` to add `a` and `b`."
  },
  {
    id: 3,
    title: "Strings",
    task: "Create a `String` variable called `greeting` with the value \"Hello\" and print it.",
    context: "Strings are used for storing text. They are declared with the `String` type and enclosed in double quotes.",
    starterCode: `public class Main {\n  public static void main(String[] args) {\n    // Your code here\n  }\n}`,
    solution: `public class Main {\n  public static void main(String[] args) {\n    String greeting = "Hello";\n    System.out.println(greeting);\n  }\n}`,
    explanation: "This declares a `String` variable `greeting` and assigns it the text \"Hello\". Then it prints the content of the variable.",
    hint: "Use the `String` keyword and double quotes for the value."
  },
  {
    id: 4,
    title: "If Statements",
    task: "Given an integer `x`, print \"Positive\" if it's greater than 0.",
    context: "Conditional logic is crucial. The `if` statement executes a block of code only if a specified condition is true.",
    starterCode: `public class Main {\n  public static void main(String[] args) {\n    int x = 10;\n    // Your code here\n  }\n}`,
    solution: `public class Main {\n  public static void main(String[] args) {\n    int x = 10;\n    if (x > 0) {\n      System.out.println("Positive");\n    }\n  }\n}`,
    explanation: "The condition `x > 0` evaluates to true, so the code inside the `{}` block is executed, printing \"Positive\".",
    hint: "The structure is `if (condition) { ... }`. The condition for 'greater than' is `>`."
  },
  {
    id: 5,
    title: "If-Else Statements",
    task: "Given an integer `temp`, print \"Hot\" if it's above 30, and \"Cool\" otherwise.",
    context: "The `if-else` statement allows you to execute one block of code if a condition is true, and another if it's false.",
    starterCode: `public class Main {\n  public static void main(String[] args) {\n    int temp = 35;\n    // Your code here\n  }\n}`,
    solution: `public class Main {\n  public static void main(String[] args) {\n    int temp = 35;\n    if (temp > 30) {\n      System.out.println("Hot");\n    } else {\n      System.out.println("Cool");\n    }\n  }\n}`,
    explanation: "Since `temp` (35) is greater than 30, the `if` block runs. If `temp` were 25, the `else` block would run.",
    hint: "After your `if` block, add an `else { ... }` block for the alternative case."
  },
  {
    id: 6,
    title: "For Loops",
    task: "Write a `for` loop that prints the numbers from 1 to 5.",
    context: "Loops are used to execute a block of code repeatedly. A `for` loop is great when you know how many times you want to loop.",
    starterCode: `public class Main {\n  public static void main(String[] args) {\n    // Your code here\n  }\n}`,
    solution: `public class Main {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 5; i++) {\n      System.out.println(i);\n    }\n  }\n}`,
    explanation: "The loop initializes `i` to 1, continues as long as `i <= 5`, and increments `i` by 1 after each iteration. `System.out.println(i)` prints the current value of `i`.",
    hint: "A `for` loop has three parts: initialization, condition, and increment. `for (int i = 1; i <= 5; i++)`."
  },
  {
    id: 7,
    title: "While Loops",
    task: "Use a `while` loop to print numbers from 1 to 3.",
    context: "A `while` loop executes a block of code as long as a specified condition is true. You need to manage the loop variable manually.",
    starterCode: `public class Main {\n  public static void main(String[] args) {\n    int i = 1;\n    // Your code here\n  }\n}`,
    solution: `public class Main {\n  public static void main(String[] args) {\n    int i = 1;\n    while (i <= 3) {\n      System.out.println(i);\n      i++;\n    }\n  }\n}`,
    explanation: "The loop checks if `i <= 3`. If true, it prints `i` and then `i++` increments `i`. This repeats until `i` becomes 4, at which point the condition is false.",
    hint: "Don't forget to increment your counter variable inside the loop to avoid an infinite loop!"
  },
  {
    id: 8,
    title: "Arrays",
    task: "Create an integer array named `numbers` that holds the values 10, 20, and 30.",
    context: "Arrays are used to store multiple values of the same type in a single variable.",
    starterCode: `public class Main {\n  public static void main(String[] args) {\n    // Your code here\n    System.out.println(numbers[0]);\n  }\n}`,
    solution: `public class Main {\n  public static void main(String[] args) {\n    int[] numbers = {10, 20, 30};\n    System.out.println(numbers[0]);\n  }\n}`,
    explanation: "`int[] numbers` declares an array of integers. The values `{10, 20, 30}` are assigned to it. `numbers[0]` accesses the first element.",
    hint: "Use `int[]` to declare an integer array and curly braces `{}` to list the initial values."
  },
  {
    id: 9,
    title: "Array Iteration",
    task: "Given an array of strings, loop through it and print each name.",
    context: "You can use a 'for-each' loop to easily iterate over all elements in an array without using an index.",
    starterCode: `public class Main {\n  public static void main(String[] args) {\n    String[] names = {"Alice", "Bob", "Charlie"};\n    // Your code here\n  }\n}`,
    solution: `public class Main {\n  public static void main(String[] args) {\n    String[] names = {"Alice", "Bob", "Charlie"};\n    for (String name : names) {\n      System.out.println(name);\n    }\n  }\n}`,
    explanation: "The `for (String name : names)` loop iterates through the `names` array. In each iteration, the current element is assigned to the `name` variable.",
    hint: "The syntax for a for-each loop is `for (Type variableName : arrayName)`."
  },
  {
    id: 10,
    title: "Methods",
    task: "Create a method named `sayHello` that prints \"Hello from a method!\".",
    context: "Methods (or functions) are blocks of code that perform a specific task. They help organize code and make it reusable.",
    starterCode: `public class Main {\n  // Your method here\n\n  public static void main(String[] args) {\n    sayHello();\n  }\n}`,
    solution: `public class Main {\n  public static void sayHello() {\n    System.out.println("Hello from a method!");\n  }\n\n  public static void main(String[] args) {\n    sayHello();\n  }\n}`,
    explanation: "We define a `static` method `sayHello` that takes no arguments (`()`) and returns nothing (`void`). It's called from `main`.",
    hint: "Define the method with `public static void methodName() { ... }`."
  },
  {
    id: 11,
    title: "Method Parameters",
    task: "Create a method `greet` that takes a `String` name as a parameter and prints \"Hello, [name]!\".",
    context: "Parameters allow you to pass values into a method, making it more flexible and powerful.",
    starterCode: `public class Main {\n  // Your method here\n\n  public static void main(String[] args) {\n    greet("JavaBean");\n  }\n}`,
    solution: `public class Main {\n  public static void greet(String name) {\n    System.out.println("Hello, " + name + "!");\n  }\n\n  public static void main(String[] args) {\n    greet("JavaBean");\n  }\n}`,
    explanation: "The `greet` method now accepts a `String` parameter called `name`. Inside the method, we can use this `name` variable.",
    hint: "Declare the parameter inside the parentheses: `(String name)`. Use `+` to concatenate strings."
  },
  {
    id: 12,
    title: "Method Return Values",
    task: "Create a method `add` that takes two integers, `a` and `b`, and returns their sum.",
    context: "Methods can return a value to the code that called them. You must specify the return type instead of `void`.",
    starterCode: `public class Main {\n  // Your method here\n\n  public static void main(String[] args) {\n    int result = add(5, 3);\n    System.out.println(result);\n  }\n}`,
    solution: `public class Main {\n  public static int add(int a, int b) {\n    return a + b;\n  }\n\n  public static void main(String[] args) {\n    int result = add(5, 3);\n    System.out.println(result);\n  }\n}`,
    explanation: "The method signature `public static int add(...)` indicates it returns an `int`. The `return` keyword sends the value of `a + b` back.",
    hint: "Change `void` to the type you want to return (e.g., `int`) and use the `return` keyword."
  },
  {
    id: 13,
    title: "Basic Classes & Objects",
    task: "Create a simple `Dog` class with a method `bark()` that prints \"Woof!\". Then, create a Dog object and call its `bark()` method.",
    context: "Java is an object-oriented language. A class is a blueprint for creating objects, which have properties and methods.",
    starterCode: `class Dog {\n  // Your method here\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    // Create object and call method\n  }\n}`,
    solution: `class Dog {\n  public void bark() {\n    System.out.println("Woof!");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Dog myDog = new Dog();\n    myDog.bark();\n  }\n}`,
    explanation: "We define a `Dog` class. In `main`, `new Dog()` creates an instance (object) of the class. We then use the `.` operator to call the `bark()` method on that object.",
    hint: "Create a new object with `ClassName objectName = new ClassName();`. Call methods with `objectName.methodName();`."
  },
  {
    id: 14,
    title: "Constructors",
    task: "Add a constructor to the `Car` class that accepts a `String` for the car's color and prints it.",
    context: "A constructor is a special method that is called when an object is created. It's often used to initialize the object's properties.",
    starterCode: `class Car {\n  String color;\n  // Your constructor here\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Car myCar = new Car("Blue");\n  }\n}`,
    solution: `class Car {\n  String color;\n  public Car(String carColor) {\n    color = carColor;\n    System.out.println(color + " car created.");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Car myCar = new Car("Blue");\n  }\n}`,
    explanation: "The constructor `public Car(String carColor)` has the same name as the class. It runs when `new Car(\"Blue\")` is called, setting the `color` property.",
    hint: "A constructor looks like a method but has no return type and its name must match the class name exactly."
  }
];
