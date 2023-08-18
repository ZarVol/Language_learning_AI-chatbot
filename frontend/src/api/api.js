const API_BASE_URL = 'http://localhost:5000/api';

export const signup = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.status === 200) {
    return await response.json();
  } else {
    throw new Error(await response.json().error);
  }
};

export const login = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.status === 200) {
    return await response.json().token;
  } else {
    throw new Error(await response.json().error);
  }
};
