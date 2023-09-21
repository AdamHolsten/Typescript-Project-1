import { ColumnContainer, ColumnTitle, CardContainer } from "./styles";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <CardContainer>First item</CardContainer>
      <CardContainer>Seonc item</CardContainer>
      <CardContainer>Third item</CardContainer>
    </ColumnContainer>
  );
};
