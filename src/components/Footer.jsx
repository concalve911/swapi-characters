import React from "react";
import { useDispatch } from "react-redux";
import { clearCharacters } from "../actions/characterActions";

const Footer = ({ clearSearchTerm }) => {
  const dispatch = useDispatch();

  return (
    <footer className="footer">
      <button
        onClick={() => {
          clearSearchTerm();
        }}
        className="clear__button"
      >
        Clear
      </button>
    </footer>
  );
};

export default Footer;
