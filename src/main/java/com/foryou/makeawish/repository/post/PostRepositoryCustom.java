package com.foryou.makeawish.repository.post;

import com.foryou.makeawish.domain.Post;
import com.foryou.makeawish.request.post.PostSearch;

import java.util.List;

public interface PostRepositoryCustom {

    List<Post> getList(PostSearch postSearch);
}
