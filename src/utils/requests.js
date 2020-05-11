import { useCallback } from "react";

const base_url="https://localhost:8000";

const sendRequest = useCallback(
  async (url, method = "GET", body = null, headers = {}) => {
    try {
      const response = await fetch(base_url+ url, {
        method,
        body,
        headers,
      });
      const responseData = await response.json();
      if (!response.ok) throw new Error(responseData.status);
    } catch (err) {
      console.log(err);
    }
    return { responseData };
  }
);

const login = (username,password) =>{
    const res= await sendRequest("/users/auth/login/","POST",{username,password});
    return res;
}

const getPostsbyStream = () =>{
    const res=await sendRequest("/streams/<int:pk>/posts/");
    return res;
}

const createPost = (title , text , stream) =>{
    const res= await sendRequest("/posts/create/", "POST" ,{title,text,stream});
    return res;

}

const subscribetoStream = (title)=>{
    const res= await sendRequest("/streams/follow/","PUT",{title});
    return res;
}

const deletePost = (pk)=>{
    const res= await sendRequest("/posts/delete/","DELETE",{pk});
    return res;
}

const fetchPostsbyUser=()=>{
    const res= await sendRequest("/users/<int:pk>/posts");
    return res;
}