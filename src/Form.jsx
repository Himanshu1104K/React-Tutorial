import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is Required"),
    email: yup.string().email().required("Email is Required"),
    age: yup.number().positive().integer().min(18).required("Age is Required"),
    password: yup.string().min(4).max(20).required("Password is Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form">
      <h2>Enter Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name..."
          {...register("fullName")}
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}
        <input type="text" placeholder="Email..." {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <input type="number" placeholder="Age..." {...register("age")} />
        {errors.age && <p>{errors.age.message}</p>}
        <input
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        {errors.password && (
          <p style={{ textWrap: "wrap" }}>{errors.password.message}</p>
        )}
        <input
          type="password"
          placeholder="Confirm Password..."
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <input type="submit" />
      </form>
    </div>
  );
};
