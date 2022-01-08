import { decode, TAlgorithm  } from "jwt-simple";
import {Session,DecodeResult} from './interfaces'


export function decodeSession(secretKey: string, tokenString: string): DecodeResult {
    // Always use HS512 to decode the token
    const algorithm: TAlgorithm = "HS512";

    let result: Session;

    try {
        result = decode(tokenString, secretKey, false, algorithm);
    } catch (e) {  

        if (e instanceof Error) {
            
            if (e.message === "No token supplied" || e.message === "Not enough or too many segments") {
                return {
                    type: "invalid-token"
                };
            }
    
            if (e.message === "Signature verification failed" || e.message === "Algorithm not supported") {
                return {
                    type: "integrity-error"
                };
            }
    
            // Handle json parse errors, thrown when the payload is nonsense
            if (e.message.indexOf("Unexpected token") === 0) {
                return {
                    type: "invalid-token"
                };
            }
        }

        throw e;
    }

    return {
        type: "valid",
        session: result
    }
}