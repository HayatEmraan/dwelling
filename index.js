const email = "emraanhasanhayat@gmail.com";
const obscuredEmail = email.replace(
  /^(.{3}).*?(?=@)/,
  (_, firstThreeChars) => firstThreeChars + "*".repeat(5)
);

console.log(obscuredEmail);
