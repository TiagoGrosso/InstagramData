import { AxiosResponse } from 'axios';
import { AbstractRequest } from '../../AbstractRequest';
import { GetLinkedInstagramAccountResponse } from './GetLinkedInstagramAccountResponse';

/**
 * A Get request to obtain information about the user making it.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.3.0
 */
export class GetLinkedInstagramAccountRequest extends AbstractRequest<GetLinkedInstagramAccountResponse> {
    facebookPageId: string

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param facebookPageId Facebook page where Instagram Account is linked
     */
    constructor(accessToken: string, facebookPageId: string) {
        super(accessToken);
        this.facebookPageId = facebookPageId;
        this.params.fields = 'instagram_business_account';
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<never>): GetLinkedInstagramAccountResponse {
        return new GetLinkedInstagramAccountResponse(response.data);
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `${this.facebookPageId}`
    }
}
