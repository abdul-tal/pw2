self.addEventListener('push', (e) => {
  console.log('pusshhhhhh event')
    const options = {
        body: 'Simple piece of body text.\nSecond line of body text :)',
      };
    // self.registration.showNotification('Hello world!', options);
    e.waitUntil(self.registration.showNotification('Hello world!', {
      body: 'Notified by Abdul'
  }));
  });