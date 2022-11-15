import Logo from "../../Svg/Logo.svg";
import Arrow from "../../Svg/Arrows.svg";
import { useForm } from "react-hook-form";

function AddUser() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="add_user">
      <div className="head_user">
        <img className="logo" src={Logo} alt="logo" />
        <div className="title">
          <img src={Arrow} alt="arrow" />
          <h1>Return to List Page</h1>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="add">
          <label htmlFor="name">Name Surname</label>
          <input
            id="name"
            {...register("Name Surname", {
              required: "required!",
              minLength: { value: 4, message: "Minimum 4 character!" },
              maxLength: { value: 60, message: "Maximum 60 character!" },
              pattern: {
                value: /^[a-zA-Z]+$/g,
                message: "Only Letters",
              },
            })}
            type="text"
            placeholder="Enter name and surname"
          />
          <span className="form_err">{errors?.["Name Surname"]?.message}</span>
        </div>
        <div className="add">
          <label htmlFor="country">Country</label>
          <input
            id="country"
            {...register("Country", {
              required: "required!",
              minLength: { value: 2, message: "Minimum 2 character!" },
              maxLength: { value: 40, message: "Maximum 40 character!" },
              pattern: {
                value: /^[a-zA-Z]+$/g,
                message: "Only Letters",
              },
            })}
            type="text"
            placeholder="Enter a country"
          />
          <span className="form_err">{errors?.Country?.message}</span>
        </div>
        <div className="add">
          <label htmlFor="city">City</label>
          <input
            id="city"
            {...register("City", {
              required: "required!",
              minLength: { value: 2, message: "Minimum 2 character!" },
              maxLength: { value: 40, message: "Maximum 40 character!" },
              pattern: {
                value: /^[a-zA-Z]+$/g,
                message: "Only Letters",
              },
            })}
            type="text"
            placeholder="Enter a city"
          />
          <span className="form_err">{errors?.City?.message}</span>
        </div>
        <div className="add">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            {...register("Email", { required: "required!" })}
            type="email"
            placeholder="Enter a email (abc@xyz.com)"
          />
          <span className="form_err">{errors?.Email?.message}</span>
        </div>
        <div className="btn">
          <button className="add_btn">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
