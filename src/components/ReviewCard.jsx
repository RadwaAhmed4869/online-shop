export default function ReviewCard({ image, title, subtitle, text }) {
  return (
    <div className="card shadow-sm border-light border-2 p-2">
      <div className="card-body">
        <div className="d-flex gap-2 py-3">
          <img src={image} className="me-2"/>
          <h6 className="card-title fw-bold pt-3">{title}</h6>
          <small className="text-muted pt-3">{subtitle}</small>
        </div>
        <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>
          {text}
        </p>
      </div>
    </div>
  );
}
