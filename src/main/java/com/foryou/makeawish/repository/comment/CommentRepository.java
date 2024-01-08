package com.foryou.makeawish.repository.comment;

import com.foryou.makeawish.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
