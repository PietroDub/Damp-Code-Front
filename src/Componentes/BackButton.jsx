import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-[#6C48C5] px-4 py-2 rounded-lg text-white"
    >
      Voltar
    </button>
  );
};

export default BackButton;
