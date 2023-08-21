import {
  handleGoogle,
  handleFacebook,
  handleGithub,
  handleCreateUser,
  handleLogin,
  resetPassword,
} from "@/libs/security/AuthStore";
import { toast } from "react-hot-toast";

export const googleLogin = () => {
  return handleGoogle()
    .then((res) => {
      toast.success("Authenticated Successfully");
      window.my_modal_3.close();
    })
    .catch((err) => {
      toast.error("Login Failed. Please Try Again!");
    });
};

export const facebookLogin = () => {
  return handleFacebook()
    .then((res) => {
      toast.success("Authenticated Successfully");
      window.my_modal_3.close();
    })
    .catch((err) => {
      toast.error("Login Failed. Please Try Again!");
    });
};

export const githubLogin = () => {
  return handleGithub()
    .then((res) => {
      toast.success("Authenticated Successfully");
      window.my_modal_3.close();
    })
    .catch((err) => {
      toast.error("Login Failed. Please Try Again!");
    });
};

export const loginAndSignup = (email, password) => {
  return handleCreateUser(email, password)
    .then((res) => {
      toast.success("Account Created Successfully");
      window.my_modal_3.close();
    })
    .catch((err) => {
      if (err.message === "Firebase: Error (auth/email-already-in-use).") {
        return handleLogin(email, password).then((res) => {
          toast.success("Authenticated Successfully");
          window.my_modal_3.close();
        });
      }
      toast.error("Login Failed. Please Try Again!");
    });
};

export const handlePassword = (email) => {
  return resetPassword(email)
    .then((res) => {
      toast.success("Password reset email sent!");
    })
    .catch((err) => {
      toast.error("Reset Failed. Please Try Again!");
    });
};
