sudo npm install -g wscat

wscat -c wss://[some-uniqueid].execute-api.[region].amazonaws.com/[stage-name]

# send the following message
{ "action": "sendmessage", "data": "Hello World!" }


# run in multiple consoles