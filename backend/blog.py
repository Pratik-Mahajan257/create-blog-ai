import os
import openai
import config


openai.api_key = config.OPENAI_API_KEY


def generateBlogTopics(prompt1):
    response = openai.Completion.create(
      engine="davinci-instruct-beta-v3",
      prompt="Generate blog topics on: {}. \n \n 1.  ".format(prompt1),
      temperature=0.7,
      max_tokens=100,
      top_p=1,
      frequency_penalty=0,
      presence_penalty=0
    )

    return response['choices'][0]['text']

def generateBlogSections(prompt1):
    response = openai.Completion.create(
      engine="davinci-instruct-beta-v3",
      prompt="Expand the blog title in to high level blog sections: {} \n\n- Introduction: ".format(prompt1),
      temperature=0.6,
      max_tokens=100,
      top_p=1,
      frequency_penalty=0,
      presence_penalty=0
    )

    return response['choices'][0]['text']


def blogSectionExpander(prompt1):
    response = openai.Completion.create(
      engine="davinci-instruct-beta-v3",
      prompt="Expand the blog section in to a detailed professional , witty and clever explanation. {}".format(prompt1),
      temperature=0.7,
      max_tokens=400,
      top_p=1,
      frequency_penalty=0,
      presence_penalty=0
    )

    return response['choices'][0]['text']

def generateImage(prompt):
    response = openai.Completion.create(
        engine="dalle-mini",
        prompt=prompt,
        max_tokens=0,
        temperature=0.7,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )

    image = response.choices[0].image
    return image