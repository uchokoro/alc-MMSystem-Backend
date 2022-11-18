<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

# ALC Mentors Management System (MMS) 

This is the app for the Mentors Management system. MMS is a people management app that enables proper
coordination of mentors needed to execute projects, ranging from recruitment to off-boarding.


# Prerequisites

The app has the following minimum requirements:
1. `NodeJS` v16
2. `Yarn`


# App Features

The main app features and functionalities are as follows:
1. Authentication/Authorization
2. Recruitment
3. Communication and Engagement
4. Program Scheduling
5. Activities Tracking and Reporting
6. Discussion Forum

There are three groups of user categories namely `Admin`, `Mentor Manager(MM)`, and `Mentor`. The expected access levels for this group
users is listed as follows:

## Admin Category:
- Login/Logout
- Create program
- Add MM
- Add mentor
- Label/unlabel MM
- Label/unlabel mentors
- See the list of all MM
- See the list of all mentors
- Browse MM details
- Browse mentor’s details
- Search by name, category, region, program, engagement status
- Assign/unassign MM to program
- Assign/unassign mentor to program
- Archive a program
- Delete a program
- Generate program report at interval
- Download program report
- Share program report via email
- Generate MM report
- Delete MM
- Delete mentor
- Receive notification from MM activities
- Generate MM certificate
- Generate mentor certificate
- Approve mentor certificate generated and shared by MM
- Send broadcast message to all MM
- Send broadcast message to all mentors
- Chat 1:1 with any user
- See the list of mentors’ applicants
- Set up criteria for selection
- Generate the list of selected mentors
- Message the list of selected mentors
- Generate the list of unselected mentors
- Message the list of unselected mentors
- Engage on the discussion forum etc.


# How to use this repo

To use and contribute to the project, do the following:
1. Fork it to your GitHub account.
2. Clone the repo with the command git clone to your local mechine.
3. Open a feature branch from the 'develop' branch.
4. Make sure the name is descriptive for your branch but not too long. Lead with what the the branch is doing
   eg new feature or bug but follow this pattern `type/branch-description` eg `feature/add-login-functionality`.
5. Ensure your branch is up to date with latest changes before pushing.
6. Reference the issue you worked on in your PRReference the issue you worked on in your PR.
7. Open a pull request against the develop branch and request a review from your Team Lead.

## Design
- The design can be find [here](https://www.figma.com/file/JNZKj3lachPypSOMBOhC1e/MMS-ALC-Mobile-Project?node-id=0%3A1)
- Find the Prototypes here, [Admim](https://www.figma.com/file/41d70tx02pRHlj8wvc3WN8/admin-prototype?node-id=0%3A1&t=7tieNXXu5Bu4IaEg-1) [Mentor Manager](https://www.figma.com/file/EeXcwPCnyvw5r45EgyCoIG/Mentor-Manager-prototype?node-id=0%3A1&t=JeA1aXVNqTcX2Yob-1) [Mentor](https://www.figma.com/file/bUlIQe3tOUH14n6aOUeAsF/mentor-prototype?node-id=0%3A1&t=gSJrcVE00ehsLMtU-1)
- Work on your Team assigned task eg. Team 1, Team 2 etc.
- NOTE: Stickly adhere to the style guide on the design, buttons, texts etc.

# Creating issue for your Teams
- Your Issues should take this simple pattern for easy identification by your team members: feature or bug name-mmm-team-1
- Find a sample [here](https://github.com/ALCOpenSource/alc-MMSystem-admin/issues/6)

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-13-orange.svg?style=flat-square)](#contributors)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
