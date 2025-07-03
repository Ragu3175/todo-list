function Addbutton({ name, handleChange, handleClick, inputRef }) {
  return (
    <div>
      <div id="addcont">
        <input
          type="text"
          ref={inputRef}
          value={name}
          onChange={handleChange}
          id="inputname"
          placeholder="Enter your list"
        />
        <button
          onClick={() => {
            inputRef.current.focus();
            handleClick();
          }}
          id="addbutton"
        >
          ADD
        </button>
      </div>
    </div>
  );
}
export default Addbutton;
