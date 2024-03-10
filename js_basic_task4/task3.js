const emails = ["example1@yahoo.com", "myemail@mail.com", "trueemail@gmail.com"];

const filteredEmails = emails.filter(el => el.includes('gmail.com'));

console.log(filteredEmails);