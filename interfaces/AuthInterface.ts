export interface DecodedJwt {
    exp: number;
    jti: string;
    token_type: string;
    user_id: number;
}

export interface AuthResponse {
    access: string;
    refresh: string;
}
