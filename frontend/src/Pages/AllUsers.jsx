import React, { useEffect, useState, useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
  TableContainer,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AppContext } from "./ContextApi";

const AllUsers = () => {
  const [data, setData] = useState([]);

  const { authState } = useContext(AppContext);
  useEffect(() => {
    fetch(`https://eight6app-0xzc.onrender.com/user/analytics/users`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.users);
        setData(res.users);
      });
  }, []);

  return (
    <>
      {authState.token ? (
        <Center p={5}>
          <Button textAlign={"center"} colorScheme="messenger">
            <Link to="/topfiveusers">To Show Top 5 Users Click on It</Link>
          </Button>
        </Center>
      ) : (
        <Center p={10}>
          <Button textAlign={"center"} colorScheme="messenger">
            <Link to="/login">Please Login Fisrt</Link>
          </Button>
        </Center>
      )}

      <Center p={5}>
        <Heading>AllUsers List</Heading>
      </Center>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Email</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>

          {data.length > 0 &&
            data.map((elem) => (
              <Tbody key={elem._id}>
                <Tr>
                  <Td>{elem._id}</Td>
                  <Td>{elem.email}</Td>
                  <Td>{elem.name}</Td>
                  <Td>
                    <Link to={`/users/${elem._id}`}>GetUserByID</Link>
                  </Td>
                </Tr>
              </Tbody>
            ))}
        </Table>
      </TableContainer>
    </>
  );
};

export default AllUsers;
