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
    if (!data.Gender || !data.Symptoms || !data.Causes || !data.Disease) {
      return errorResponse(
        "All fields are mandatory",
        "Inside treatment model api",
        StatusCodes.BAD_REQUEST
      );
    }
    const Gender = data?.Gender;
    const Symptoms = data?.Symptoms.join(", ");
    const Causes = data?.Causes.join(", ");
    const Disease = data?.Disease.join(", ");
    const payload = { Gender, Symptoms, Causes, Disease };

    // console.log(payload);
    const res = await axiosInstance.post(
      "https://medicineprediction2.onrender.com/predict3",
      payload
    );
    const ans = res?.data;
    return successResponse(
      ans,
      "Data Fetched Succesfuly",
      StatusCodes.ACCEPTED
    );
  } catch (error) {
    return errorResponse(error.message, error.type, error.statusCode);
  }
}
