import s from './SearchBox.module.css';

const SearchBox = ({ handleFilter }) => {
  return (
    <div className={s.wrapper}>
      <span>Find contacts by name</span>
      <input type='text' placeholder='Search' onChange={handleFilter}></input>
    </div>
  );
};

export default SearchBox;
