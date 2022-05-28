<p>&nbsp;</p>
<p align="center" style="margin: auto;">
<img src="https://i.imgur.com/XKOEZPQ.png" width=300>
<h1 align="center">Placementek</h1>
</p>

<p align="center">
Craft simple and customizable skill tests to know the level of your users, students or employees.<br/><br/>
</p>

<p align="center">
  <a href="https://go.santek.dev/placementek"><strong>See Demo »</strong></a>
  <br />
  <br/>
</p>

## Table of Contents <!-- omit in toc -->

- [What is Placementek?](#what-is-placementek)
- [Features](#features)
- [Apps using Placementek](#apps-using-placementek)
- [How to run locally](#how-to-run-locally)
- [Type of questions](#type-of-questions)
- [Screens](#screens)

## What is Placementek?

Placementek is an open-source app built with [NextJS](https://nextjs.org/) & [ChakraUI](https://chakra-ui.com/) to craft placement tests in an easy way. It provides different question types like audio, videos, and text to cover a great number of possibilities.

## Features
- **Fetch questions from an API** – Get your questions from your server or a third-party provider. You only need to transform your data into a suitable form for Placementek.
- **Timer** - Set up a timer for each question or globally to avoid providing too much time to the applicants.
Results - Provide results in an easy but beautiful way. Create your own business-logic result calculation inside the API.
- **Call to action** - Generate engagement by providing a custom experience after users complete the placement. It included a form that sent the user information together with results to another configurable endpoint.

## Apps using Placementek

1. [The Office English Learning - English placement](https://go.santek.dev/theofficeplacement)

Are you using Placementek to craft your own placement test? Edit the [README.md](https://github.com/iamsantek/placementek/edit/main/README.md) of the repo and I will add it to the list.

## How to run locally

```
npm i
npm run dev
```

## Configurations

- **api/questions** - Endpoint to provide the necessary configuration to the front-end app. It includes questions and configurations related to the timer. 

- **api/results** - Make the calculations to generate the score of the placement.

- **api/contact** - Send the results together with the user information to an external provider for further processing.


## Type of questions

Any of the question types can receive an unlimited amount of possible answers. These configurations are regarding the questions themselves.

- Question: receive a normal string.
- Audio & video: receive an extra parameter source to fetch the audio or video.

## Screens

- Intro: Screen to introduce the guidelines about the test, how will be, and establish some rules.
- Questions: the test itself.
- Results: provide the score and correct answers.
- Contact form: catch the user information.
- Goodbye: screen for outro purposes.





