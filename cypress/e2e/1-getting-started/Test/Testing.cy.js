// describe("Start testing User Registration, Login and Add Task flow", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:5173");
//   });

//   const email = `testuser${Math.floor(Math.random() * 1000)}@example.com`;
//   const password = "123456";
//   const newTitle = "Updated Task";
//   const updatedTitle = "Updated Task";
//   const DeletePassId = "MbyEgKObGDvKH8GFO9r5";

//   it("Regigters a new user", () => {
//     cy.visit("http://localhost:5173/register");
//     cy.get('input[placeholder="Email"]').type(email);
//     cy.get('input[placeholder="Password"]').type(password);
//     // cy.get('button').contains('Register').click();
//     cy.contains("Register").click();
//     cy.on("window:alert", (text) => {
//       expect(text).to.include("Registered successfully");
//     });
//     // cy.url().should('include', '/login');
//   });

//   it("Logs in with the new user", () => {
//     cy.visit("http://localhost:5173/login");
//     cy.get('input[placeholder="Email"]').type(email);
//     cy.get('input[placeholder="Password"]').type(password);
//     cy.contains("Login").click();
//     cy.on("window:alert", (text) => {
//       expect(text).to.include("Logged in successfully");
//     });
//     // cy.url().should('include', '/add');
//   });

//   it("Adds a new task", () => {
//     cy.visit('http://localhost:5173/add');
//     cy.get('input[name="title"]').type(newTitle);
//     cy.get('input[name="type"]').type("Car");
//     cy.get('input[name="ແຮງມາ"]').type("1200cc");
//     cy.get('input[name="ລາຍລະອຽດ"]').type("Test description");
//     cy.contains("Add").click();
//     cy.on("window:alert", (text) => {
//       expect(text).to.include("Added successfully");
//     });
//   });

//    it('Edits the task', () => {
//     cy.visit('http://localhost:5173/show');
//     cy.contains('td',newTitle).parent('tr').within(() => {
//       cy.contains('Edit').click({force: true});
//     });
//     // Wait for the navigation to form
//     cy.url().should('include', '/add');

//     cy.get('input[name="title"]').clear().type(updatedTitle);
//     cy.contains('Update').click();
//     cy.on('window:alert', (text) => {
//       expect(text).to.include('Updated successfully');
//     });
//   });

//   it("Shows the updated task", () => {
//     cy.visit("http://localhost:5173/show");
//     cy.contains(updatedTitle).should("exist");
//   });

//   it("Deletes the task", () => {
//     cy.contains('td',updatedTitle, {timeout: 6000})
//       .parent("tr")
//       .within(() => {
//         cy.contains("Delete").click({ force: true });
//       });
//     cy.contains(updatedTitle).should("not.exist");
//   });

//   // it("Deletes the task by ID", () => {
//   //   cy.visit("http://localhost:5173/show");

//   //   // Wait for the page to load and find the row with the matching ID
//   //   cy.get("table tbody tr").each(($row) => {
//   //     // Check if this row contains the correct ID
//   //     if ($row.text().includes(DeletePassId)) {
//   //       cy.wrap($row).within(() => {
//   //         cy.contains("Delete").click({ force: true });
//   //       });
//   //     }
//   //   });

//   //   // Optionally verify it's deleted
//   //   cy.get("table").should("not.contain", DeletePassId);
//   // });
// });

