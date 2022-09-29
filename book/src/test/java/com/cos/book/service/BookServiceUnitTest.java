package com.cos.book.service;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.cos.book.domain.BookRepository;

// 단위 테스트(Service와 관련된 애들만 메모리에 띄우면 됨.)
// BookRepository -> 가짜 객체로 만들 수 있음

@ExtendWith(MockitoExtension.class)
public class BookServiceUnitTest {
	
//	@Mock	//spring IoC에 뜨는게 아니라 Mockito 메모리에 등록이 됨
	@InjectMocks	//BookService 객체가 만들어질 때 BookServiceUnitTest파일에 @Mock로 등록된 모든 애들을 주입 받는다.
	private BookService bookService;

	private BookRepository bookRepository;
}
