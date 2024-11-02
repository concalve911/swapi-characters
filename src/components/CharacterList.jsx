import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../actions/characterActions";

const CharacterList = ({ searchTerm, setSearchTerm }) => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (loading) return <div className="character-list__loading">Loading...</div>;
  if (error) return <div className="character-list__error">Error: {error}</div>;

  const getCharacterInfo = () => {
    const character = characters.find(
      (char) => char.name.toLowerCase() === searchTerm.toLowerCase()
    );
    setSelectedCharacter(character || null);
  };

  const handleCharacterClick = (characterName) => {
    setSearchTerm(characterName);
    getCharacterInfo();
  };

  return (
    <div className="character-list">
      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="character-list__search-input"
      />
      <button
        onClick={getCharacterInfo}
        className="character-list__get-info-button"
      >
        Get Info
      </button>

      <div className="character-list__characters-container">
        <h2 className="character-list__title">Character List</h2>
        <ul className="character-list__characters">
          {characters.map((character) => (
            <li
              key={character.name}
              className="character-list__character-item"
              onClick={() => handleCharacterClick(character.name)}
            >
              {character.name}
            </li>
          ))}
        </ul>
      </div>

      {selectedCharacter && (
        <div className="character-list__character-details">
          <h2 className="character-list__details-title">
            Character Information
          </h2>
          <p className="character-list__details-item">
            <strong>Name:</strong> {selectedCharacter.name}
          </p>
          <p className="character-list__details-item">
            <strong>Height:</strong> {selectedCharacter.height}
          </p>
          <p className="character-list__details-item">
            <strong>Mass:</strong> {selectedCharacter.mass}
          </p>
          <p className="character-list__details-item">
            <strong>Skin Color:</strong> {selectedCharacter.skin_color}
          </p>
          <p className="character-list__details-item">
            <strong>Hair Color:</strong> {selectedCharacter.hair_color}
          </p>
          <p className="character-list__details-item">
            <strong>Birth Year:</strong> {selectedCharacter.birth_year}
          </p>
        </div>
      )}
    </div>
  );
};

export default CharacterList;
