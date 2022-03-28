import { IForm, IPositions, IRegistrationResponse, IUserObj } from 'types/form';
import axios, { AxiosError } from 'axios';

interface IPositionsResponse {
  positions: IPositions[];
}

interface ITokenResponse {
  token: string;
}

export const getUsers = async (count: number, page = 1) => {
  try {
    const users = await axios.get<IUserObj>(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`
    );
    return users.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPositions = async () => {
  try {
    const positions = await axios
      .get<IPositionsResponse>('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
      .then(({ data }) => data.positions);
    return positions;
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (data: IForm): Promise<IRegistrationResponse> => {
  try {
    const token = await axios.get<ITokenResponse>('https://frontend-test-assignment-api.abz.agency/api/v1/token');

    const userData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      userData.append(key, value);
    }

    const user = await axios.post<IRegistrationResponse>(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users',
      userData,
      {
        headers: { Token: token.data.token },
      }
    );

    return user.data;
  } catch (err) {
    const error = err as AxiosError;
    return error.response?.data;
  }
};
