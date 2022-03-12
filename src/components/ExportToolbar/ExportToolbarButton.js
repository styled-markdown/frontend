import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  height: 100%;
  min-width: 100px;
  margin: 5px 10px;
  padding: 0px 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  color: #a494d7;
  box-shadow: 0px 1px 5px rgb(0, 0, 0, 0.5);
  cursor: pointer;
`;

export default function ExportToolbarButton({ name, onClick }) {
  return <Button onClick={onClick}>{name}</Button>;
}

ExportToolbarButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
