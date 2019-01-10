import * as tf from '@tensorflow/tfjs';
//Predict
export function predict(y_vals) {
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
    //Get Prediction
    const t = f(2).dataSync()[0].toFixed(1);
    //Dispose tensors
    tf.dispose(m);
    tf.dispose(b);
    tf.dispose(optimizer);
    return t;
   });
   return ret;
}
