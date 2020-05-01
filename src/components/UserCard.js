import React from "react";

import { Card, CardBody } from "reactstrap";

export default function userCard({ user }) {
  return (
    <div>
      <Card className="text-center mt-3 mb-4">
        <img
          src={user.avatar_url}
          alt={user.name}
          className="img img-fluid"
        ></img>

        <CardBody>
          <div className="text-primary ">{user.name}</div>
          <div className="text-primary ">{user.location}</div>
          <div className="text-primary ">{user.bio}</div>
          <div className="text-primary ">
            Available for hireable : {user.hireable}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
