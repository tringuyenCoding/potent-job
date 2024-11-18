import {User} from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const {fullname, email, phoneNumber, password, role} = req.body;

    if(!(email && password && fullname && phoneNumber && role)){
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    const user = await User.findOne({email});
    if(user){
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: encryptedPassword,
      role,
    });

    return res.status(200).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error); 
  }
};


export const login = async (req, res) => {
  try {
    const {email,password, role} = req.body

    if(!(email && password && role)){
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    const user = await User.findOne({email});

    if(!user){
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch){
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const tokenData ={
      userId: user._id,
    }

    const token = await jwt.sign(tokenData,process.env.SECRET_KEY, {expiresIn: "1d"});

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    }

    return res.status(200).cookie("token", token, {maxAge: 1*24*60*60*1000, httpsOnly: true, sameSite: 'strict'}).json({
      message: "Login Successful",
      user,
      success: true,
    });

  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  return res.status(200).cookie("token","",{maxAge:0}).json({
    message: "Logout Successful",
    success: true,
  });
};