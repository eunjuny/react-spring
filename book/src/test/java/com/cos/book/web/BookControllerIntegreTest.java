package com.cos.book.web;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.transaction.annotation.Transactional;

import com.cos.book.domain.Book;
import com.cos.book.domain.BookRepository;
import com.cos.book.service.BookService;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;

// 통합 테스트 (모든 Bean들을 똑같이 IoC에 올리고 테스트 하는 것)
//WebEnvironment.MOCK => 실제 톰캣을 올리는게아니라 다른 톰캣으로 테스트
//WebEnvironment.RANDOM_POR => 실제 톰캣으로 테스트

@Slf4j
@Transactional		//각각의 테스트함수가 종료될 때 마다 트랜잭션을 rollback해줌	-> test1의 데이터가 test2에 영향을 미치지 않는다. -> 독립적인 테스트 제공
@AutoConfigureMockMvc //MockMvc를 IoC에 등록해줌
@SpringBootTest(webEnvironment = WebEnvironment.MOCK)	//모든 애들이 메모리에 다 뜬다.	//실제 톰캣을 올리는게아니라 다른 톰캣으로 테스트
public class BookControllerIntegreTest {

	@Autowired
	private MockMvc mockMvc;
	
	@Autowired
	private BookRepository bookRepository;	//여기선 실제로 db에 넣어서 테스트 진행가능
	
	@Autowired
	private EntityManager entityManager;
	
	@BeforeEach	//모든 테스트 함수가 실행되기 이전에 각각 실행됨
	public void init() {
		entityManager.createNativeQuery("ALTER TABLE book ALTER COLUMN id RESTART WITH 1").executeUpdate();	//테스트 전에 INCREMENT를 1로 초기화
	}
	
	
	
	//BDDMockito 패턴 given, when, then
	@Test
	public void save_테스트() throws Exception {
//		log.info("save_테스트() 시작===================");	//@Slf4j 어노테이션 있어야 사용가능
		//given (테스트를 하기 위한 준비)          
		Book book = new Book(null, "스프링 따라하기", "코스");
		String content = new ObjectMapper().writeValueAsString(book);
		
		// when (테스트 실행)
		ResultActions resultAction = mockMvc.perform(post("/book")
				.contentType(MediaType.APPLICATION_JSON_UTF8)
				.content(content)
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		// then (검증)
		resultAction
			.andExpect(status().isCreated())
			.andExpect(jsonPath("$.title").value("스프링 따라하기"))	//$. 뒤의 값이 스프링 따라하기가 맞는지 검증
			.andDo(MockMvcResultHandlers.print());
			
	}
	
	@Test
	public void findAll_테스트() throws Exception{
		//given
		List<Book> books = new ArrayList<>();
		books.add(new Book(null, "스프링부트 따라하기", "코스"));
		books.add(new Book(null, "리엑트 따라하기", "코스"));
		books.add(new Book(null, "JUnit 따라하기", "코스"));
		bookRepository.saveAll(books);
		
		//when
		ResultActions resultAction = mockMvc.perform(get("/book")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		//then
		resultAction
			.andExpect(status().isOk())
			.andExpect(jsonPath("$",Matchers.hasSize(3)))
			.andExpect(jsonPath("$.[2].title").value("JUnit 따라하기"))
			.andDo(MockMvcResultHandlers.print());
	}
	
	
}
