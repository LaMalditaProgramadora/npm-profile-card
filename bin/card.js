#!/usr/bin/env node

/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable semi */

"use strict";

import chalk from "chalk";
import boxen from "boxen";

const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

const data = {
  name: chalk.white("           Jimena A. Ruiz Cerna"),
  shorthandle: chalk.white("Jime"),
  handle: chalk.white("@LaMalditaProgramadora"),
  work: chalk.white("Ingeniero de Software & Power Ranger"),
  youtube:
    chalk.gray("https://www.youtube.com/c/") +
    chalk.green("LaMalditaProgramadora"),
  github:
    chalk.gray("https://github.com/") + chalk.green("LaMalditaProgramadora"),
  linkedin:
    chalk.gray("https://www.linkedin.com/in/") +
    chalk.blue("jimena-alexandra-ruiz-cerna"),
  npx: chalk.red("npx") + " " + chalk.white("npm-profile-card"),
  labelWork: chalk.white.bold("    Work:"),
  labelYouTube: chalk.white.bold(" YouTube:"),
  labelGitHub: chalk.white.bold("  GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelCard: chalk.white.bold("    Card:"),
};

const newline = "\n";
const heading = `${data.name} / ${data.shorthandle} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const youtubing = `${data.labelYouTube}  ${data.youtube}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const carding = `${data.labelCard}  ${data.npx}`;

const output =
  heading +
  newline +
  newline +
  working +
  newline +
  youtubing +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
