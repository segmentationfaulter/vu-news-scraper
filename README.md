#Virtual University SMS Alerts Utility
This is a small program written in JavaScript which runs on Node.js. It keeps watching the [news page](http://vu.edu.pk/News/NewsList.aspx) of Virtual University of Pakistan and fetches the latest news from there as soon as they happen and then sends the title of the news and its link as an SMS to the subscribers. I wrote it because being a VU student, I had to keep visiting VU website all the time to keep up-to-date with the latest news from the university.
##How to Subscribe:
Send an SMS to **40404** with **'Follow UpdatesVU'** written in it (without quotes obviously).
##Pricing:
Rs. 1 will be deducted from your account balance once for subscribing to this service, receiving alerts is totally free of cost.
##How to Unsubscribe:
If you ever need to unsubscribe, simply send **STOP** to **40404**.
##Frequently Asked Questions:
Q: Is there any delay involved between the news surfacing on VU website and a subscriber receiving it on his/her Mobile?
A: Yes, it can be up-to 15 minutes if there are no delays from cellular network involved.
Q: Virtual University sends me notifications about announcement and assignments on my LMS, why do I need these alerts then?
A: Yes, Virtual University sends SMS alerts to its students about announcements and assignments in there LMS, but it does not send the news which are published on its [main website](http://vu.edu.pk/News/NewsList.aspx). These news involve news related to exams, Fee dates, LMS account block warnings and everything else.
Q: Why do you keep polling the VU servers for too little gain thus overloading them?
A: Firstly, keeping up-to-date for a student with his/her institution is not a little gain when he/she can't stick to a computer where there there is internet too for a long time. Secondly, I send a GET request to VU servers  every 15 minutes, that's why there can be a delay of up-to 15 minutes between news is published by VU and received by the subscriber. A request after every 15 minutes wouldn't matter for an organization which handles thousands of requests daily.
Q: Do I need a twitter account to receive SMS alerts?
A: No, you don't need any kind of account to receive these alerts even though the messages are delivered via Twitter.
