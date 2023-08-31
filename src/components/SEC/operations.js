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
      fetch("http://localhost:5000/api/v1/postuser", {
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
      console.log(res.user);
      toast.success("Authenticated Successfully");
      fetch("http://localhost:5000/api/v1/postuser", {
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
      fetch("http://localhost:5000/api/v1/postuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Account Created Successfully");
          my_modal_3.close();
        })
        .catch((err) => "");
    })
    .catch((err) => {
      if (err.message === "Firebase: Error (auth/email-already-in-use).") {
        return handleLogin(email, password).then((res) => {
          fetch("http://localhost:5000/api/v2/signature", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${email}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success("Authenticated Successfully");
              console.log(data);
              my_modal_3.close();
            })
            .catch((err) => console.log(err));
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
