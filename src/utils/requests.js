const base_url = "https://localhost:8000";

const sendRequest = async (url, method, body, headers = {}) => {
  try {
    const response = await fetch(base_url + url, {
      method,
      body,
      headers,
    });
    const responseData = await response.json();
    if (!response.ok) throw new Error(responseData.status);
  } catch (err) {
    return err.message;
  }
  return { responseData };
};

const login = async (username, password) => {
  const res = await sendRequest("/users/auth/login/", "POST", {
    username,
    password,
  });
  return res;
};

const getPostsbyStream = async (pk) => {
  const res = await sendRequest("/streams/" + pk + "/posts/", "GET");
  return res;
};

const createPost = async (title, text, stream) => {
  const res = await sendRequest("/posts/create/", "POST", {
    title,
    text,
    stream,
  });
  return res;
};

const subscribetoStream = async (title) => {
  const res = await sendRequest("/streams/follow/", "PUT", { title });
  return res;
};

const deletePost = async (pk) => {
  const res = await sendRequest("/posts/delete/", "DELETE", { pk });
  return res;
};

const fetchPostsbyUser = async (pk) => {
  const res = await sendRequest("/users/" + pk + "/posts", "GET");
  return res;
};
