# Bookmark UI [![CircleCI](https://circleci.com/gh/prabal-es/bookmark-ui.svg?style=svg&circle-token=54f45edb21d8d668f10df070d14b7dc742543691)](https://circleci.com/gh/prabal-es/bookmark-ui) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/a42ad2db589c4aa8b6156a74da765ffe)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=prabal-es/bookmark-ui&amp;utm_campaign=Badge_Grade) [![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)](https://bookmark-9.herokuapp.com)


With bookmark ui, you can save favorite webpages, tinify URL, share-it, manage-it and navigate to them in seconds from anywhere. Using bookmark-servive --
- User will generate short URLs which will expire after a standard default timespan. User will also be able to specify the expiration date. This will help us solve the problem of - generating tiny URLs quickly and sharing it with others.
- User will be able to create cards representing the url where each card has a short title, brief description and a customizable picture. Default picture would be the favicon of the serving application.
- User will be able to group cards in terms of tribes, feature teams, platforms or application. This would be like a catalog. User will be able to share the group urls.
- Each card will be a short url with the re-direction to the original url. This short url will have no expiration as it belongs to a group. The generation of this short url will be dynamic and unique and could carry some contextual information too.
- The creator of the group will be the admin(role) user after which s\he will be able to add one or more admin user who would have authority to make changes. Only admin user(s) can remove a user from admin role. At any point of time there must be at least one admin user for the group.
- Admin user(s) of the group will be able to authorize a card to be displayed on the group, make changes like updating or deleting card(s). Unless the admin user approves the card or its changes, it will not be displayed on the group page.
- A normal user i.e. not an admin user can suggest changes to an existing card. The changes are to be queued in order to be approved by the group's admin user(s).
- User will be able to share the group page enlisting all the cards of that group
- Admin user(s) will be able to import or export

## Running locally[without any database setup]:
```
git clone https://github.com/prabal-es/bookmark-ui.git

cd bookmark-ui

npm run prod-build

npm start

```
You can then access bookmark-ui here: [bookmark-ui](http://localhost:4200)
