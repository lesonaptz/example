<?php
// parameters
$hubVerifyToken = 'TOKEN123456abcd';
$accessToken = "EAAZAHPZCKuIQYBAEqJrgyK05wX4JUKwgom71m26SuCF1RZBsybonAi3ASdwU3YUuwF7YVVybEYZCNsZBh7sq8tCeTgJn83GvkvSNS4359EJmAlyDGuP9e44ZBpBjLg1vWVR2OIpbsAVkTMua9mlLmJifzLRGDvijHN2q8dsJknOwZDZD";
				
// check token at setup
if ($_REQUEST['hub_verify_token'] === $hubVerifyToken) {
  echo $_REQUEST['hub_challenge'];
  exit;
}
// handle bot's anwser
$input = json_decode(file_get_contents('php://input'), true);
$senderId = $input['entry'][0]['messaging'][0]['sender']['id'];
$messageText = $input['entry'][0]['messaging'][0]['message']['text'];
$answer = "I don't understand. Ask me 'hi'.";

$response = [
    'recipient' => [ 'id' => $senderId ],
    'message' => [ 'text' => $senderId ]
];
$ch = curl_init('https://graph.facebook.com/v2.6/me/messages?access_token='.$accessToken);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($response));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_exec($ch);
curl_close($ch);
