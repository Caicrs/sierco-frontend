import * as React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import edit from "../img/edit.svg";
import trash from "../img/trash.svg";
import Form from "./Form";


const OptionSpace = ({ ...props }) => {
  const [state, setState] = useState("");

  function Test(set: string) {
    setState(set);
    console.log(set);
  }

  return (
    <>

      <Form
        changeState={(currentState) => setState(currentState)}
        name={props.name}
        set={state}
      />

      <Div>
        <Div3>
          <Div2>{props.name}</Div2>
          <AddBtn>
            <Btn onClick={() => Test("show")}>+</Btn>
          </AddBtn>
        </Div3>
        <Div4>
          {props.data.map((item: any) => (
            <Column>
              <Text>{item.Nome}</Text>
              <Icon src={edit}></Icon>
              <Icon src={trash}></Icon>
            </Column>
          ))}
        </Div4>
      </Div>
    </>
  );
};

export default OptionSpace;

const mobile: string = "768px";
const desktop: string = "1024px";
const tablet: string = "825px";

const Text = styled.div`
  width: 100%;
`;
const Icon = styled.img`
  width: 16px;
  margin: 0 0 0 2rem;
  transition: 0.3s;

  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const AddBtn = styled.div`
  width: 100%;
  text-align: right;
  font-size: 2rem;
  font-weight: 600;
`;

const Btn = styled.div`
  ${({ theme }) => css`
    width: fit-content;
    color: ${theme.colors.logoColor};
    transition: 0.3s;
    float: right;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  `}
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transition: 0.3s;
  padding: 0 0rem 50px 0;
  @media (max-width: 999px) {
    padding: 0 2rem 50px 2rem;
    background-color: red;
   
  }
  // Tablet
  @media (min-width: ${mobile}) {
    padding: 50px 5rem 50px 5rem;
  }
`;

const Div2 = styled.div`
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  padding: 0.3rem 0 0 0;
  font-family: "Sora", sans-serif;
`;

const Div3 = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 0 3rem 1rem 3rem;
    @media (max-width: 999px) {
      padding: 0 ;
   
  }
`;

const Div4 = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 1rem 0 1rem;
  @media (max-width: 999px) {
    display: block;
    padding: 0;
  }
`;

const Column = styled.div`
  ${({ theme }) => css`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    margin: 0 0 1rem 0;
    padding: 1rem 2rem 1rem 2rem;
    border-radius: 0.1rem;
    background-color: ${theme.colors.baseBg2};
  `}
`;

const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.baseBg1};
    flex-direction: column;
    position: relative;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border: none;
    border-radius: 0.25rem;
    color: white;
    :focus {
      outline: none;
    }
    @media (max-width: 999px) {
      box-sizing: border-box;
    }
  `}
`;
