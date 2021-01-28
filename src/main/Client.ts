import {
    DayMetric,
    LifetimeMetric,
    MediaField,
    SimplePostMetric,
    StoryMetric,
    PageField,
    WeekAndMonthMetric,
} from './Enums';
import { GetMediaInfoRequest } from './requests/media/info/GetMediaInfoRequest';
import { GetSimplePostMediaInsightsRequest } from './requests/media/insights/GetSimplePostMediaInsightsRequest';
import { GetStoryMediaInsightsRequest } from './requests/media/insights/GetStoryMediaInsightsRequest';
import { GetPageInfoRequest } from './requests/page/info/GetPageInfoRequest';
import { GetPageDayInsightsRequest } from './requests/page/insights/GetPageDayInsightsRequest';
import { GetPageLifetimeInsightsRequest } from './requests/page/insights/GetPageLifetimeInsightsRequest';
import { GetPageMonthInsightsRequest } from './requests/page/insights/GetPageMonthInsightsRequest';
import { GetPageWeekInsightsRequest } from './requests/page/insights/GetPageWeekInsightsRequest';
import { GetPageMediaRequest } from './requests/page/media/GetPageMediaRequest';

/**
 * A client that creating requests.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class Client {
    /**
     * The API access token.
     */
    private accessToken: string;

    /**
     * The id of the page. This is used on page related requests so it should be the page for which the access token has permissions.
     */
    private pageId: string;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param pageId The id of the page.
     */
    constructor(accessToken: string, pageId: string) {
        this.accessToken = accessToken;
        this.pageId = pageId;
    }

    /**
     * Gets the access token.
     *
     * @returns the access token.
     */
    public getAccessToken(): string {
        return this.accessToken;
    }

    /**
     * Gets the page id.
     *
     * @returns the page id.
     */
    public getPageId(): string {
        return this.pageId;
    }

    /**
     * Builds a new {@link GetPageInfoRequest}.
     *
     * @param fields the fields to retrieve from the API. If no field is specified, all are retrieved.
     *
     * @returns a new {@link GetPageInfoRequest}.
     */
    public newGetPageInfoRequest(...fields: PageField[]) {
        return new GetPageInfoRequest(this.accessToken, this.pageId, ...fields);
    }

    /**
     * Builds a new {@link GetPageMediaRequest}.
     *
     * @param fields the fields to retrieve from the API for each media object. If no field is specified, all are retrieved.
     *
     * @returns a new {@link GetPageMediaRequest}.
     */
    public newGetPageMediaRequest(...fields: MediaField[]) {
        return new GetPageMediaRequest(this.accessToken, this.pageId, ...fields);
    }

    /**
     * Builds a new {@link GetPageLifetimeInsightsRequest}.
     *
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     *
     * @returns a new {@link GetPageLifetimeInsightsRequest}.
     */
    public newGetPageLifetimeInsightsRequest(...metrics: LifetimeMetric[]) {
        return new GetPageLifetimeInsightsRequest(this.accessToken, this.pageId, ...metrics);
    }

    /**
     * Builds a new {@link GetPageDayInsightsRequest}.
     *
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     *
     * @returns a new {@link GetPageDayInsightsRequest}.
     */
    public newGetPageDayInsightsRequest(...metrics: DayMetric[]) {
        return new GetPageDayInsightsRequest(this.accessToken, this.pageId, ...metrics);
    }

    /**
     * Builds a new {@link GetPageWeekInsightsRequest}.
     *
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     *
     * @returns a new {@link GetPageWeekInsightsRequest}.
     */
    public newGetPageWeekInsightsRequest(...metrics: WeekAndMonthMetric[]) {
        return new GetPageWeekInsightsRequest(this.accessToken, this.pageId, ...metrics);
    }

    /**
     * Builds a new {@link GetPageMonthInsightsRequest}.
     *
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     *
     * @returns a new {@link GetPageMonthInsightsRequest}.
     */
    public newGetPageMonthInsightsRequest(...metrics: WeekAndMonthMetric[]) {
        return new GetPageMonthInsightsRequest(this.accessToken, this.pageId, ...metrics);
    }

    /**
     * Builds a new {@link GetMediaInfoRequest}.
     *
     * @param mediaId the media object id.
     * @param fields the fields to retrieve from the API. If no field is specified, all are retrieved.
     *
     * @returns a new {@link GetMediaInfoRequest}.
     */
    public newGetMediaInfoRequest(mediaId: string, ...fields: MediaField[]) {
        return new GetMediaInfoRequest(this.accessToken, mediaId, ...fields);
    }

    /**
     * Builds a new {@link GetPostMediaInsightsRequest}.
     *
     * @param mediaId the media object id (must be of type 'Photo' or 'Video').
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     *
     * @returns a new {@link GetPostMediaInsightsRequest}.
     */
    public newGetPostMediaInsightsRequest(mediaId: string, ...metrics: SimplePostMetric[]) {
        return new GetSimplePostMediaInsightsRequest(this.accessToken, mediaId, ...metrics);
    }

    /**
     * Builds a new {@link GetPostMediaInsightsRequest}.
     *
     * @param mediaId the media object id (must be of type 'Story').
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     *
     * @returns a new {@link GetPostMediaInsightsRequest}.
     */
    public newGetStoryMediaInsightsRequest(mediaId: string, ...metrics: StoryMetric[]) {
        return new GetStoryMediaInsightsRequest(this.accessToken, mediaId, ...metrics);
    }
}
