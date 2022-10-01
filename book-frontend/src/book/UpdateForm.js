import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateForm = (props) => {
  const propsParam = useParams();
  const id = propsParam.id;

  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  useEffect(() => {
    fetch('http://localhost:8090/book/' + id)
      .then((res) => res.json())
      .then((res) => {
        setBook(book);
      });
  }, []);

  const changeValue = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const submitBook = (e) => {
    e.preventDefault(); //submit이 action을 안타고 자기 할일을 그만함.
    fetch('http://localhost:8090/book/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(book),
    })
      .then((res) => {
        console.log(1, res);
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        //Catch는 여기서 오류가 나야 작동함
        console.log('정상', res);
        if (res !== null) {
          props.history.push('/book/' + id);
        } else {
          alert('책 수정에 실패하였습니다.');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={submitBook}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Title"
          onChange={changeValue}
          name="title"
          value={book.title}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Author"
          onChange={changeValue}
          name="author"
          value={book.author}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UpdateForm;
