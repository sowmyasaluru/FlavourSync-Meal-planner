import requests
import json
import time

# List of Spoonacular API Keys
API_KEYS = [
    # "37bea4f1bd4a4127b01da9288f4d5d47",
    "b77d803b889940d19414ec0692dd068d",
    # "d86b4d5161c743c7829762825c846cea",
    # "074b3334c3794e24a906412d71ee026c",
    "f113a0e6b9664566830e5dae183d46b1",
    "121fb04d12c64a81bb2c52c6685ba143",
    "5df93449a9a64b1db1fe5d918e34fcdb",
    "0c5f76fd397f45098e383d740aa6aa85",
    "aa4c8606775142d3948a4424feaddc54"
]
api_key_index = 0

def test_api_keys():
    test_url = "https://api.spoonacular.com/recipes/complexSearch"
    for i, api_key in enumerate(API_KEYS):
        try:
            response = requests.get(test_url, params={"apiKey": api_key, "number": 1})
            if response.status_code == 200:
                print(f"API Key {i + 1} is valid.")
            elif response.status_code == 401:
                print(f"API Key {i + 1} is unauthorized. Check if it's correct.")
            elif response.status_code == 402:
                print(f"API Key {i + 1} has reached its quota limit.")
            else:
                print(f"API Key {i + 1} returned status code {response.status_code}.")
        except Exception as e:
            print(f"An error occurred with API Key {i + 1}: {e}")

# Run the test
# test_api_keys()


def get_current_api_key():
    """
    Returns the current API key and cycles to the next one if needed.
    """
    global api_key_index
    api_key = API_KEYS[api_key_index]
    return api_key

def switch_api_key():
    """
    Switches to the next API key in the list, cycling back if at the end.
    """
    global api_key_index
    api_key_index = (api_key_index + 1) % len(API_KEYS)
    print(f"Switching to API key {api_key_index + 1}")

def fetch_all_recipes(batch_size=50, delay=1, max_recipes=1000):
    """
    Fetch all recipes incrementally from the Spoonacular API.
    :param batch_size: Number of recipes to fetch per request
    :param delay: Delay between API requests to avoid hitting rate limits
    :param max_recipes: Total number of recipes to fetch
    :return: Dictionary of all recipe names and their ingredients
    """
    all_recipes_data = {}
    offset = 0
    total_fetched = 0
    
    while total_fetched < max_recipes:
        try:
            # Fetch recipe IDs in batches
            url = f"https://api.spoonacular.com/recipes/complexSearch"
            params = {
                'apiKey': get_current_api_key(),
                'number': batch_size,
                'offset': offset
            }
            response = requests.get(url, params=params)
            
            # Check for "Payment Required" error (status code 402)
            if response.status_code == 402:
                switch_api_key()
                continue  # Retry with the new key
            
            response.raise_for_status()
            data = response.json()
            results = data.get('results', [])

            if not results:
                break  # Stop if there are no more recipes

            # Fetch details and ingredients for each recipe
            for recipe in results:
                recipe_id = recipe['id']
                recipe_name = recipe['title']
                ingredients = get_ingredients(recipe_id)
                
                if ingredients:
                    all_recipes_data[recipe_name] = ingredients
                    total_fetched += 1

            offset += batch_size  # Update offset for next batch

            # Save data incrementally
            save_to_json(all_recipes_data, "all_recipes.json")

            # Delay to respect rate limits
            time.sleep(delay)
        
        except requests.exceptions.HTTPError as http_err:
            print(f"HTTP error occurred: {http_err}")
            if response.status_code == 402:  # Handle Payment Required error specifically
                switch_api_key()
            else:
                break
        except Exception as err:
            print(f"An error occurred: {err}")
            break

    print(f"Total recipes fetched: {total_fetched}")
    return all_recipes_data

def get_ingredients(recipe_id):
    """
    Fetch ingredients for a specific recipe.
    :param recipe_id: ID of the recipe
    :return: List of ingredients
    """
    while True:
        try:
            url = f"https://api.spoonacular.com/recipes/{recipe_id}/ingredientWidget.json"
            params = {
                'apiKey': get_current_api_key()
            }
            response = requests.get(url, params=params)
            
            if response.status_code == 402:
                switch_api_key()
                continue  # Retry with the new key
            
            response.raise_for_status()
            data = response.json()
            
            # Extract ingredients
            ingredients = [
                {
                    'name': item['name'],
                    'amount': item['amount']['metric']['value'],
                    'unit': item['amount']['metric']['unit']
                }
                for item in data.get('ingredients', [])
            ]
            return ingredients
        except requests.exceptions.HTTPError as http_err:
            print(f"HTTP error occurred for recipe {recipe_id}: {http_err}")
            if response.status_code == 402:
                switch_api_key()
            else:
                break
        except Exception as err:
            print(f"An error occurred for recipe {recipe_id}: {err}")
            break
    return []

def save_to_json(data, filename="all_recipes_final.json"):
    """
    Save data to a JSON file.
    :param data: Data to save
    :param filename: Filename of the JSON file
    """
    with open(filename, 'w') as file:
        json.dump(data, file, indent=4)
    print(f"Data saved to {filename}")

# Fetch and save the entire dataset
fetch_all_recipes(batch_size=50, delay=1, max_recipes=1000)