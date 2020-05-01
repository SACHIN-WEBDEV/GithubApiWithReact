import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import UserCard from "../components/UserCard";

import { Redirect } from "react-router-dom";

import { toast } from "react-toastify";
import Repo from "./Repo";
import { UserContext } from "../Context/UserContext";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  if (!context.user?.uid) {
    return <Redirect to="/signin"></Redirect>;
  }
  const fetchDetils = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("Not able to locate user", {
        type: "error",
      });
    }
  };

  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              placeholder="Please provide the username"
            />
            <InputGroupAddon addonType="append">
              <Button onClick={fetchDetils} color="primary">
                Fetch User
              </Button>
            </InputGroupAddon>
          </InputGroup>
          {user ? <UserCard user={user}></UserCard> : <div></div>}
        </Col>
        <Col md="7">
          {user ? <Repo repos_url={user.repos_url}></Repo> : <div></div>}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
