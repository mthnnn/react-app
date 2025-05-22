export default function MovieDetails({ movieObj, onClose }) {
  return (
    <div className="my-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="title h5 mb-0">{movieObj.title}</h2>
          <button
            className="btn btn-link fs-5 text-danger"
            onClick={() => onClose()}
          >
            <i className="bi bi-x-circle"></i>
          </button>
        </div>
        <div className="card-body">
          <img
            src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path}
            alt=""
            className="card-img-top"
          />
          <p>{movieObj.overview}</p>
        </div>
      </div>
    </div>
  );
}
