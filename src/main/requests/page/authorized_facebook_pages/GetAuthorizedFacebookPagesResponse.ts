import { AbstractResponse } from '../../AbstractResponse';
import { AuthorizedFacebookPagesData, FacebookPage } from '../../data/AuthorizedFacebookPagesData';

/**
 * Class that represents a response from a Get Me request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.3.0
 */
export class GetAuthorizedFacebookPagesResponse extends AbstractResponse<AuthorizedFacebookPagesData> {
    /**
     * Gets the page id of the user that made the request.
     *
     * @returns the page id of the user that made the request.
     */
    public authorizedFacebookPages(): Array<FacebookPage> {
        return this.data.data.map(page => ({ id: page.id, name: page.name }));
    }
}
