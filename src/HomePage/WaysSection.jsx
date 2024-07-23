import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

function WaysSection() {
  return (
    <>
      <div className="titles">
        <h1>Ways to Get Started.</h1>
        <br />
      </div>
      <div className="d-grid gap-1 custom-section">
        <button onClick={() => {window.location.href = 'book_service';}} className="btn btn-outline-dark ways-button" type="button">
          <h1>Book a Service</h1>
        </button>
        <button onClick={() => {window.location.href = 'create_seller_account';}} className="btn btn-outline-dark ways-button" type="button">
          <h1>Create a Seller Account</h1>
        </button>
      </div>
    </>
  );
}
export default WaysSection;
