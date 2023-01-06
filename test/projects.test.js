let express = require("express");
var expect = require("chai").expect;
var request = require("request");

const url = "http://localhost:3000/api/projects";

describe("Get projects", function () {
  it("returns status 200 to check if api works", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("returns statusCode key in body to check if api give right result should be 200", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(200);
      done();
    });
  });

  it("returns the result as a collection of multiple projects with the exepected object keys", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.message).to.equal("Success");
      expect(body.data).to.be.a("array");
      expect(body.data.length).to.greaterThan(0);

      const project = body.data[0];
      expect(project).to.be.a("object");
      expect(project).to.have.all.keys([
        "_id",
        "title",
        "image",
        "link",
        "description",
      ]);
      done();
    });
  });
});

describe("Create a project", function () {
  it("returns status 200 with the newly created project result if payload is valid", function (done) {
    const payload = {
      title: "new test project",
      image: "images/kitten-2.jpg",
      link: "new link",
      description: "new description",
    };

    request.post(
      {
        url,
        form: payload,
      },
      function (error, response, body) {
        body = JSON.parse(body);

        expect(response.statusCode).to.equal(200);
        expect(body.message).to.equal("Success");
        expect(body.data).to.be.a("object");
        expect(body.data).to.have.all.keys(["acknowledged", "insertedId"]);
        done();
      }
    );
  });
});
