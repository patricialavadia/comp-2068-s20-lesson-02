const express = require('express');
const app = express();
const https = require('https');
const apiLink = 'https://insult.mattbas.org/api/insult';

app.get('/', (request,response) =>{
    https.get(apiLink, resp => {
    resp.on('data', chunk => {
        
        response.send(`
        <http>
            <head>
                <title>Oh Snap</title>
            </head>
            <body style=" font-family: 'Open Sans', sans-serif; text-align:center; 30px; font-weight: 300; line-height: 32px; margin: 0 0 72px; text-align: center;">
                <h1 style="color: #111; font-family: 'Helvetica Neue', sans-serif; font-size: 75px; font-weight: bold; letter-spacing: -1px; line-height: 1; text-align: center;">OH SNAP!</h1>
                
                <button onClick="window.location.href=window.location.href" title="Not Offended Yet?" style="background-color:E1AD01; font-size:30px;">Click Me Again!</button>
                
                <p style="background-color: #93291b; font-size:20px; border: 1px solid #333333; border-radius: 3px 3px 3px 3px; color: #f5f5f5; padding: 5px;">               
                    ${chunk.toString()}!                  
                </p>
            </body>
        </http>
        `);
        });
    });
});
app.listen(process.env.PORT || 3000);