import express, { Request, Response } from "express";
import { User } from "../models/user.model";
import z from "zod";

export const UserRoute = express.Router()

const CreateUserZodSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  email: z.string(),
  password: z.string().min(8).max(16),
  role: z.string().optional()
})

// Create user Endpoint
UserRoute.post("/create-user", async (req: Request, res: Response) => {
  try {
    const body = await CreateUserZodSchema.parseAsync(req.body);
    const user = await User.create(body)
    res.status(200).json({
      success: true,
      message: "User Create Successfully",
      user
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message

    })
  }
})


// Get All users Endpoint
UserRoute.get("/", async (req: Request, res: Response) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    message: "User retrieved successfully",
    users
  });
});

// Get Single User Endpoint
UserRoute.get("/:id", async (req: Request, res: Response) => {
  const userId = req.params.id
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "User retrieved successfully",
    user
  });
});

// Update Single User Endpoint
UserRoute.patch("/:id", async (req: Request, res: Response) => {
  const userId = req.params.id;
  const updateData = req.body;
  const user = await User.findByIdAndUpdate(userId, updateData, { new: true })
  res.status(200).json({
    success: true,
    message: "User updated successfully",
    user
  })
})

// Delete user Endpoint
UserRoute.delete("/:id", async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await User.findByIdAndDelete(userId)
  res.status(200).json({
    success: true,
    message: "User deleted successfully",
    user
  })
})