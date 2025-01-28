# Drawing-Recognizer-App
A simple drawing recognizer application built using mostly vanilla JS.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Instructions](#instructions)
* [Information](#information)
* [Illustrations](#illustrations)


## General info
This is a simple drawing recognizer application utilizing a neural network to classify the drawings. The images were taken from the repository [Dataset](https://github.com/gniziemazity/drawing-data/tree/main/data/). Here, the dataset generation process and feature extraction is done with node (using javascript), while the neural network is trained using Python.

## Technologies
* Node 9.6.3
* pygame 3.1.1


## Instructions
1. Clone this repository.
2. Go to the node folder and run
   `npm install`
   to install the needed node modules.
4. Run the javascript scripts for dataset generation and feature extraction.
    ``` 
    cd node
    npm install
    ```
    The `npm install` runs the following two commands as well.
    ```
    node dataset_generator.js
    node feature_extractor.js 
    ```
5. Then, navigate to the Python folder and run the script to generate a neural network.
    ```
    pip install -r requirements.txt
    cd ../python
    python mlp.py
    ```
6. Navigating to the viewer.html from the browser shows the final output.

## Information
On running the datasetgenerator.js file, it generates a sample.json and sample.js file. It also resizes the image to fit for feature extraction.
On running the feature_extractor.js, firstly, it generates the features from the feature functions defined in the featureFunctions.js and then splits the dataset into training and testing data in 50-50.
Running the Python script mlp.py, it generates a neural network with corresponding biases and weights for each node and saves the information such that the viewer.html can parse through the information for prediction.


## Illustration
![image](https://github.com/user-attachments/assets/0782e81e-a76f-411a-944d-fca40108d2ae)
![image](https://github.com/user-attachments/assets/c43e6b2e-e34b-4417-813c-cdcdc397f0e9)
![image](https://github.com/user-attachments/assets/51506ecd-3059-4409-bf15-4e401dc6ad18)
![image](https://github.com/user-attachments/assets/c27704c0-3dcc-49a2-a653-de2d88a6aefc)

