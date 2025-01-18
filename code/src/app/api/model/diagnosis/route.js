import { auth } from "@/auth";
import axiosInstance from "@/utils/axios.instance";
import { connecToDb } from "@/utils/connectToDb";

import { errorResponse } from "@/utils/error.response";
import { successResponse } from "@/utils/success.response";
import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { redirect } from "next/navigation";
import { fromZodError } from "zod-validation-error";
const { NextResponse } = require("next/server");

export async function POST(req, res) {
  //   const session = await auth();
  //   if (!session) {
  //     return redirect("/login");
  //   } needed for authentication
  try {
    await connecToDb();
    const data = await req.json();
    if (!data.symptoms) {
      return errorResponse(
        "All fields are mandatory",
        "Inside diagnosis model api",
        StatusCodes.BAD_REQUEST
      );
    }

    const symptoms = data?.symptoms;
    const age= parseInt(data?.age);
    const days= parseInt(data?.days)

    // age = parseInt(age, 10); 
    // days = parseInt(days, 10);

    console.log(age)
    console.log(days)
    console.log(symptoms);

    const payload = { "age": age, "days_of_symptoms": days, "symptoms": symptoms };
  //   const payload={
  //     "age":54,
  //     "days_of_symptoms":5,
  //     "symptoms": ["high_fever","chills", "cough"]
  // }
  //   console.log(payload);
    console.log(payload)
    const res = await axiosInstance.post(
      "https://prorender-4yue.onrender.com/predict",  
      payload
    );
    const ans = res?.data;
    console.log(ans);
    return successResponse(
      ans,
      "Data fetched succesfully",
      StatusCodes.ACCEPTED
    );
  } catch (error) {
    // console.log(error);
    // console.log(error)
    return errorResponse(error.message, error.type, error.statusCode);
  }
}
