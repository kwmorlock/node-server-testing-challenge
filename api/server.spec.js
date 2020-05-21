const supertest = require("supertest");

const server = require("./server.js");
const db = require("../data/connection");


// afterEach(async () => {
//   await db("auth").truncate();
// });

// describe("server", () => {
//   it("can run the tests", () => {
//     expect(true).toBeTruthy();
//   });

  describe("GET /", () => {
    it("should return http status code 200 OK", () => {
      return (
        supertest(server)
          .get("/")
          // .expect(200) // from supertest
          .then(response => {
            // from jest
            expect(response.status).toBe(200);
          })
      );
    });

//     it("should return { api: 'up' }", () => {
//       return supertest(server)
//         .get("/")
//         .then(response => {
//           expect(response.body).toEqual({ api: "up" });
//           expect(response.body.api).toBeDefined();
//           expect(response.body.api).toBe("up");
//         });
//     });
//   });

//   describe("GET /register", () => {
//     it("should return an array", () => {
//       return supertest(server)
//         .get("/register")
//         .then(response => {
//           expect(Array.isArray(response.body)).toBe(true);
//         });
//     });
//   });

//   describe("GET /auth", () => {
//     it("should return an array with 0 elements", () => {
//       return supertest(server)
//         .get("/auth")
//         .then(response => {
//           expect(response.body).toHaveLength(0);
//         });
//     });
//   });
});
