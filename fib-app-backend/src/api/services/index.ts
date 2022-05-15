import { pgCli } from "../models";

const getAllValus = async () => {
  try {
    const result = await pgCli.query(`SELECT * FROM fib_values`);
    return result.rows;
  } catch (error) {
    console.log("getAllValus: ", error);
  }
};

const createValusByFibIndex = async (fibIndex: number) => {
  try {
    const result = await pgCli.query(
      `INSERT INTO fib_values 
          (fib_number)
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
