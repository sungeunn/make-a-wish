package com.foryou.makeawish.config;

import org.springframework.security.test.context.support.WithSecurityContext;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
@WithSecurityContext(factory = HodologMockSecurityContext.class)
public @interface HodologMockUser {

    String name() default "호돌맨";

    String email() default "hodolman88@gmail.com";

    String password() default "";

//    String role() default "ROLE_ADMIN";
}
