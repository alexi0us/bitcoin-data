
/*
 * GET home page.
 */

exports.index = function(req, res){

var http = require("http");

    var options = {
        host: "mhsproxy.datastream.com",
        port: 80,
        path: "http://data.mtgox.com/api/2/BTCUSD/money/ticker_fast",
        headers: {
            Host: "data.mtgox.com"
        }

    };

    var issues_json = "";
    var currentValues =  http.get(options, function(response) {
        console.log('STATUS: ' + res.statusCode);
//        res.setEncoding('utf8');

        response.on('data', function (data) {
            console.log('BODY: ' + data.toString());
            issues_json += data;
        });

        response.on("end", function() {
            console.log(issues_json);
            var column_obj = JSON.parse(issues_json);
            res.render('index', {
                title: 'BC project',
                response: issues_json,
                objects: column_obj
            });
        });
    });
    currentValues.end();
//    var currentValues = function(req, res){
//        // call the doc() function and render the response in the callback
//        result(function(err, number) {
//            res.render('index', {pageData: {name : ['name 1', 'name2']}});
//        });
//    };


//    http.get(options, function(res) {
//        console.log('STATUS: ' + res.statusCode);
//        res.setEncoding('utf8');
//        res.on('data', function (chunk) {
//            console.log('BODY: ' + chunk.toString());
//            jres = JSON.parse(chunk.toString());
//            console.log('JSON: ' + jres['data']['buy']['value']);
//            buy_v = jres['data']['buy']['value']
//        });
//    });




};

exports.about = function(req, res){
    res.render('about', { title: 'About me' });
};

exports.contact = function(req, res){
    res.render('about', { title: 'Contact me' });
};