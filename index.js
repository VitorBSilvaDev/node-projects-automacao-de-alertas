import getAlerts from './mockApi.js';

import axios from 'axios';

// Insira seu slackWebHook
const slackWebHookUrl = '';

async function sendSlackMessage(message) {
    try {
        await axios.post(slackWebHookUrl, { text: message });
        console.log('Slack message sent with succes!');
    } catch (err) {
        console.log('Error trying to send slack message: ', err.message);
    }
}

async function checkAndSendAlerts() {
    try {
        const response = await getAlerts();
        const alerts = response.alerts;

        console.log('Checking alerts...')
        
        // For in - Itera sobre as propriedades de um objeto
        // For of - Itera sobre os valores de um objeto
        for (const alert of alerts) {
            if (alert.status === 'critical' || alert.status === 'warning') {
                const message = `ALERT: ${alert.id} : status : ${alert.status.toUpperCase()} : Message : ${alert.message}`
                await sendSlackMessage(message);
            }
        }
    } catch (err){
        console.log('Error trying to get mock data: ', err.message);
    }
}


checkAndSendAlerts();


