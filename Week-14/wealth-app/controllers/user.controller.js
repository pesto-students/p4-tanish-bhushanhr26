import mongoose from "mongoose";

import users from "../models/user.model.js";

// export const getUserDetail = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await users.findById(id);
//     res.status(200);
//     res.json(user);
//   } catch (error) {
//     res.status(404);
//     res.json({ message: error.message });
//   }
// };

// To create Login  
export const createUser = async (req, res) => {
  const user = req.body;

  const newUser = new users(user);
  try {
    newUser.save(function (err, result) {
      if (err) {
        throw new Error(err);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    res.status(409);
    res.json({ message: error.message });
  }
};
// To create Login  




// export const updateUser = async (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   try {
//     const updatedUser = { name, _id: id };

//     await users.findByIdAndUpdate(id, updatedUser, { new: true });

//     res.status(200);
//     res.json(updatedUser);
//   } catch (error) {
//     res.status(404);
//     res.json({ message: error.message });
//   }
// };
