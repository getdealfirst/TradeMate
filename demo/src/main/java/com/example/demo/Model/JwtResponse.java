package com.example.demo.Model;

import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class JwtResponse {
private String jwtToken;
private String username;

}
