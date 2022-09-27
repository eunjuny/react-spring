package com.cos.book.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {

	@GetMapping("/")
	public ResponseEntity<?> findAll(){	//<?>는 지금 리턴할 값이 뭔지 모를때, 미정인상태 경우에따라 string, int 암거나..
		return new ResponseEntity<String>("ok", HttpStatus.OK);	//return할때 httpstatus 코드를 같이 보냄
	}
}
