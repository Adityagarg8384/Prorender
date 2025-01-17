import { signIn } from "@/auth";
import { verifyPassword } from "@/helper/bcrypt";
import { User } from "@/models/user.schema";

// import { User } from "@/lib/models/user.schema";
import { zodLoginSchema } from "@/models/zod/zod.login.schema";
import { connecToDb } from "@/utils/connectToDb";
// import { zodLoginSchema } from "@/lib/models/zod .schema";

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
    // console.log(username, password);

    const result = zodLoginSchema.safeParse({ username, password });
    if (!result.success) {
      const validationError = fromZodError(result.error);

      return errorResponse(
        validationError.details[0].message,
        validationError.name
      );
    }
    const user = await User.findOne({ username: username });
    if (!user) {
      return errorResponse(
        "User Does not Exist",
        "authorisation error",
        StatusCodes.CONFLICT
      );
    }
    const isCorrectPassword = await verifyPassword(password, user?.password);
    if (!isCorrectPassword) {
      return errorResponse(
        "Invalid Credentials",
        "authorisation error",
        StatusCodes.CONFLICT
      );
    }
    const userid = user?._id.toString();
    const email = user?.email;
    await signIn("credentials", {
      username: username,
      userId: userid,
      email: email,

      // redirectTo: "/",

      // redirect: "/dashboard",
      // redirectTo: "/dashboard",
      redirect: false,
      // redirectTo: "/",
    });
    // return NextResponse.json({ message: create }, { status: 200 });
    return successResponse(
      "Succesfully Logged in",
      "Logged In",
      StatusCodes.ACCEPTED
    );
  } catch (error) {
    // return NextResponse.json({ message: error.message }, { status: 404 });
    return errorResponse(error.message, error.type, error.statusCode);
  }
}
