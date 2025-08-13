const express = require('express');
const cors = require ('cors');

const connectDb = require('./dbConfig/db');
const queryRouter = require