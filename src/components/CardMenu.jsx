import "./CardMenu.css";

function CardMenu(props) {
  return (
    <div className="card">
      <div className="outer-container-form">
        <form
          action="/"
          method="post"
          onSubmit={(event) => {
            event.preventDefault;
          }}
        >
          <div className="form-container">
            <span>Select Country: </span>
            <div className="select-container">{props.select}</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardMenu;
