const request = require("supertest");
const app = require("../server");

describe("test GET  on api/profile/test route", () => {
  it("shows the test route works", done => {
    request(app)
      .get("/api/profile/test")
      .expect("Content-type", /json/)
      .expect(200, done);
  });
});
