//Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { json } = require('body-parser');
const { stringify } = require('querystring');
const { response } = require('express');
const { Console } = require('console');
const { json } = require('body-parser');
const { stringify } = require('querystring');
const { response } = require('express');
const { Console } = require('console');