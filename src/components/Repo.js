import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repo = ({ repos_url }) => {
  const [repos, seRepos] = useState([]);

  const fethRepos = async () => {
    const { data } = await Axios.get(repos_url);
    seRepos(data);
  };
  useEffect(() => {
    fethRepos();
  }, [repos_url]);

  return (
    <ListGroup>
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div className="text-primary">{repo.name}</div>
          <div className="text-primary">{repo.language}</div>
          <div className="text-primary">{repo.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repo;
