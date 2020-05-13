/**
 *
 * For-in
 *
 *
 *
 *
 *
 */

let employee = {
  userId: "rirani",
  jobTitleName: "Developer",
  firstName: "Romin",
  lastName: "Irani",
  preferredFullName: "Romin Irani",
  employeeCode: "E1",
  region: "CA",
  phoneNumber: "408-1234567",
  emailAddress: "romin.k.irani@gmail.com",
};

for (prop in employee) {
  console.log(prop);
}
