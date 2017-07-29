module.exports = (app) => {
  app.get('/hello', (req, res, next) => {
    console.log('hi');
  });
};
