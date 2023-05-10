import styled from "styled-components";
import theme from "theme/theme";

export const TableHeader = styled.h2`
    margin: 0;
    @media (max-width: 1024px) {
        text-align: center;
    }
`;

export const Table = styled.div`
    margin: 0 3rem;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem 0;

  & > * {
    flex-basis: calc(100% / 1 - 1rem);
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    & > * {
      flex-basis: calc(100% / 2 - 1rem);
    }
  }

  @media (min-width: 1024px) {
    & > * {
      flex-basis: calc(100% / 3 - 1rem);
    }
  }
`;



export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.color.gray};
`;

export const Description = styled.div`
    color: ${theme.color.gray};
`;

export const Value = styled.div`
    margin-left: 1rem;
    font-weight: bold;
`;