const express = require('express');
const tf = require('@tensorflow/tfjs-node');
const Datastore = require('nedb');
const port = 5000;

const app = express();
app.listen(port, () => console.log(`Listening on port ${port}`));

const database = new Datastore();
//Database which also calculates the parseFloat(prediction for each of the statistical categories
//This should make the loading of the pages faster and all the calculation handled in the db
console.log('Starting to load the database');
database.insert({_id: 1, position: 'C', name:'Jonas Valunciunas', team: 'Memphis Grizzlies',      gp: 49, gpPred: parseInt(predict([60, 80, 77])), ppg: 15.6, ppgPred: parseFloat(predict([12.8, 12.0, 12.7])), apg: 1.4, apgPred: parseFloat(predict([0.7, 0.7, 1.1])), rbg: 8.6,  rbgPred: parseFloat(predict([9.1, 9.5, 8.6]))});
database.insert({_id: 2, position: 'C', name:'Anthony Davis', team: 'Los Angeles Lakers',         gp: 56, gpPred: parseInt(predict([61, 75, 75])), ppg: 25.9, ppgPred: parseFloat(predict([24.3, 28.0, 28.1])), apg: 3.9, apgPred: parseFloat(predict([1.9, 2.1, 2.3])), rbg: 12.0, rbgPred: parseFloat(predict([10.3, 11.8, 11.1]))});
database.insert({_id: 3, position: 'C', name: 'Joel Embiid', team: 'Philadeplhia 76ers',          gp: 64, gpPred: parseInt(predict([31, 31, 63])), ppg: 27.5, ppgPred: parseFloat(predict([20.2, 20.2, 22.9])), apg: 3.5, apgPred: parseFloat(predict([2.1, 2.1, 3.2])), rbg: 13.6, rbgPred: parseFloat(predict([7.8, 7.8, 11.0]))});
database.insert({_id: 4, position: 'C', name: 'Marc Gasol', team: 'Toronto Raptors',              gp: 79, gpPred: parseInt(predict([52, 74, 73])), ppg: 13.6, ppgPred: parseFloat(predict([16.6, 19.5, 17.2])), apg: 4.4, apgPred: parseFloat(predict([3.8, 4.6, 4.2])), rbg: 7.9,  rbgPred: parseFloat(predict([7.0, 6.3, 8.1]))});
database.insert({_id: 5, position: 'C', name: 'Nikola Jokic', team: 'Denver Nuggets',             gp: 80, gpPred: parseInt(predict([80, 73, 75])), ppg: 20.1, ppgPred: parseFloat(predict([10.0, 16.7, 18.5])), apg: 7.3, apgPred: parseFloat(predict([2.4, 4.9, 6.1])), rbg: 10.8, rbgPred: parseFloat(predict([7.0, 9.8, 10.7]))});
database.insert({_id: 6, position: 'PG', name:'Kyle Lowry', team: 'Toronto Raptors',              gp: 65, gpPred: parseInt(predict([77, 60, 78])), ppg: 14.2, ppgPred: parseFloat(predict([21.2, 22.4, 16.2])), apg: 8.7, apgPred: parseFloat(predict([6.4, 7.0, 6.9])), rbg: 4.8, rbgPred: parseFloat(predict([4.7, 4.8, 5.6]))});
database.insert({_id: 7, position: 'PG', name:'Steph Curry', team: 'Golden State Warriors',       gp: 69, gpPred: parseInt(predict([79, 79, 51])), ppg: 27.3, ppgPred: parseFloat(predict([30.1, 25.3, 26.4])), apg: 5.2, apgPred: parseFloat(predict([6.7, 6.6, 6.1])), rbg: 5.3, rbgPred: parseFloat(predict([5.4, 4.5, 5.1]))});
database.insert({_id: 8, position: 'PG', name: 'Kyrie Irving', team: 'Brooklyn Nets',             gp: 67, gpPred: parseInt(predict([53, 72, 60])), ppg: 23.8, ppgPred: parseFloat(predict([19.6, 25.2, 24.4])), apg: 6.9, apgPred: parseFloat(predict([4.7, 5.8, 5.1])), rbg: 5.0, rbgPred: parseFloat(predict([3.0, 3.2, 3.8]))});
database.insert({_id: 9, position: 'PG', name: 'Russell Westbrook', team: 'Houston Rockets',      gp: 73, gpPred: parseInt(predict([80, 81, 80])), ppg: 22.9, ppgPred: parseFloat(predict([23.5, 31.6, 25.4])), apg: 10.7,apgPred: parseFloat(predict([10.4, 10.4, 10.1])), rbg: 11.1, rbgPred: parseFloat(predict([7.8, 10.7, 10.1]))});
database.insert({_id: 10, position: 'PG', name: 'Damian Lillard', team: 'Portland Trail Blazers', gp: 80, gpPred: parseInt(predict([75, 75, 73])), ppg: 25.8, ppgPred: parseFloat(predict([25.1, 27.0, 26.9])), apg: 6.9, apgPred: parseFloat(predict([6.8, 5.9, 6.6])), rbg: 4.6, rbgPred: parseFloat(predict([4.0, 4.9, 4.5]))});
database.insert({_id: 11, position: 'PF', name:'Serge Ibaka', team: 'Toronto Raptors',            gp: 74, gpPred: parseInt(predict([78, 79, 76])), ppg: 15.0, ppgPred: parseFloat(predict([12.6, 14.8, 12.6])), apg: 1.3, apgPred: parseFloat(predict([0.8, 0.9, 0.8])), rbg: 8.1, rbgPred: parseFloat(predict([6.8, 6.8, 6.3]))});
database.insert({_id: 12, position: 'PF', name:'Pascal Siakam', team: 'Toronto Raptors',          gp: 80, gpPred: parseInt(predict([55, 55, 81])), ppg: 16.9, ppgPred: parseFloat(predict([4.2, 4.2, 7.3])),    apg: 3.1, apgPred: parseFloat(predict([0.3, 0.3, 3.1])), rbg: 6.9, rbgPred: parseFloat(predict([3.4, 3.4, 4.5]))});
database.insert({_id: 13, position: 'PF', name: 'Blake Griffin', team:'Detroit Pistons',          gp: 75, gpPred: parseInt(predict([35, 61, 58])), ppg: 24.5, ppgPred: parseFloat(predict([21.4, 21.6, 21.4])), apg: 5.4, apgPred: parseFloat(predict([4.9, 4.9, 5.8])), rbg: 7.5, rbgPred: parseFloat(predict([8.4, 8.1, 7.4]))});
database.insert({_id: 14, position: 'PF', name: 'LaMarcus Aldridge', team: 'San Antonio Spurs',   gp: 81, gpPred: parseInt(predict([74, 72, 75])), ppg: 21.3, ppgPred: parseFloat(predict([18.0, 17.3, 23.1])), apg: 2.4, apgPred: parseFloat(predict([1.5, 1.9, 2.0])), rbg: 9.2, rbgPred: parseFloat(predict([8.5, 7.3, 8.5]))});
database.insert({_id: 15, position: 'PF', name: 'Kevin Love', team: 'Cleveland Cavaliers',        gp: 22, gpPred: parseInt(predict([77, 60, 59])), ppg: 17.0, ppgPred: parseFloat(predict([16.0, 19.0, 17.6])), apg: 2.2, apgPred: parseFloat(predict([2.4, 1.9, 1.7])), rbg: 10.9, rbgPred: parseFloat(predict([9.9, 11.1, 9.3]))});
database.insert({_id: 16, position: 'SG', name:'Danny Green', team: 'Los Angeles Lakers',         gp: 80, gpPred: parseInt(predict([79, 68, 70])), ppg: 10.3, ppgPred: parseFloat(predict([7.2, 7.3, 8.6])),apg: 1.6, apgPred: parseFloat(predict([1.8, 1.8, 1.6])), rbg: 4.0, rbgPred: parseFloat(predict([3.8, 3.3, 3.6]))});
database.insert({_id: 17, position: 'SG', name:'Demar Derozan', team: 'San Antonio Spurs',        gp: 77, gpPred: parseInt(predict([78, 74, 80])), ppg: 21.2, ppgPred: parseFloat(predict([23.5, 27.3, 23.0])),apg: 6.2, apgPred: parseFloat(predict([4.0, 3.9, 5.2])), rbg: 6.0, rbgPred: parseFloat(predict([4.5, 5.2, 3.9]))});
database.insert({_id: 18, position: 'SG', name: 'Klay Thompson', team: 'Golden State Warriors',   gp: 78, gpPred: parseInt(predict([80, 78, 73])), ppg:21.5, ppgPred: parseFloat(predict([22.1, 22.3, 20.0])),apg: 2.4, apgPred: parseFloat(predict([2.1, 2.1, 2.5])), rbg: 3.8, rbgPred: parseFloat(predict([3.8, 3.7, 3.8]))});
database.insert({_id: 19, position: 'SG', name: 'James Harden', team: "Houston Rockets",          gp: 78, gpPred: parseInt(predict([82, 81, 72])), ppg:36.1, ppgPred: parseFloat(predict([29.0, 29.1, 30.4])),apg: 7.5, apgPred: parseFloat(predict([7.5, 11.2, 8.8])), rbg: 6.6, rbgPred: parseFloat(predict([6.1, 8.1, 5.4]))});
database.insert({_id: 20, position: 'SG', name: 'Jimmy Butler', team: 'Miami Heat',               gp: 65, gpPred: parseInt(predict([67, 76, 59])), ppg:18.7, ppgPred: parseFloat(predict([20.9, 23.9, 22.2])),apg: 4.0, apgPred: parseFloat(predict([5.5, 4.9, 4.3])), rbg: 5.3, rbgPred: parseFloat(predict([6.2, 5.3, 5.2]))});
database.insert({_id: 21, position: 'SF', name:'Kawhi Leonard', team: 'Los Angeles Clippers',     gp: 60, gpPred: parseInt(predict([64, 72, 74])), ppg: 26.6, ppgPred: parseFloat(predict([16.5, 21.2, 25.5])),apg: 3.3, apgPred: parseFloat(predict([2.5, 2.6, 3.5])),rbg: 7.3, rbgPred: parseFloat(predict([7.2, 6.8, 5.8]))});
database.insert({_id: 22, position: 'SF', name:'LeBron James', team: 'Los Angeles Lakers',        gp: 55, gpPred: parseInt(predict([76, 74, 82])), ppg: 27.4, ppgPred: parseFloat(predict([25.3, 26.4, 27.5])),apg: 8.3, apgPred: parseFloat(predict([6.8, 8.7, 9.1])),rbg: 8.5, rbgPred: parseFloat(predict([7.4, 8.6, 8.6]))});
database.insert({_id: 23, position: 'SF', name: 'Kevin Durant', team: 'Brooklyn Nets',            gp: 78, gpPred: parseInt(predict([72, 62, 68])), ppg: 26.0, ppgPred: parseFloat(predict([28.2, 25.1, 26.4])),apg: 5.9, apgPred: parseFloat(predict([5.0, 4.8, 5.4])),rbg: 6.4, rbgPred: parseFloat(predict([8.2, 8.3, 6.8]))});
database.insert({_id: 24, position: 'SF', name: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', gp: 72, gpPred: parseInt(predict([80, 80, 75])), ppg: 27.7, ppgPred: parseFloat(predict([16.9, 22.9, 26.9])),apg: 5.9, apgPred: parseFloat(predict([4.3, 5.4, 4.8])),rbg: 12.5, rbgPred: parseFloat(predict([7.7, 8.8, 10.0]))});
database.insert({_id: 25, position: 'SF', name: 'Paul George', team: 'Los Angeles Clippers',      gp: 77, gpPred: parseInt(predict([81, 75, 79])), ppg: 28.0, ppgPred: parseFloat(predict([23.1, 23.7, 21.9])),apg: 4.1, apgPred: parseFloat(predict([4.1, 3.3, 3.3])),rbg: 8.2, rbgPred: parseFloat(predict([7.0, 6.6, 5.7]))});
console.log('Finished loading database begin to start client side');

app.get('/', (req, res) => {
  res.json({"Message": "This is the start page of our server"});
});

app.get('/players', (request, response) => {
  if (request.query.name == undefined) {
    var gp  = request.query.gp;
    var ppg = request.query.ppg;
    var rbg = request.query.rbg;
    var apg = request.query.apg;
    if (gp != undefined) {
      database.find({gpPred : {$gte : parseFloat(gp)}}, (err, data) => {
        if (err) {
          response.end();
          return;
        }
        response.json(data);
      });
    }
    else if (ppg != undefined) {
      database.find({ppgPred : {$gte : parseFloat(ppg)}}, (err, data) => {
        if (err) {
          response.end();
          return;
        }
        response.json(data);
      });
    }
    else if (rbg != undefined) {
      database.find({rbgPred : {$gte : parseFloat(rbg)}}, (err, data) => {
        if (err) {
          response.end();
          return;
        }
        response.json(data);
      });
    }
    else if (apg != undefined) {
      database.find({apgPred : {$gte : parseFloat(apg)}}, (err, data) => {
        if (err) {
          response.end();
          return;
        }
        response.json(data);
      });
    }
    else {
      database.find({}, (err, data) => {
        if (err) {
          response.end();
          return;
        }
        response.json(data);
      });
    }
  }
  else {
    var regName = new RegExp('^.*' + request.query.name+ '.*$', "i");
    database.find({name: regName}, (err, data) => {
      if (err) {
        response.end();
        return;
      }
      response.json(data);
    });
  }
});

app.get('/players/centers', (request, response) => {
  database.find({position: 'C'}, (err, centers) => {
    if (err) {
      response.end();
      return;
    }
    response.json(centers);
  });
});

app.get('/players/pointguards', (request, response) => {
  database.find({position: 'PG'}, (err, pointguards) => {
    if (err) {
      response.end();
      return;
    }
    response.json(pointguards);
  });
});

app.get('/players/shootingguards', (request, response) => {
  database.find({position: 'SG'}, (err, shootingguards) => {
    if (err) {
      response.end();
      return;
    }
    response.json(shootingguards);
  });
});

app.get('/players/powerforwards', (request, response) => {
  database.find({position: 'PF'}, (err, powerforwards) => {
    if (err) {
      response.end();
      return;
    }
    response.json(powerforwards);
  });
});

app.get('/players/smallforwards', (request, response) => {
  database.find({position: 'SF'}, (err, smallforwards) => {
    if (err) {
      response.end();
      return;
    }
    response.json(smallforwards);
  });
});

//parseFloat(predict
function predict(y_vals) {
  // // Define a model for linear regression.
  const ret = tf.tidy(() => {
    const xs = tf.tensor1d([0, 1, 2]);
    const ys = tf.tensor1d(y_vals);

    const m = tf.scalar(Math.random()).variable();
    const b = tf.scalar(Math.random()).variable();

    // y = mx + b
    const f = x => m.mul(x).add(b);
    const loss = (pred, label) => pred.sub(label).square().mean();

    const learningRate = 0.05;
    const optimizer = tf.train.sgd(learningRate);

    // Train the model.
    for (let i = 0; i < 100; i++) {
       optimizer.minimize(() => loss(f(xs), ys));
    }
    //Get parseFloat(prediction
    const t = f(2).dataSync()[0].toFixed(1);
    //Dispose tensors
    tf.dispose(m);
    tf.dispose(b);
    tf.dispose(optimizer);
    return t;
   });
   return ret;
}
