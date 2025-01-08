function ListGroup() {
  const items = [
    "Hyderabad",
    "Banglore",
    "Pune",
    "Chennai",
    "Ahmedabad",
    "Kolkata",
    "Delhi",
    "Mumbai",
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
