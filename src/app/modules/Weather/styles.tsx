import styled, { css } from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px;
  display: grid;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    display: block;
    padding: 16px;
  }
`;

const Title = styled.h1`
  user-select: none;
  position: relative;
  display: flex;
  gap: 32px;
  text-align: center;
  font-size: 48px;
  line-height: 64px;

  @media only screen and (max-width: 1024px) {
    font-size: 24px;
    line-height: 32px;
    gap: 24px;
    text-align: left;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;

const CitySelectWrapper = styled.div`
  position: relative;
  min-height: 64px;

  @media only screen and (max-width: 1024px) {
    min-height: 32px;
  }
`;

const CitySelect = styled.div<{ isDay: boolean }>(
  ({ isDay }) => css`
    position: absolute;
    top: 0;
    left: 0;
    padding-right: 64px;
    cursor: pointer;
    text-align: left;
    color: ${isDay ? "var(--light-blue-color)" : "var(--dark-blue-color)"};
    transition: color 0.3s ease;

    @media only screen and (max-width: 1024px) {
      padding-right: 32px;
    }
  `
);

const Collapse = styled.div<{ isOpened: boolean }>(
  ({ isOpened }) => css`
    display: flex;
    ${!isOpened && "border-bottom: 4px solid black;"}

    .ReactCollapse--collapse {
      transition: height 300ms ease;
    }

    @media only screen and (max-width: 1024px) {
      ${!isOpened && "border-bottom: 2px solid black;"}
    }
  `
);

const CollapseIconWrapper = styled.div<{ isOpened: boolean }>(
  ({ isOpened }) => css`
    position: absolute;
    top: 8px;
    right: 0;
    display: flex;

    svg {
      width: 48px;
      height: 48px;
      transform: rotate(${isOpened ? 180 : 0}deg);
      transition: transform 0.3s ease;
    }

    @media only screen and (max-width: 1024px) {
      top: 8px;
      svg {
        width: 24px;
        height: 24px;
      }
    }
  `
);

const CityList = styled.ul`
  display: grid;
  list-style: none;
  background: var(--white-color);
  border: 4px solid var(--black-color);
  border-radius: 8px;

  @media only screen and (max-width: 1024px) {
    border: 2px solid var(--black-color);
  }
`;

const CityName = styled.li`
  font-size: 24px;
  line-height: 36px;
  border-bottom: 2px solid var(--black-color);
  white-space: nowrap;
  padding: 16px 64px;
  text-align: center;
  transition: all 0.15s ease;

  &:last-child {
    border: none;
  }

  color: var(--black-color);

  &:hover {
    background: var(--black-color);
    color: var(--white-color);
  }

  @media only screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
    border-bottom: 1px solid var(--black-color);
    padding: 16px 32px;
  }
`;

const Plate = styled.div<{ isDay: boolean }>(
  ({ isDay }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 16px;
    font-size: 48px;
    line-height: 64px;
    padding: 32px;
    margin: 32px auto;
    background: ${isDay ? "var(--light-blue-color)" : "var(--dark-blue-color)"};
    border-radius: 16px;
    transition: background 0.3s ease;

    @media only screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      padding: 16px;
    }

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      width: auto;
    }
  `
);

const WeatherSvgWrapper = styled.div`
  margin: 0 auto;
  width: 128px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white-color);
  border-radius: 50%;

  svg {
    width: 96px;
    height: 96px;
  }

  @media only screen and (max-width: 1024px) {
    width: 96px;
    height: 96px;

    svg {
      width: 64px;
      height: 64px;
    }
  }
`;

const Cell = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 4px solid var(--white-color);
  border-radius: 16px;
  height: 100%;

  @media only screen and (max-width: 1024px) {
    border-radius: 8px;
    gap: 16px;
    border: 2px solid var(--white-color);
  }
`;

const CellTitle = styled.div`
  font-size: 24px;
  line-height: 28px;
  color: var(--white-color);
  text-align: center;

  @media only screen and (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const CellValue = styled.div`
  color: var(--white-color);
  font-size: 32px;
  line-height: 48px;
  text-align: center;

  @media only screen and (max-width: 1024px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

const CitySvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 3;
  grid-column-end: 4;

  svg {
    width: auto;
    max-height: 256px;
  }

  @media only screen and (max-width: 1024px) {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 3;

    svg {
      width: auto;
      max-height: 180px;
    }
  }

  @media only screen and (max-width: 768px) {
    grid-row-start: auto;
    grid-row-end: auto;
    grid-column-start: auto;
    grid-column-end: auto;

    svg {
      width: auto;
      max-height: 180px;
    }
  }
`;

export default {
  Container,
  Title,
  CitySelectWrapper,
  CitySelect,
  Collapse,
  CollapseIconWrapper,
  CityList,
  CityName,
  Plate,
  WeatherSvgWrapper,
  Cell,
  CellTitle,
  CellValue,
  CitySvgWrapper,
};
