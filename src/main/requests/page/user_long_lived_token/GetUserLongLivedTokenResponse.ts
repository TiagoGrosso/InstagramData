import { AbstractResponse } from '../../AbstractResponse';
import { UserLongLivedTokenData } from '../../data/UserLongLivedTokenData';

/**
 * This class is used to exchange a short-lived-token by a long-lived-token that you get when
 * the user do a Facebook login in your page and want to authorize your app
 * to make request for a long time.
 *
 * This long-lived-token last ~60 days according to Facebook documentation
 *
 * More info:
 * https://developers.facebook.com/docs/facebook-login/access-tokens/refreshing/#get-a-long-lived-user-access-token
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since next.release
 */
export class GetUserLongLivedTokenResponse extends AbstractResponse<UserLongLivedTokenData> {
    /**
     * Gets user's long-lived-token
     *
     * @returns the user's long-lived access token
     */
    public longLivedToken(): string {
        return this.data.access_token
    }
}
