import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "30vh auto",
};

const Spinner = ({ loading }) => {
  return (
    <>
      <ClipLoader
        color={"white"}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Spinner;
