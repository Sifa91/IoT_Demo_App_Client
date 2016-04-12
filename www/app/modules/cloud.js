/*
 *  Author: Colum Bennett <colum.bennett@feedhenry.com>
 *  Re-useable Angular service module using FeedHenry Hybird API "$fh.cloud"" call.
 *  See developers docs, http://docs.feedhenry.com/
 */

/*
 *  @endpoint : name of required cloud endpoint.
 *  @params : request parameters for given endpoint.
 *  @succesCb : if cloud call is successful, perform this operation.
 *  @errCb : if call fails, perform this operation.
 */

angular.module('fhcloud', ['ngResource']).service("fhcloud", function() {
    this.cloudGet = function(cloudEndpoint, url, successCb, errCb) {
      var params = {
        path: cloudEndpoint,
        method: "GET",
        data: {url: url},
        timeout: 15000
      };

      $fh.cloud(params, successCb, errCb);
    };
    this.cloudPost = function(cloudEndpoint, url, successCb, errCb) {
      var params = {
        path: cloudEndpoint,
        method: "POST",
        data: {
          url: url
        },
        timeout: 15000
      };

      $fh.cloud(params, successCb, errCb);
    };
});