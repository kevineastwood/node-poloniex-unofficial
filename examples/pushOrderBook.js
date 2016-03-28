
/*
 *
 * poloniex-unofficial
 *
 * Yet another unofficial Node.js wrapper for the Poloniex cryptocurrency
 * exchange APIs.
 *
 * Copyright (c) 2016 Tyler Filla
 *
 * This software may be modified and distributed under the terms of the MIT
 * license. See the LICENSE file for details.
 *
 */

// Import modules
var polo = require("./../");

// Get access to the push API
var poloPush = polo.api("push");

// Receive order book updates for BTC_ETH
poloPush.orderBook("BTC_ETH", (err, response) => {
    // Check for error
    if (err) {
        console.log("An error occurred");
        return;
    }
    
    // Log response
    console.log(response);
});

