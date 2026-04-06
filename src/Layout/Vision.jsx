import React from "react";
import Button from "../Shared/Button";

const Vision = () => {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-2xl bg-linear-to-r from-[#1F7FA3] via-[#4FA69A] to-[#8BC34A] px-6 py-16 text-center text-slate-200 mt-7">
      <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        Be a Part of This Vision
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white sm:text-lg">
        Join thousands of students who are already transforming their careers and contributing to Pakistan's digital future.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button name="About SMIT" />
        <Button name="ENROLL NOW" />
      </div>
    </section>
  );
};

export default Vision;
