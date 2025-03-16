import React from "react";
import { BeatLoader } from "react-spinners";

const Spinner: React.FC = () => {
  return (
    <div className="fixed inset-0 backdrop-blur-3xl bg-black/30 flex items-center justify-center h-svh">
      <BeatLoader size={25} color="#29212b" />
    </div>
  );
};

export default Spinner;
