const SearchBox = ({ onChangeHandle, placeholder, className }) => (
   <input
      type="search"
      placeholder={placeholder}
      className={className}
      onChange={onChangeHandle}
   />
);

export default SearchBox;
