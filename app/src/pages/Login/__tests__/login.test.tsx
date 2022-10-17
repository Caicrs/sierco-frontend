import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BoxLogin from "../components/formLogin";
import { Router } from "react-router-dom";

const data = { Email: "test", Password: "Password" };

describe("Login tests", () => {
  it("Login inputs", () => {
    render(
      <BoxLogin
        onSubmitData={function (data: {
          Email: string;
          Password: string;
        }): void {
          throw new Error("Function not implemented.");
        }}
        errorMessage={""}
      ></BoxLogin>
    );


  });
});
