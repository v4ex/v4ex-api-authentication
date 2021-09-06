#!/usr/bin/env node

const { program } = require('commander')
require('./cli/register')({})
require('./cli/login')


program.parse()
