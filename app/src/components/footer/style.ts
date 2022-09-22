import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  background: radial-gradient(
    circle,
    rgba(92, 39, 251, 1) 0%,
    rgba(112, 71, 247, 1) 100%
  );
  @media (max-width: 600px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  margin: 2rem 0 0 0;
  background: #424141;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 5rem;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  padding: 2rem 0 2rem 0;
  @media (max-width: 600px) {
    padding: 2rem 0 2rem 0;
    grid-gap: 0;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 0.85rem;
  text-decoration: none;
  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Icon = styled.i`
  font-size: 18px;
  margin-right: 16px;
`;
