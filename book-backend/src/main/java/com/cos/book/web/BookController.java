package com.cos.book.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.book.domain.Book;
import com.cos.book.service.BookService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor	//생성자 생성용 -> final DI
@RestController
public class BookController {
	
	private final BookService bookService;

	//security (라이브러리 적용) - CORS 정책을 가지고 있음.
	//BookController 진입 직전
	@CrossOrigin
	@PostMapping("/book")
	public ResponseEntity<?> save(@RequestBody Book book){	//@RequestBody -> JSON으로 받음
		return new ResponseEntity<>(bookService.저장하기(book), HttpStatus.CREATED);	//201
	}

	@CrossOrigin
	@GetMapping("/book")
	public ResponseEntity<?> findAll(){	//<?>는 지금 리턴할 값이 뭔지 모를때, 미정인상태 경우에따라 string, int 암거나..
		return new ResponseEntity<>(bookService.모두가져오기(), HttpStatus.OK);	//return할때 httpstatus 코드를 같이 보냄
	}
	
	@CrossOrigin
	@GetMapping("/book/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id){	
		return new ResponseEntity<>(bookService.한건가져오기(id), HttpStatus.OK);	//200
	}
	
	@CrossOrigin
	@PutMapping("/book/{id}")
	public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Book book){	
		return new ResponseEntity<>(bookService.수정하기(id, book), HttpStatus.OK);
	}
	
	@CrossOrigin
	@DeleteMapping("/book/{id}")
	public ResponseEntity<?> deleteById(@PathVariable Long id){	
		return new ResponseEntity<>(bookService.삭제하기(id), HttpStatus.OK);
	}
}
