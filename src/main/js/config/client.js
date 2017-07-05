import rest from "rest";
import errorCode from "rest/interceptor/errorCode";
import mime from "rest/interceptor/mime";

module.exports = {
    createClient: function () {
        let client = rest;
        return client.wrap( mime )
                .wrap( errorCode, {code: 400} );
    }
};