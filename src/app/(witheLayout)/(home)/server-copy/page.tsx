/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Charge from "@/components/Charge/Charge";
import Marque from "@/components/Marque/Marque";
import { useForm } from "react-hook-form";

type FormData = {
  nidNo: string;
  dob: string;
};

const ServerCopyUnoficial: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const currentCharge = 10;

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  const validateDate = (value: string) => {
    const pattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    return pattern.test(value) || "Invalid date format, use YYYY-MM-DD";
  };

  return (
    <div className=" mx-auto p-4 bg-gray-100 rounded-md h-screen">
      <Marque />

      <form
        className=" rounded px-8 pt-6 pb-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-center"
            htmlFor="nidNo"
          >
            NID NUMBER (10/17 DIGIT)
          </label>
          <Input
            id="nidNo"
            type="text"
            {...register("nidNo", { required: "NID Number is required" })}
            placeholder="Enter your NID number"
          />
          {errors.nidNo && (
            <span className="text-red-500 text-sm">{errors.nidNo.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-center"
            htmlFor="dob"
          >
            DATE OF BIRTH (YYYY-MM-DD)
          </label>
          <Input
            id="dob"
            type="text"
            {...register("dob", {
              required: "Date of Birth is required",
              validate: validateDate,
            })}
            placeholder="Example: 1990-11-30"
          />
          {errors.dob && (
            <span className="text-red-500 text-sm">{errors.dob.message}</span>
          )}
        </div>

        <Charge title={`আপনার একাউন্ট থেকে ${currentCharge} টাকা কাটা হবে।`} />

        <div className="flex items-center justify-center mt-4">
          <Button className="w-full" type="submit" variant="default">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ServerCopyUnoficial;
