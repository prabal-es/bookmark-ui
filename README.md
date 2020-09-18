# Bookmark UI [![CircleCI](https://circleci.com/gh/prabal-es/bookmark-ui.svg?style=svg&circle-token=54f45edb21d8d668f10df070d14b7dc742543691)](https://circleci.com/gh/prabal-es/bookmark-ui) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/a42ad2db589c4aa8b6156a74da765ffe)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=prabal-es/bookmark-ui&amp;utm_campaign=Badge_Grade) [![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)](https://bookmark-9.herokuapp.com)


With bookmark ui, you can save favorite webpages, tinify URL, share-it, manage-it and navigate to them in seconds from anywhere. Using bookmark-ui --
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

> **Note**: Server is point to `https://bookmark-service-9.herokuapp.com/api/v1/swagger-ui.html` 
If you want to change the pointing serve then update the `.\src\environments\environment.prod.ts` line numer 3 `bookmark_service_api_url` 
and again build it and run. Example:
```
npm run prod-build

npm start
```

## UI Flow:
- Login screen: Users can ligin as 'Prabal', 'Anshu' or 'Anand' by clicking on it.
![login user](https://github.com/prabal-es/bookmark-ui/blob/development/.github/docs/login_user.png?raw=true)

- Home scree[Tiny URLs] is showing the list of Tiny URL created by selected user and user can add more URL also by putting details.
![tiny_details](https://github.com/prabal-es/bookmark-ui/blob/development/.github/docs/tiny_details.png?raw=true)

- Card screen is showing the list of cards created by selected user and user can add more cards also by putting details.
![card_list](https://github.com/prabal-es/bookmark-ui/blob/development/.github/docs/card_list.png?raw=true)

- Card details popup is showing the details of the cards.
![card_details](https://github.com/prabal-es/bookmark-ui/blob/development/.github/docs/card_details.png?raw=true)

- Group screen is showing the list of groups created by selected user and user can add more cards also by putting details.
![group_list](https://github.com/prabal-es/bookmark-ui/blob/development/.github/docs/group_list.png?raw=true)

- Group details is showing the list of cards in that group.
![group_details](https://github.com/prabal-es/bookmark-ui/blob/development/.github/docs/group_details.png?raw=true)

- Group details admin pop is showing the list of admin users of that group. User can add or remove admins also
![group_details_admin](https://github.com/prabal-es/bookmark-ui/blob/development/.github/docs/group_details_admin.png?raw=true)

- Group details card pop is showing the list of user cards that can be added or removed from the group.
![group_details_cards](https://github.com/prabal-es/bookmark-ui/blob/development/.github/docs/group_details_cards.png?raw=true)

- Company group will show all the groups in the company.
![company_groups](https://github.com/prabal-es/bookmark-ui/blob/development/.github/docs/company_groups.png?raw=true)

- User can see the list of companies by clicking on `company` link
![company_list](https://github.com/prabal-es/bookmark-ui/blob/development/.github/docs/company_list.png?raw=true)

- User can see the details of the company by clicking on details button. User can also see the list of users and groups which are part of current company.
![company_details](https://github.com/prabal-es/bookmark-ui/blob/development/.github/docs/company_details.png?raw=true)

> All he screens are responsive and tested on laptop and mobile [horizontal and vertical].
> Company group view, suggestion and update and import/export is in progress.




## Running application details: 
- **URL**: https://bookmark-9.herokuapp.com/
- **CircleCI URL**: https://app.circleci.com/pipelines/github/prabal-es/bookmark-ui
- **Codacy URL**: https://app.codacy.com/manual/prabal-es/bookmark-ui/dashboard
- **Heroku URL**: https://dashboard.heroku.com/apps/bookmark-9
- **Build Packages**: https://github.com/prabal-es/bookmark-ui/packages/
- Dependent backend project GitHub URL[**Bookmark Service**]: https://github.com/prabal-es/bookmark-service
- Dependent backend project **running** link: https://bookmark-service-9.herokuapp.com/api/v1/swagger-ui.html
- *Clickup URL** [For story traking]: https://app.clickup.com/3319214/v/l/359de-18?pr=3327372

> Note: Heroku Dyno shutdown if not in use. So First time when you hit the running app it will take longer time but once the Dyno starts it will run fine.

## Improvment:
> Public group card update and display
> Import and export of cards.
> Aline with widgets.


  
