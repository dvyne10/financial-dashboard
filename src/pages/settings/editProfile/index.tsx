import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useUserContext } from "../../../hooks/useUser";
import EditPencil from "../../../components/svgs/EditPencil";

interface FormData {
  name: string;
  userName: string;
  email: string;
  password: string;
  dob: string;
  permanentAddress: string;
  presentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

const EditProfile: React.FC = () => {
  const { userData, saveUserData } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: userData,
  });

  const onSubmit = (data: FormData) => {
    saveUserData(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} aria-label="Edit Profile Form">
      {/* form group one */}
      <div>
        <AvatarWrapper>
          <AvatarLabel htmlFor="avatarInput">
            <Avatar
              src={userData.avatar || "https://via.placeholder.com/100"}
              alt="Profile"
            />
            <EditCircle>
              <EditPencil />
            </EditCircle>
          </AvatarLabel>
          <AvatarInput
            id="avatarInput"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () =>
                  saveUserData({
                    ...userData,
                    avatar: reader.result as string,
                  });
                reader.readAsDataURL(file);
              }
            }}
            aria-label="Upload a profile picture to update your avatar"
          />
        </AvatarWrapper>
      </div>

      <FormDivs>
        {/* group 1 */}
        <InputGroupWrapper>
          <InputWrapper>
            <InputLabel htmlFor="name">Your Name</InputLabel>
            <TextInput
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
            />
            {errors.name && <Error>{errors.name.message}</Error>}
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="username">User Name</InputLabel>
            <TextInput
              id="username"
              type="text"
              {...register("userName", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "Username must not exceed 20 characters",
                },
              })}
              placeholder="User Name"
            />
            {errors.userName && <Error>{errors.userName?.message}</Error>}
          </InputWrapper>
        </InputGroupWrapper>

        {/* group 2 */}
        <InputGroupWrapper>
          <InputWrapper>
            <InputLabel htmlFor="email">Email</InputLabel>
            <TextInput
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="User Name"
            />
            {errors.email && <Error>{errors.email?.message}</Error>}
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="password">Password</InputLabel>
            <TextInput
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must contain at least one letter, one number, and a minimum of 8 characters",
                },
              })}
              placeholder="Password"
            />
            {errors.password && <Error>{errors.password?.message}</Error>}
          </InputWrapper>
        </InputGroupWrapper>

        {/* group 3 */}
        <InputGroupWrapper>
          <InputWrapper>
            <InputLabel htmlFor="dob">Date of Birth</InputLabel>
            <TextInput
              id="dob"
              type="date"
              {...register("dob", { required: "Date of Birth is required" })}
            />
            {errors.dob && <Error>{errors.dob.message}</Error>}
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="presentAddress">Present Address</InputLabel>
            <TextInput
              id="presentAddress"
              {...register("presentAddress", {
                required: "Present Address is required",
              })}
              placeholder="Present Address"
            />
            {errors.presentAddress && (
              <Error>{errors.presentAddress.message}</Error>
            )}
          </InputWrapper>
        </InputGroupWrapper>

        {/* group 4 */}
        <InputGroupWrapper>
          <InputWrapper>
            <InputLabel htmlFor="permanentAddress">
              Permanent Address
            </InputLabel>
            <TextInput
              id="permanentAddress"
              {...register("permanentAddress", {
                required: "Permanent Address is required",
              })}
              placeholder="Permanent Address"
            />
            {errors.permanentAddress && (
              <Error>{errors.permanentAddress.message}</Error>
            )}
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="city">City</InputLabel>
            <TextInput
              id="city"
              {...register("city", { required: "City is required" })}
              placeholder="City"
            />
            {errors.city && <Error>{errors.city.message}</Error>}
          </InputWrapper>
        </InputGroupWrapper>

        {/* group 5 */}
        <InputGroupWrapper>
          <InputWrapper>
            <InputLabel htmlFor="postalCode">Postal Code</InputLabel>
            <TextInput
              id="postalCode"
              {...register("postalCode", {
                required: "Postal Code is required",
                pattern: {
                  value: /^[0-9]{5}$/,
                  message: "Invalid postal code",
                },
              })}
              placeholder="Postal Code"
            />
            {errors.postalCode && <Error>{errors.postalCode.message}</Error>}
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="country">Country</InputLabel>
            <TextInput
              id="country"
              {...register("country", { required: "Country is required" })}
              placeholder="Country"
            />
            {errors.country && <Error>{errors.country.message}</Error>}
          </InputWrapper>
        </InputGroupWrapper>

        <SaveButton type="submit">Save</SaveButton>
      </FormDivs>
    </Form>
  );
};

export default EditProfile;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 22px;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const InputGroupWrapper = styled.div`
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const FormDivs = styled.div`
  display: flex;
  gap: 22px;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 11px;
  color: ${({ theme }) => theme.colors.text};
`;

const TextInput = styled.input`
  max-width: 418px;
  width: 418px;
  height: 50px;
  border-radius: 15px;
  border: ${({ theme }) => "1px solid " + theme.colors.border};
  padding: 16px 20px;
  box-sizing: border-box;
  &::placeholder {
    color: ${({ theme }) => theme.colors.lightCardText};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 385px;
    width: 285px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 285px;
    width: 285px;
  }
`;

const SaveButton = styled.button`
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.text};
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  box-sizing: border-box;
  max-width: 190px;
  height: 50px;
  align-self: flex-end;
  width: 190px;
  &:hover {
    background-color: #777777;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 100%;
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const AvatarInput = styled.input`
  display: none;
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const AvatarLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; /* Make the label clickable */
`;

const EditCircle = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  right: 0px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #777777;
  }
  cursor: pointer;
`;
