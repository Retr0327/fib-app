import { FibPagePropsType } from "types";
import FibPage from "@containers/FibPage";
import type { GetServerSideProps } from "next";
import { fetchAllIndexes, fetchCurrentValues } from "src/services";

function Home({ allValues, currentIndex }: FibPagePropsType) {
  return <FibPage currentIndex={currentIndex} allValues={allValues} />;
}

export default Home;

export const getServerSideProps: GetServerSideProps<FibPagePropsType> = async (
  context
) => {
  const [allIndexesResult, indexError] = await fetchAllIndexes();
  const [currentValueResult, currentValueError] = await fetchCurrentValues();

  return {
    props: {
      allValues: allIndexesResult.data,
      currentIndex: currentValueResult.data,
    },
  };
};
