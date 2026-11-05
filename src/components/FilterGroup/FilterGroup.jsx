import "./FilterGroup.css";

function FilterGroup({ title, inputType, options, name }) {
  return (
    <div className="filter-group">
      <h3>{title}</h3>

      {options.map((option) => (
        <label key={option}>
          <input
            type={inputType}
            name={name}
            value={option}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default FilterGroup;
