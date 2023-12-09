import { useState } from "react";

import Layout from "../components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const onSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
    <div className="col-md-5 forgot-password-col2">
<h1>Reset Your Password</h1>
<form onSubmit={onSubmitHandler}>
<div className=" mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">
Email address
</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="form-control"
id="exampleInputEmail1"
aria-describedby="emailHelp"/>
<div id="emailHelp" className="form-text">
reset email will sent to this email
</div>
</div>
<div className="d-flex justify-content-between btn-goup">
<button type="submit" className="btn ">
Reset Password
</button>
<button className="btn signin">
<Link to="/Signin" className="signin">
Sing In
</Link>
</button>
</div>
</form>
</div>
</div>
    </Layout>

  );
};

export default ForgotPassword;
