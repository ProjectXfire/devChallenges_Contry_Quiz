import styled from "styled-components";

export const Card = styled.div`
  margin-top: 100px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const CardContent = styled.div`
  display: ${(props) => (props.center ? "grid" : "block")};
  justify-items: ${(props) => (props.center ? "center" : "none")};
  border-radius: 10px;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  background-color: white;
`;

export const CardOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Flag = styled.img`
  width: 130px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
`;
