package com.foryou.makeawish.repository.post;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.foryou.makeawish.domain.Post;
import com.foryou.makeawish.request.post.PostSearch;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.foryou.makeawish.domain.QPost.post;

@RequiredArgsConstructor
public class PostRepositoryImpl implements PostRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<Post> getList(PostSearch postSearch) {
        return jpaQueryFactory.selectFrom(post)
                .limit(postSearch.getSize())
                .offset(postSearch.getOffset())
                .orderBy(post.id.desc())
                .fetch();
    }
}
