package com.cos.book.service;

import java.util.List;


import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cos.book.domain.Book;
import com.cos.book.domain.BookRepository;

import lombok.RequiredArgsConstructor;

//기능을 정의할 수 있고, 트랜잭션을 관리할 수 있음.

@RequiredArgsConstructor	//생성자를 자동으로 만들어줘서 DI해줌, (final이 붙어 있는 애들의 생성자를 자동으로 만들어서 DI해줌) 
@Service
public class BookService {

	// 함수 => 송금() -> 레파지토리에 여러개의 함수 실행 -> commit or rollback
	
	private final BookRepository bookRepository;
	
	@Transactional	//서비스 함수가 종료될 때 commit할지 rollback할지 트랜잭션 관리하겠다
	public Book 저장하기(Book book) {
		return bookRepository.save(book);
	}
	
	@Transactional(readOnly=true)	//JPA는 변경감지라는 내부 기능이 있음, readOnly=true면 변경감지 활성화 종료시켜줌 -> update시의 정합성을 유지해줌. insert의 유령데이터현상(팬텀현상) 못막음
	public Book 한건가져오기(Long id) {
		return bookRepository.findById(id)
				.orElseThrow(()->new IllegalArgumentException("id를 확인해주세요!!"));
	}
	
	@Transactional(readOnly=true)
	public List<Book> 모두가져오기(){
		return bookRepository.findAll();
	}
	
	@Transactional
	public Book 수정하기(Long id, Book book) {
		Book bookEntity = bookRepository.findById(id)
				.orElseThrow(()->new IllegalArgumentException("id를 확인해주세요!!"));	//영속화 (book 오브젝트) -> 데이터베이스에서 가져온 데이터를 스프링 내부 메모리 공간에서 들고 있음
		bookEntity.setTitle(book.getTitle());	//영속화된 데이터를 수정 
		bookEntity.setAuthor(book.getAuthor());
		return bookEntity;
	}	//함수 종료 -> 트랜잭션 종료 -> 영속화 되어있는 데이터를 DB로 갱신(flush) -> commit  => 더티체킹
	
	public String 삭제하기(Long id) {
		bookRepository.deleteById(id);	//오류가 터지면 익셉션을 타니까.. 신경쓰지 말고
		return "ok";	//ok가 리턴되면 성공, 익셉션 뜨면 오류
	}
	
}
