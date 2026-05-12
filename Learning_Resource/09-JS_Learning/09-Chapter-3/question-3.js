// 3. Group Users by Role

// Problem Statement
// You are given a list of users with roles.

// Write a function that groups users by their role.

// Input

const users = [
  { name: "Anil", role: "Admin" },
  { name: "Sunil", role: "User" },
  { name: "Rita", role: "Admin" },
  { name: "Karan", role: "User" },
  { name: "Pooja", role: "Manager" }
];

// Expected Output
// {
//   Admin: ["Anil", "Rita"],
//   User: ["Sunil", "Karan"],
//   Manager: ["Pooja"]
// }


// ------------------------------------------------ main logic -------------------------------------------------

const grouped = users.reduce((acc, u) => {

  if (!acc[u.role]) {

    acc[u.role] = [];
    
  }

  acc[u.role].push(u.name);
  return acc;

}, {});

console.log(grouped);


