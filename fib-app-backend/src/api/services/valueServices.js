import { FIB_APP } from "../model/index.js";

const getAllValus = async () => {
  try {
    const result = await FIB_APP.query(`SELECT * FROM values`);
    return result.rows;
  } catch (error) {
    console.log("getAllValus: ", error);
  }
};

const createValusByFibIndex = async (fibIndex) => {
  try {
    const result = await FIB_APP.query(
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
