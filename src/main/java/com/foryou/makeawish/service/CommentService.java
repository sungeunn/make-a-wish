package com.foryou.makeawish.service;

import com.foryou.makeawish.domain.Comment;
import com.foryou.makeawish.domain.Post;
import com.foryou.makeawish.exception.CommentNotFound;
import com.foryou.makeawish.exception.InvalidPassword;
import com.foryou.makeawish.exception.PostNotFound;
import com.foryou.makeawish.repository.comment.CommentRepository;
import com.foryou.makeawish.repository.post.PostRepository;
import com.foryou.makeawish.request.comment.CommentCreate;
import com.foryou.makeawish.request.comment.CommentDelete;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final PostRepository postRepository;
    private final CommentRepository commentRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public void write(Long postId, CommentCreate request) {
        Post post = postRepository.findById(postId)
                .orElseThrow(PostNotFound::new);

        String encryptedPassword = passwordEncoder.encode(request.getPassword());

        Comment comment = Comment.builder()
                .author(request.getAuthor())
                .password(encryptedPassword)
                .content(request.getContent())
                .build();

        post.addComment(comment);
    }

    public void delete(Long commentId, CommentDelete request) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(CommentNotFound::new);

        String encryptedPassword = comment.getPassword();
        if (!passwordEncoder.matches(request.getPassword(), encryptedPassword)) {
            throw new InvalidPassword();
        }

        commentRepository.delete(comment);
    }
}
