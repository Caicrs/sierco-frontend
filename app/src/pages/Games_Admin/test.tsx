import * as React from "react";
import styled, { css } from "styled-components";

export default function Form(props: any) {
  return (
    <Div>
      <Div2>Jogos</Div2>
      <Div3>
        <Div4 className="builder-columns">
          <Column className="builder-column">
            <Input type="text" placeholder="Title" required={false} />
          </Column>

          <Column className="builder-column">
            <Input type="text" placeholder="Title" required={false} />
          </Column>

          <Column className="builder-column">
            <Input type="text" placeholder="Title" required={false} />
          </Column>
        </Div4>
        <Div4 className="builder-columns">
          <Column className="builder-column">
            <Input type="text" placeholder="Title" required={false} />
          </Column>

          <Column className="builder-column">
            <Input type="text" placeholder="Title" required={false} />
          </Column>

          <Column className="builder-column">
            <Input type="text" placeholder="Title" required={false} />
          </Column>
        </Div4>
      </Div3>
    </Div>
  );
}

const mobile: string = "768px";
const desktop: string = "1024px";
const tablet: string = "825px";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 5rem 50px 5rem;
  background-color: rgba(61, 61, 61, 1);
  @media (max-width: 999px) {
    padding: 50px 2rem 50px 2rem;
  }
    // Tablet
    @media (min-width: ${mobile}) {
      padding: 50px 5rem 50px 5rem;
}
`;

const Div2 = styled.div`
  max-width: 1253px;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  letter-spacing: 0%;
  text-align: left;
  font-family: "Sora", sans-serif;
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-self: stretch;
  width: 100vw;
  margin-top: 50px;
`;

const Div4 = styled.div`
box-sizing: border-box;
  display: grid;
  width:100%;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5rem;
  padding: 0 1rem 0 1rem;
  @media (max-width: 999px) {
    display: block;
    padding: 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
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
  border:none;
  border-radius: 0.25rem;
  color:white;
  :focus{
    outline: none;
  }
  @media (max-width: 999px) {
    box-sizing: border-box;
  }
  `}
`;
