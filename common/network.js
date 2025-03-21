class NeuralNetwork {
   constructor(neuronCounts) {
      this.levels = [];
      for (let i = 0; i < neuronCounts.length - 1; i++) {
         this.levels.push(new Level(neuronCounts[i], neuronCounts[i + 1]));
      }
   }

   static feedForward(givenInputs, network) {
      let outputs = Level.feedForward(givenInputs, network.levels[0]);
      for (let i = 1; i < network.levels.length; i++) {
         outputs = Level.feedForward(outputs, network.levels[i]);
      }
      return outputs;
   }
}

class Level {
   constructor(inputCount, outputCount) {
      this.inputs = new Array(inputCount);
      this.outputs = new Array(outputCount);
      this.biases = new Array(outputCount);

      this.weights = [];
      for (let i = 0; i < inputCount; i++) {
         this.weights[i] = new Array(outputCount);
      }

      Level.#randomize(this);
   }

   static #randomize(level) {
      for (let i = 0; i < level.inputs.length; i++) {
         for (let j = 0; j < level.outputs.length; j++) {
            level.weights[i][j] = Math.random() * 2 - 1;
         }
      }

      for (let i = 0; i < level.biases.length; i++) {
         level.biases[i] = Math.random() * 2 - 1;
      }
   }

   static feedForward(givenInputs, level) {
      for (let i = 0; i < level.inputs.length; i++) {
         level.inputs[i] = givenInputs[i];
      }

      for (let i = 0; i < level.outputs.length; i++) {
         let sum = 0;
         for (let j = 0; j < level.inputs.length; j++) {
            sum += level.inputs[j] * level.weights[j][i];
         }

         level.outputs[i] = Math.tanh(sum + level.biases[i]); // for tanh activations
         // level.outputs[i] = Math.max(0, sum + level.biases[i]); // for relu activation, does not like -ve
      }

      return level.outputs;
   }
}

try {
   module.exports = NeuralNetwork;
} catch (err) {}
