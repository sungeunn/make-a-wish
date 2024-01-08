package com.foryou.makeawish.repository.post;

import com.foryou.makeawish.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long>, PostRepositoryCustom {

}
