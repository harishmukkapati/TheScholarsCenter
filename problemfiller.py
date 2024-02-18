problems = [
    {
        "text": "Solve the following system of linear equations:\n1. 2x + 3y = $PLACEHOLDER_1\n2. 4x - y = $PLACEHOLDER_2\nDetermine if the system has a unique solution, infinitely many solutions, or no solution.",
        "placeholders": ["$PLACEHOLDER_1", "$PLACEHOLDER_2"]
    },
    {
        "text": "Given the system of equations below, determine whether the system has a unique solution, infinitely many solutions, or no solution without solving it:\n1. x - 2y + 3z = $PLACEHOLDER_3\n2. 2x + y - z = $PLACEHOLDER_4\n3. -3x + 4y + 2z = $PLACEHOLDER_5",
        "placeholders": ["$PLACEHOLDER_3", "$PLACEHOLDER_4", "$PLACEHOLDER_5"]
    },
    {
        "text": "A company produces two types of gadgets, A and B. The cost to produce one unit of gadget A is $PLACEHOLDER_6, and the cost to produce one unit of gadget B is $PLACEHOLDER_7. The company spent $PLACEHOLDER_8 on production costs for these gadgets in one day. On that day, they produced a total of $PLACEHOLDER_9 units of gadgets. How many units of gadget A and gadget B did the company produce?",
        "placeholders": ["$PLACEHOLDER_6", "$PLACEHOLDER_7", "$PLACEHOLDER_8", "$PLACEHOLDER_9"]
    }
    # Add more problems as needed
]

import openai

def fill_placeholders(api_key, placeholders):
    openai.api_key = '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'
    responses = {}
    for placeholder in placeholders:
        # Example prompt to generate a number, you can customize it based on the context
        prompt = f"Generate a random but reasonable value for {placeholder}, considering the context."
        response = openai.Completion.create(engine="text-davinci-003", prompt=prompt, max_tokens=5)
        responses[placeholder] = response.choices[0].text.strip()
    return responses

def substitute_values(problems, values):
    for problem in problems:
        for placeholder in problem["placeholders"]:
            if placeholder in values:
                problem["text"] = problem["text"].replace(placeholder, values[placeholder])
    return problems

def main():
    api_key = "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"  # Replace with your actual API key
    all_placeholders = sum([problem["placeholders"] for problem in problems], [])
    values = fill_placeholders(api_key, set(all_placeholders))  # Ensure placeholders are unique
    filled_problems = substitute_values(problems, values)
    
    for problem in filled_problems:
        print(problem["text"])
        print("\n---\n")

if __name__ == "__main__":
    main()
