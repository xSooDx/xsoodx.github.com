---
layout: post
title: "Deep Learning Image Super Resolution for Thermal Images"
---

In January 2018, As part of my final year dissertation at PES University, I interned at [Niramai](https://www.niramai.com/), a health tech startup that developed a novel non-invasive breast cancer screening solution using thermal imaging and machine learning.

As part of my internship, I was tasked with prototyping a method to enhance the resolution of images captured via a mobile compatible miniature thermal camera. My approach to this problem was to use a supervised deep-learning neural network, as we had a large dataset of images to work with. Over the course of the next 5 months, I poured over machine learning and super resolution research papers and began testing various models.

The objective was to build a model that could perform a 4x upscaling on the input thermal images (single channel grey-scale). The original dataset contained a collection of over 3,500 images of patients screened for cancer. These were taken with an industrial grade thermal camera at a resolution of 320x240. For each patient, images were taken at 5 different angles. For the actual training, over 28,000 images were created with transforming the source images with combinations of flipping, rotating, and blurring then down-sampling to 160x120 images. This was split into about 26,000 for training and 2,000 for testing.

The final neural network had 36 layers with a total of over 6,100,000 trainable parameters. It's architecture was inspired by Google’s Inception Network and used 'Inception Modules' and 'Sub-Pixel Convolution' to achieve high accuracy upscaling. 

![Deep-Learning Super-Resolution Neural Network](/assets/media/thermal_sr_model.jpg)

From the images below, we can see that the model performs an accurate upscaling operation on the input images for both direct down-sampled as well as blurred down-sampled inputs. The average error in the output was 0.072 ºC which is close to the thermal resolution of the camera at 0.05 ºC. However the maximum temperature error was up to 4.0 ºC.

![Deep-Learning Super-Resolution Results 1](/assets/media/thermal_sr_results_1.jpg)

![Deep-Learning Super-Resolution Results 2](/assets/media/thermal_sr_results_2.jpg)

