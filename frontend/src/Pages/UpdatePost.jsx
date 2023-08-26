import React, { useContext, useState } from "react";

import {
  Heading,
  Textarea,
  FormLabel,
  Button,
  useToast,
  Center,
  Input,
} from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "./ContextApi";

const UpdatePost = () => {
  const { id } = useParams();
  const { authState } = useContext(AppContext);

  const navigate = useNavigate();

  const toast = useToast();

  const [postData, setPostData] = useState({
    content: "",

    likes: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://eight6app-0xzc.onrender.com/media/post-update/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: authState.token,
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.message === "Item is Updated") {
          toast({
            title: "post is Updated",

            status: "success",
          });
          navigate("/");
        }
      });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setPostData({ ...postData, [name]: value });
  };

  return (
    <Center p={10}>
      <form onSubmit={handleSubmit} style={{ width: "40%" }}>
        <Heading>Update The Post</Heading>

        <FormLabel>
          Content:
          <Textarea
            name="content"
            value={postData.content}
            onChange={handleChange}
            bg="blue.100"
          />
        </FormLabel>

        <FormLabel>
          Likes:
          <Input
            name="likes"
            value={postData.likes}
            onChange={handleChange}
            bg="blue.100"
          />
        </FormLabel>

        <Button
          type="submit"
          colorScheme="blue"
          width={"97%"}
          padding={"0px 130px"}
        >
          UpdateThePost
        </Button>
      </form>
    </Center>
  );
};

export default UpdatePost;
