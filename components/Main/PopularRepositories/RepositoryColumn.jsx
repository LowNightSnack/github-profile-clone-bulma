import RepositoryCell from "./RepositoryCell";

const RepositoryColumn = ({ repositories }) => {
  return (
    <div className="columns m-0" style={{ gap: "1.5rem" }}>
      <RepositoryCell repository={repositories[0]} />
      <RepositoryCell
        repository={repositories[1]}
        empty={repositories[1] ? false : true}
      />
    </div>
  );
};

export default RepositoryColumn;