//===================
describe("Start testing User Registration, Login and Add Task flow", () => {
  // const email = `testuser${Math.floor(Math.random() * 10000)}@example.com`;
  const email = `phong911@gmail.com`;
  const password = "123456";
  const validEmail = `testuser${Math.floor(Math.random() * 1000)}@example.com`; 
  const validPassword = "validPassword123";
  const newTitle = "Updated Task";
  const updatedTitle = "Updated Task";


  // beforeEach(() => {
  //   cy.visit("http://localhost:5173");
  // });

  // it("Shows error for invalid email format during registration", () => {
  //   cy.visit("http://localhost:5173/register");
  //   cy.get('input[placeholder="Email"]').type(email);
  //   cy.get('input[placeholder="Password"]').type(password);
  //   cy.contains("Register").click();
  //   cy.contains("Invalid email format").should("exist");
  // });

  // it("Shows error for short password during registration", () => {
  //   cy.visit("http://localhost:5173/register");
  //   cy.get('input[placeholder="Email"]').type(validEmail);
  //   cy.get('input[placeholder="Password"]').type("123");
  //   cy.contains("Register").click();
  //   cy.contains("Password must be at least 6 characters long").should("exist");
  // });

  it("Registers a new user with valid email and password", () => {
    cy.visit("http://localhost:5173/register");
    cy.get('input[placeholder="Email"]').type(validEmail);
    cy.get('input[placeholder="Password"]').type(validPassword);
    cy.contains("Register").click();
    cy.on("window:alert", (text) => {
      expect(text).to.include("Registered successfully");
    });
  });

  it("Logs in with valid credentials", () => {
    cy.visit("http://localhost:5173/login");
    cy.get('input[placeholder="Email"]').type(validEmail);
    cy.get('input[placeholder="Password"]').type(validPassword);
    cy.contains("Login").click();
    cy.on("window:alert", (text) => {
      expect(text).to.include("Logged in successfully");
    });
  });

  // it("Registers a new user", () => {
  //   cy.visit("http://localhost:5173/register");
  //   cy.wait(500);
  //   cy.get('input[placeholder="Email"]').type(email);
  //   cy.wait(500);
  //   cy.get('input[placeholder="Password"]').type(password);
  //   cy.wait(500);
  //   cy.contains("Register").click();
  //   cy.wait(5000);
  //   cy.on("window:alert", (text) => {
  //     expect(text).to.include("Registered successfully");
  //   });
  // });

  // it("Logs in with the new user", () => {
  //   cy.visit("http://localhost:5173/login");
  //   cy.wait(500);
  //   cy.get('input[placeholder="Email"]').type(email);
  //   cy.wait(500);
  //   cy.get('input[placeholder="Password"]').type(password);
  //   cy.wait(500);
  //   cy.contains("Login").click();
  //   cy.wait(5000);
  //   cy.on("window:alert", (text) => {
  //     expect(text).to.include("Logged in successfully");
  //   });
  // });

  it("Adds a new task", () => {
    cy.visit("http://localhost:5173/add");
    cy.wait(500);
    cy.get('input[name="title"]').type(newTitle);
    cy.wait(500);
    cy.get('input[name="type"]').type("Car");
    cy.wait(500);
    cy.get('input[name="ແຮງມາ"]').type("1200cc");
    cy.wait(500);
    cy.get('input[name="ລາຍລະອຽດ"]').type("Test description");
    cy.wait(500);
    cy.contains("Add").click();
    cy.wait(5000);
    cy.on("window:alert", (text) => {
      expect(text).to.include("Added successfully");
    });
  });

  it("Edits the task", () => {
    cy.visit("http://localhost:5173/show");

    // Wait for the task to appear and target the correct row for editing
    cy.contains("td", newTitle, { timeout: 6000 })
      .parent("tr")
      .within(() => {
        cy.contains("Edit").click({ force: true });
      });
    cy.wait(5000);

    // Wait for navigation and edit the task
    cy.url().should("include", "/add");
    cy.get('input[name="title"]').clear().type(updatedTitle);
    cy.contains("Update").click();
    cy.wait(5000);

    // Confirm the update action
    cy.on("window:alert", (text) => {
      expect(text).to.include("Updated successfully");
    });
  });

  it("Shows the updated task", () => {
    cy.visit("http://localhost:5173/show");
    cy.wait(5000);

    // Wait for the updated title and verify it exists
    cy.contains("td", updatedTitle, { timeout: 6000 }).should("exist");
  });

  it("Deletes the task", () => {
    cy.visit("http://localhost:5173/show");

    // Ensure the updated task exists and then click delete
    cy.contains("td", updatedTitle, { timeout: 6000 })
      .parent("tr")
      .within(() => {
        cy.contains("Delete").click({ force: true });
      });

    // Confirm that the task is deleted
    cy.contains(updatedTitle).should("not.exist");
  });

  it("logout", () => {
    // After logging out, try to access a protected page like '/add'
    cy.visit("http://localhost:5173/logout");
    cy.wait(5000);

    // Ensure the user is redirected to the login page
    cy.url().should('include', '/login');
    cy.contains("Login").should("exist"); // The login page should show
  });
});
