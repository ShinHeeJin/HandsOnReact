import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  background-color: #4f4f4f;
`;

const Block = styled.div`
  padding: ${(props) => props.padding};
  border: 1px 0ch black;
  border-radius: 1rem;
  background-color: ${(props) => props.backgroundColor};
  color: black;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

const blockItems = [
  {
    label: "1",
    padding: "3rem",
    backgroundColor: "#ffde59",
  },
  {
    label: "2",
    padding: "3rem",
    backgroundColor: "#ffde59",
  },
  {
    label: "3",
    padding: "3rem",
    backgroundColor: "#ffde59",
  },
];

export default function Blocks(props) {
  return (
    <Wrapper>
      {blockItems.map((blockItem) => {
        return (
          <Block
            padding={blockItem.padding}
            backgroundColor={blockItem.backgroundColor}
          >
            {blockItem.label}
          </Block>
        );
      })}
    </Wrapper>
  );
}
