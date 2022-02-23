function check_brackets(string_to_check) {
    /*
    this checks whether or not a string has matching brackets
    it will return false if there the first bracket is
      a closing bracket,
      there is an uneven amount of opening and closing brackets,
      or if there are two closing brackets in a row
  */
    var num_opening = 0;
    var num_closing = 0;
    var bracket_string = ''
    for (let i in string_to_check) {
      if (string_to_check[i] === "{") {
        num_opening++;
        bracket_string += string_to_check[i]
      } else if (string_to_check[i] === "}") {
        num_closing++;
        bracket_string += string_to_check[i]
      }
    }
    var balanced = bracket_string[0] !== '}'
    return (num_closing === num_opening && balanced)
  }
  
  let test_strings = [
    '{}', //true,
    '', //true
    '{abc...xyz}', //true
    '{1}{2}{2}{4}', //true
    '{this is a t{est} with balanced brackets}', //true
    '}{', //false
    '{{}', //false
    '{this is a test without balanced brackets', //false
    '{{{{}}' //false
  ]
  test_strings.forEach((test) => {
    console.log(check_brackets(test))
  })