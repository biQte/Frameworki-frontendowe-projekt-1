function RatingBar({ rate }) {
  const stars = [];
  for (let i = 0; i < 10; i++) {
    if (i < rate) {
      stars.push(<span key={i}>&#9733;</span>);
    } else {
      stars.push(<span key={i}>&#9734;</span>);
    }
  }
  return (
    <div>
      {stars}
    </div>
  );
}

export default RatingBar;
