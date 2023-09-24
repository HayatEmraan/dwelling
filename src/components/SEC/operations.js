import {
  handleGoogle,
  handleFacebook,
  handleGithub,
  handleCreateUser,
  handleLogin,
  resetPassword,
} from "@/libs/security/AuthStore";
import { toast } from "react-hot-toast";
import { handleSignUp } from "./handleEP";
import { handleSignIn } from "./handleLG";

export const googleLogin = () => {
  return handleGoogle()
    .then((res) => {
      toast.success("Authenticated Successfully");
      fetch("https://dwelling-bright-server.vercel.app/api/v1/postuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: res.user.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          (async () => {
            const result = await handleSignIn(res.user.email);
            if (result.msg === "Cookie has been set.") {
              toast.success("Authenticated Successfully");
              my_modal_3.close();
            }
          })();
        })
        .catch((err) => "");
    })
    .catch((err) => {
      toast.error("Login Failed. Please Try Again!");
    });
};

export const facebookLogin = () => {
  return handleFacebook()
    .then((res) => {
      toast.success("Authenticated Successfully");
      my_modal_3.close();
    })
    .catch((err) => {
      toast.error("Login Failed. Please Try Again!");
    });
};

export const githubLogin = () => {
  return handleGithub()
    .then((res) => {
      toast.success("Authenticated Successfully");
      fetch("https://dwelling-bright-server.vercel.app/api/v1/postuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: res.user.email }),
      })
        .then((res) => res.json())
        .then((data) => my_modal_3.close())
        .catch((err) => "");
    })
    .catch((err) => {
      toast.error("Login Failed. Please Try Again!");
    });
};

export const loginAndSignup = (email, password) => {
  return handleCreateUser(email, password)
    .then((res) => {
      (async () => {
        const result = await handleSignUp(email);
        if (result.msg === "Success") {
          toast.success("Authenticated Successfully");
          my_modal_3.close();
        }
      })();
    })
    .catch((err) => {
      if (err.message === "Firebase: Error (auth/email-already-in-use).") {
        return handleLogin(email, password).then((res) => {
          (async () => {
            const result = await handleSignIn(email);
            if (result.msg === "Cookie has been set.") {
              toast.success("Authenticated Successfully");
              my_modal_3.close();
            }
          })();
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
