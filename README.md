# Drawing-Recognizer-App
A simple drawing recognizer application built using mostly vanilla js.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Instructions](#instructions)
* [Information](#information)
* [Illustrations](#illustrations)


## General info
This is a simple drawing recognizer application utilizing neural network for the classification of the drawings. The images were taken from the repository [Dataset](https://github.com/gniziemazity/drawing-data/tree/main/data/). Here, the process of dataset generation, and feature extraction is done with node (using javascript), while the neural network are trained using python.

## Technologies
* Node 9.6.3
* pygame 3.1.1


## Instructions
1. Clone this repository.
2. Run the javascript scripts for dataset generation and feature extraction.
    ``` 
    cd node
    node dataset_generator.js
    node feature_extractor.js 
    ```
3. Then, navigate to the python folder and run the script to generate neural network.
    ```
    cd ../python
    python mlp.py
    ```
4. Then, navigating to the viewer.html from the browser shows the final output.

## Information
On running the datasetgenerator.js file, it generates a sample.json and sample.js file. It also resizes the image to fit for feature extraction.
On running the feature_extractor.js, firstly, it generates the features from the feature functions defined in the featureFunctions.js and then splits the dataset into training and testing data in 50-50.
Running the python script mlp.py, it generates a neural network with corresspoing biases and weights for each node and saves the information such that the viewer.html can parse through the information for prediction.


## Illustration
