import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

//Custom Hook
export const useCreateMyUser = () => {
  const createMyUserRequest = async (user: CreateUserRequest) => {
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    });

    if(!response.ok) {
      throw new Error("Failed to create user");
    }
  };

  //passing fetch request to useMutation hook that is gonna handle all those stuff
  const { mutateAsync: createUser, isLoading, isError, isSuccess } = useMutation(createMyUserRequest);

  return {
    createUser,
    isLoading, 
    isError,
    isSuccess,
  }
};