import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Center,
} from "@chakra-ui/react";

const TopFiveUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://eight6app-0xzc.onrender.com/user/analytics/users/top-active`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.formattedTopActiveUsers);
        setData(res.formattedTopActiveUsers);
      });
  }, []);

  return (
    <>
      <Center>
        <Heading>Top 5 Users</Heading>
      </Center>

      {data.length > 0 &&
        data.map((elem) => (
          <Card key={elem.user._id} border={"2px solid teal"} margin={"10px"}>
            <CardHeader display={"flex"} justifyContent={"space-around"}>
              <Heading size="md">{elem.user.name}</Heading>
              <Heading size="xs" textTransform="uppercase">
                <Text pt="2" fontSize="sm">
                  TotalPost{" ---> "}
                  {elem.total_posts}
                </Text>
              </Heading>
            </CardHeader>
          </Card>
        ))}
    </>
  );
};

export default TopFiveUser;
