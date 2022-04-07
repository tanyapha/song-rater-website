import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class SongTiles extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const { editItem } = this.props;
    return (
      <div>
        <h1 className="song-name">{this.props.songItem.song}</h1>
        <p>{this.props.songItem.artist}</p>
        <p>{this.props.songItem.rating}</p>
        <span>
          <button
            onClick={() => editItem(this.props.songItem)}
            className="btn btn-secondary"
            disabled={this.props.formShow}
          >
            {" "}
            Edit{" "}
          </button>
        </span>
      </div>
    );
  };
}