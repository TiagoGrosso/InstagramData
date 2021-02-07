import { InnerId } from './Common';

/**
 * Interface to represent the data regarding a comment.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.5.0
 */
export interface CommentData {
    /**
     * The id of the comment.
     */
    id: string;

    /**
     * The creation date of the comment in ISO 8601.
     */
    timestamp?: string;

    /**
     * The text of the comment.
     */
    text?: string;

    /**
     * Whether the comment is hidden.
     */
    hidden?: boolean;

    /**
     * The number of likes on the comment.
     */
    like_count?: number;

    /**
     * The media object that contains the comment.
     */
    media?: InnerId;

    /**
     * The user that made the comment. Only returned if the user making the query also owns the comment, otherwise, the username field will be included
     */
    user?: InnerId;

    /**
     * The username of the user who made the comment.
     */
    username?: string;
}
