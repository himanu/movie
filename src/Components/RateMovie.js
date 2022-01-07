import { useState } from "react";

const RateMovie = ({ handleRateMovie }) => {
  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState("");
  const [duration, setDuration] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRateMovie({ movie, rating, duration });
    setMovie("");
    setRating("");
    setDuration("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="movie" className="form-label"> Movie </label>
          <input
            className="form-control"
            id="movie"
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label"> Rating </label>
          <input
            className="form-control"
            id="rating"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label"> Duration in minutes</label>
          <input
            className="form-control"
            id="duration"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
export default RateMovie;
