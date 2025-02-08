package ziweek.milipat.global.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.web.SecurityFilterChain

@Configuration
class SecurityConfig {

    @Bean
    fun bCryptPasswordEncoder(): BCryptPasswordEncoder {
        return BCryptPasswordEncoder()
    }

    private val allowedUrls = arrayOf("/", "sign-up", "sign-in")

    @Bean
    fun securityFilterChain(http: HttpSecurity): SecurityFilterChain {
        return http
            .csrf {
                it.disable()
            }
            .headers {
                it.frameOptions { frameOptions ->
                    frameOptions.sameOrigin()
                }
            }
            .authorizeHttpRequests {
                it
                    .requestMatchers(*allowedUrls).permitAll()
                    .requestMatchers("/api/**").permitAll()
//                    .hasAnyAuthority()
//                    .requestMatchers(PathRequest.toH2Console().toString()).permitAll()
                    .anyRequest().authenticated()
            }
            .sessionManagement {
                it.sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 쿠키, 세션 사용 안함.
            }
            .exceptionHandling { }
            .build()
    }


}