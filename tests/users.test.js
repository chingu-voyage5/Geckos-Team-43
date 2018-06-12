const request = require("supertest");
const app = require("../server");

describe("test GET  on api/users/test route", () => {
  it("shows the test route works", done => {
    request(app)
      .get("/api/users/test")
      .expect("Content-type", /json/)
      .expect(200, done);
  });
});
