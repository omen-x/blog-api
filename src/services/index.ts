import { Application } from '../declarations';
import users from './users/users.service';
import articles from './articles/articles.service';
import uploads from './uploads/uploads.service';
import comments from './comments/comments.service';
import subscriptions from './subscriptions/subscriptions.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(users);
  app.configure(articles);
  app.configure(uploads);
  app.configure(comments);
  app.configure(subscriptions);
}
