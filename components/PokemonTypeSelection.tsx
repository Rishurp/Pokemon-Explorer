type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor="pokemonType" className="mr-2">
        Give a Pokemon Type Here:
      </label>
      <input
        type="text"
        id="pokemonType"
        className="bg-black"
        value={selectedType || ""}
        onChange={(e) => selectType(e.target.value)}
      />
    </div>
  );
};

export default PokemonTypeSelection;
