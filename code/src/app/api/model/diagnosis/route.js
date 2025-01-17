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
    // console.log(symptoms);

    const payload = { symptoms };

    // console.log(payload);
    const res = await axiosInstance.post(
      "https://diseaseprediction-im3y.onrender.com/predict",
      payload
    );
    const ans = res?.data;
    // console.log(ans);
    return successResponse(
      ans,
      "Data fetched succesfully",
      StatusCodes.ACCEPTED
    );
  } catch (error) {
    // console.log(error);
    return errorResponse(error.message, error.type, error.statusCode);
  }
}
