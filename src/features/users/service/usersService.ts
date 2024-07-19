import axios from "axios";

const userService = {
  searchUsers: async (params: { email: string; number?: string }, cancelToken: any) => {
    const response = await axios.get(`http://localhost:3000/users/search`, {
      params,
      cancelToken,
    });
    return response.data;
  },
};

export default userService;
