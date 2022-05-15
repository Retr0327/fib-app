import { pgCli } from "../models";

const getAllValus = async () => {
  try {
    const result = await pgCli.query(`SELECT * FROM values`);
    return result.rows;
  } catch (error) {
    console.log("getAllValus: ", error);
  }
};

const createValusByFibIndex = async (fibIndex: number) => {
  try {
    const result = await pgCli.query(
      `INSERT INTO values 
          (number)
       VALUES ($1);
      `,
      [fibIndex]
    );
    return result.rows;
  } catch (error) {
    console.log("createValusByFibIndex: ", error);
  }
};

export { getAllValus, createValusByFibIndex };
