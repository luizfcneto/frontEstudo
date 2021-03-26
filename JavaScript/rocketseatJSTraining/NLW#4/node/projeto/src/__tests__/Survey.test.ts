import request from "supertest";
import { getConnection } from "typeorm";
import { app } from "../app";
import createConnection from "../database/index";

describe("Survey", () => {
  // Setando configuração com banco de dados e rodando migrations
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to create a new survey", async () => {
    const response = await request(app).post("/survey").send({
      title: "Title of the survey",
      description: "Description of the survey",
    });
    expect(response.status).toBe(201);
  });

  it("Should be be able to get all surveys", async () => {
    await request(app).post("/survey").send({
      title: "Title of the survey 2",
      description: "Description of the survey 2",
    });

    const response = await request(app).get("/survey");
    expect(response.body.length).toBe(2);
  });
});
