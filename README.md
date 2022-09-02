<!-- GIVEN I need a new, secure password
X  WHEN I click the button to generate a password
X  THEN I am presented with a series of prompts for password criteria
X  WHEN prompted for password criteria
X  THEN I select which criteria to include in the password
X  WHEN prompted for the length of the password
X  THEN I choose a length of at least 8 characters and no more than 128 characters
X  WHEN asked for character types to include in the password
X  THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special X  characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page -->