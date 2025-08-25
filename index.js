import getAlerts from './mockApi.js';

import axios from 'axios';

const slackWebHookUrl = 'https://hooks.slack.com/services/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';

async function sendSlackMessage(message) {
    try {
        await axios.post(slackWebHookUrl, { text: message });
        console.log('Slack message sent with succes!');
    } catch (err) {
        console.log('Error trying to send slack message');
    }
}

async function checkAndSendAlerts() {
    try {
        const response = await getAlerts();
        const alerts = response.alerts;

        console.log('Checking alerts...')
        for (const alert of alerts) {
            if (alert.status === 'critical' || alert.status === 'warning') {
                const message = `ALERT: ${alert.id} : status : ${alert.status.toUpperCase()} : Message : ${alert.message}`
                sendSlackMessage(message);
            }
        }
    } catch (err){
        console.log('Error trying to get mock data');
    }
}

checkAndSendAlerts();