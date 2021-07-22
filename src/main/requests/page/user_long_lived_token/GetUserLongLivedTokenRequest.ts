import { AxiosResponse } from 'axios';
import { AbstractRequest } from '../../AbstractRequest';
import { GetUserLongLivedTokenResponse } from './GetUserLongLivedTokenResponse';

const GRANT_TYPE = 'fb_exchange_token'

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
export class GetUserLongLivedTokenRequest extends AbstractRequest<GetUserLongLivedTokenResponse> {
    appId: string
    appSecretId: string

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param appId your App Id
     * @param appSecretId your App Secret Id
     */
    constructor(accessToken: string, appId: string, appSecretId: string) {
        super(accessToken);

        this.appId = appId
        this.appSecretId = appSecretId
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<never>): GetUserLongLivedTokenResponse {
        return new GetUserLongLivedTokenResponse(response.data);
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/oauth/access_token?\
          grant_type=${GRANT_TYPE}&\
          client_id=${this.appId}&\
          client_secret=${this.appSecretId}&\
          fb_exchange_token=${this.params.access_token}`;
    }
}
