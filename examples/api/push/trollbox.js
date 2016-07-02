
/*
 *
 * poloniex-unofficial
 * https://git.io/polonode
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
var polo = require("./../../../");

// Get access to the push API
var poloPush = new polo.PushWrapper();

// Receive trollbox updates
poloPush.trollbox((err, response) => {
    if (err) {
        // Log error message
        console.log("An error occurred: " + err.msg);

        // Disconnect
        return true;
    }

    // Log chat message as "[rep] username: message"
    console.log("    [" + response.reputation + "] " + response.username + ": " + response.message);
});
