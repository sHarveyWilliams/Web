#!/usr/bin/env node

var fs, storage, express, bodyParser, restApi, multipart, multipartMiddleware;

// storage part

fs = require('fs');

storage = {
    /**
     * storage file name
     */
    fileName: 'mydb.dat',

    /**
     * storage cache
     */
    data: [],

    /**
     * return full collection
     *
     * @returns {Array<Object>}
     */
    getAll: function() {
        return this.data;
    },

    /**
     * return full collection
     *
     * @param {Number} id
     *
     * @returns {Object}
     */
    getItem: function(id) {
        return this.data[id];
    },

    /**
     * add item
     *
     * @param {Object} item
     *
     * @return {Number} new record id
     */
    addItem: function(item) {
        this.data.push(item);

        this.save();

        return this.data.length - 1;
    },

    /**
     * edit item
     *
     * @param {Number} id
     * @param {Object} item
     */
    saveItem: function(id, item) {
        this.data[id] = item;

        this.save();
    },

    /**
     * remove item from collection
     *
     * @param {Number} id
     */
    removeItem: function(id) {
        this.data = this.data.splice(id, 1);

        this.save();
    },

    /**
     * save data to persistent storage
     */
    save: function() {
        var buf;

        buf = JSON.stringify(this.data);
        fs.writeFileSync(this.fileName, buf);
    },

    /**
     * load data from persistent storage
     */
    load: function() {
        var buf;

        if (fs.existsSync(this.fileName)) {
            buf = fs.readFileSync(this.fileName);

            this.data = JSON.parse(buf);
        } else {
            this.data = [];

            this.save();
        }
    }
};

storage.load();

// web server part

express = require('express');
bodyParser = require('body-parser');
restApi = express();

restApi.use(bodyParser.json());
restApi.use(bodyParser.urlencoded({ extended: false }));

restApi.get('/api/tasks', function(req, res) {
    var response;

    response = {
        status: 'ok',
        method: 'task list',
        data: storage.getAll()
    };

    res.json(response);
});

restApi.post('/api/tasks/add', function(req, res) {
    var item, response;

    item = req.body;

    response = {
        status: 'ok',
        method: 'task add',
        data: storage.addItem(item)
    };

    res.json(response);
});

restApi.post('/api/tasks/:id/del', function(req, res) {
    var response;

    storage.removeItem(req.params.id);

    response = {
        status: 'ok',
        method: 'task remove',
        data: true
    };

    res.json(response);
});

restApi.post('/api/tasks/:id/edit', function(req, res) {
    var item, response;

    item = req.body;
    storage.saveItem(req.params.id, item);

    response = {
        status: 'ok',
        method: 'task edit',
        data: item
    };

    res.json(response);
});

restApi.get('/api/demo/:url', function(req, res) {
    res.json(req.url);
});

multipart = require('connect-multiparty');
multipartMiddleware = multipart();

restApi.post('/api/upload', multipartMiddleware, function(req, res) {
    console.log(req.files);
    /*
    { myfile:
       { fieldName: 'myfile',
         originalFilename: '1.jpg',
         path: '/tmp/L9_LhmMWjuU9QHyUq2G1pGpR.jpg',
         headers:
          { 'content-disposition': 'form-data; name="myfile"; filename="1.jpg"',
            'content-type': 'image/jpeg' },
         size: 772598,
         name: '1.jpg',
         type: 'image/jpeg' }
     }
     */
    // don't forget to delete all req.files when done
    res.json('ok!');
});

restApi.use('/', express.static('public'));

restApi.listen(3000);

console.log('server listens as port 3000');
