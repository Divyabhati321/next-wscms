"use client"

import React from "react";
import { setBookState } from "@/redux/slices/bookSessionSlice";
import { useDispatch } from "react-redux";

const UniversityExpertCta = () => {
  const dispatch = useDispatch();

  return (
    <button      
      onClick={() => dispatch(setBookState({status: 'true' }))}
      className="rounded-[16px] animate-pulse duration-750 bg-gradient-to-r from-[rgba(0,106,201,1)] to-[rgba(98,170,238,1)] text-center text-xl text-white font-medium p-4 hover:shadow-lg"
    > 
      Contact University Expert
    </button>
  );
};

export default UniversityExpertCta;
