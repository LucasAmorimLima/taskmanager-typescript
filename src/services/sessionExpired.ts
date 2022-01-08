import {Session,ExpirationStatus} from './interfaces'

export function checkExpirationStatus(token: Session): ExpirationStatus {
    const now = Date.now();
    
    if (token.expires > now) return "active";

    // Find the timestamp for the end of the token's grace period
    const threeHoursInMs = 3 * 60 * 60 * 1000;
    const threeHoursAfterExpiration = token.expires + threeHoursInMs;

    if (threeHoursAfterExpiration > now) return "grace";

    return "expired";
}