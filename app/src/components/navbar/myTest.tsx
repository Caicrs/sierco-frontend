import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export interface Props {
  username: string;
}

function MyTest(props:Props) {

    const[user,setUser] = useState("");
    const[color,setColor] = useState("")
    function changeColor(colorName:string){
        setColor(colorName)
    }

  return (
    <>
     <Input 
     placeholder="Username here"
     type="text"
     onChange={(e) => setUser(e.target.value)}
     value={user}
     ></Input>
      <H1>{props.username}</H1>
      <H1>{user}</H1>
      <H1>{color}</H1>
      <Btn data-testid="color1" onClick={() => changeColor("blue")}></Btn>
    </>
  );
}
export default MyTest;

const H1 = styled.h1``;
const MyLink = styled(Link)``;
const Input = styled.input``;
const Btn = styled.button``;


