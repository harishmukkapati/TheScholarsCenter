import openai
import gradio

openai.api_key = "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"

messages = [{"role": "system", "content": "Marv is a informational guide and an expert on college level linear algebra."}]

def CustomChatGPT(user_input):
    messages.append({"role": "user", "content": user_input})
    response = openai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messages = messages
    )
    ChatGPT_reply = response["choices"][0]["message"]["content"]
    messages.append({"role": "assistant", "content": ChatGPT_reply})
    return ChatGPT_reply



demo = gradio.Interface(fn=CustomChatGPT, inputs = "text", outputs = "text", title = "Linear Algebra Chatbot")

demo.launch(share=True)