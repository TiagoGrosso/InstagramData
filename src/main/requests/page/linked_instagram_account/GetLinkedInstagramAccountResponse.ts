import { AbstractResponse } from '../../AbstractResponse';
import { LinkedInstagramAccountData } from '../../data/LinkedInstagramAccountData';


/**
 * Class that represents a response from a Get Me request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.3.0
 */
export class GetLinkedInstagramAccountResponse extends AbstractResponse<LinkedInstagramAccountData> {
    /**
     * Facebook requires Instagram accounts to be linked to a Facebook page and also
     * to be Instagram business accounts. If these conditions are meet. This
     * endpoint will return linked Instagram Page ID
     *
     * @returns the list of authorized facebook pages
     */
    public instagramPageId(): string {
        return this.data.instagram_business_account.id;
    }
}
