export interface FacebookPage {
  id: string
  name: string
}

/**
 * Interface to represent the data regarding the list of Facebook
 * pages this user has authorized to your app.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.0.0
 */
export interface AuthorizedFacebookPagesData {
  data: Array<FacebookPage>
}
