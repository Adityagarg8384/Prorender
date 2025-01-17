import { hashPassword } from "@/helper/bcrypt";
import { User } from "@/models/user.schema";

import { zodUserSchema } from "@/models/zod/zod.login.schema";
import { connecToDb } from "@/utils/connectToDb";
import { errorResponse } from "@/utils/error.response";
import { successResponse } from "@/utils/success.response";

import { StatusCodes } from "http-status-codes";
import { fromZodError } from "zod-validation-error";
const { NextResponse } = require("next/server");

export async function POST(req, res) {
  try {
    await connecToDb();
    const data = await req.json();

    const username = data.username;
    const password = data.password;
    const fullName = data.fullName;

    const result = zodUserSchema.safeParse({ username, password, fullName });
    if (!result.success) {
      const validationError = fromZodError(result.error);

      return errorResponse(
        validationError.details[0].message,
        validationError.name
      );
    }
    const usernameExist = await User.findOne({ username: username });
    // const fullNameExist = await User.findOne({ fullName: fullName });
    if (usernameExist) {
      return errorResponse(
        "Username Exists",
        "authorisation error",
        StatusCodes.CONFLICT
      );
    }
    // if (fullNameExist) {
    //   return errorResponse(
    //     "fullName Exists",
    //     "authorisation error",
    //     StatusCodes.CONFLICT
    //   );
    // }
    const hashedPass = await hashPassword(password);
    const response = await User.create({
      username,
      name: fullName,
      password: hashedPass,
    });
    // return NextResponse.json({ message: create }, { status: 200 });
    return successResponse(
      "Created user succesfully",
      response,
      StatusCodes.ACCEPTED
    );
  } catch (error) {
    // return NextResponse.json({ message: error.message }, { status: 404 });
    return errorResponse(error.message, error.type, error.statusCode);
  }
}
