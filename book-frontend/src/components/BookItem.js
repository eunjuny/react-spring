import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookItem = (props) => {
  const { id, title, author } = props.book;
  return (
    <div>
      <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Body>
          <Link to={'/book/' + id} className="btn btn-primary">
            상세보기
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookItem;
