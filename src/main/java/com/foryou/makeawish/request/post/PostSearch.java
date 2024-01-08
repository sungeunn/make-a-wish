package com.foryou.makeawish.request.post;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import static java.lang.Math.max;
import static java.lang.Math.min;

@Data
@NoArgsConstructor
public class PostSearch {

    private static final int MAX_SIZE = 2000;

    private int page = 1;

    private int size = 20;

    @Builder
    public PostSearch(int page, int size) {
        this.page = page;
        this.size = size;
    }

    public long getOffset() {
        return (long) (max(1, page) - 1) * min(size, 2000);
    }

}
