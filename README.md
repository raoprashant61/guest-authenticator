# guest-authenticator
A **Smart, Offline, Real-Time** web-app to allow only invited people in any event using `Face-Recognition Technology` or `QR Code`.

The face recognition is built using dlib's pretrained model with 99.38% accuracy. See [this](https://github.com/ageitgey/face_recognition#face-recognition) for more info. 

## Built with
* [Python3](https://www.python.org/) - Used to write face recognition script
* [dlib](http://dlib.net/) - Used for trained facial features and encodings
* [face_recognition](https://github.com/ageitgey/face_recognition) - Python3 package to work with dlib
* [MaterializeCSS](http://materializecss.com/) - Used as front-end material framework
* [Node.js](https://nodejs.org/) - Used for back-end web-server
* [Express.js](https://expressjs.com/) - Used as web-application framework
* [Socket.IO](https://socket.io/) - Used as real-time engine for communication

### Installations
1. Download the [face_recognition](https://github.com/ageitgey/face_recognition) python package.
2.  Download OpenCV3.
3. Download or clone my git repository code.
4. Download [Node.js](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/).
5.  Run `npm install` on the command line, make sure you do in the root of the project such that `package.json` file is visible on doing `ls`.


## How to use
1. The model expects a folder named `known_people` to have all the images of person you want to recognise with the name of person as the file name. If you want to recognise `Virat Kohli`, you would name the file as `Virat Kohli.jpg`.

2. The model learn encodings and want a folder named `data` to store the learnt encodings there. If folder is not present, Just do `mkdir data`. 

3. To run it: `npm run start`, after you see `Server listening on port: 3000.` open your browser and type: **`localhost:3000`** and it's done.

### Results
![](https://i.imgur.com/TzQEXUY.png)
![](https://i.imgur.com/KJ3dKQW.png)