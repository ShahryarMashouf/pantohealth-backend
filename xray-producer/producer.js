const amqp = require('amqplib');

async function sendData() {
  try {
    // اتصال به RabbitMQ
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const queue = 'xray_queue';

    // ایجاد صف (اگر وجود نداشت)
    await channel.assertQueue(queue);

    // داده نمونه x-ray
    const sampleData = {
      deviceId: 'device-001',
      time: Date.now(),
      data: [
        [1000, [51.339764, 12.339223, 1.2]],
        [2000, [51.339777, 12.339211, 1.5]],
      ],
    };

    // ارسال داده به RabbitMQ
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(sampleData)));
    console.log('✅ Data sent:', sampleData);

    // بستن اتصال پس از ارسال
    setTimeout(() => {
      connection.close();
    }, 500);
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

sendData();
