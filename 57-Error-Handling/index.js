// exception handling in the javascript

// try , catch , finally

try {
  console.lag("This is a type of error that can occur in the program");
  console.log("the above one is a error ");
} catch (error) {
  console.error(error);
} finally {
  console.log(
    "this is the final message that will run even though the above blocks are the wrong "
  );
}

// --------------------  Example 2 --------------------

try {
  const dividend = Number(window.prompt("Enter a dividend"));
  const divisor = Number(window.prompt("Enter a divisor number "));

  if (divisor == 0) {
      throw new Error("you can't have zero as divisor ");
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Enter a valid input like a number in the field");
    }
    const result = dividend/divisor;
    console.log(result);
} catch (error) {
  console.error(error);
} finally {
  console.log("This is the final message ");
}
