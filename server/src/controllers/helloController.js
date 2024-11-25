// A simple controller for responding with "Hello World!"
exports.sayHello = (req, res) => {
    res.status(200).json({ message: 'Hello Whats Up!!' });
};
