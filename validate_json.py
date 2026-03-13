import json
import sys

file_path = r'c:\Windows\System32\IntegratedServicesRegionPolicySet.json'
try:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    json.loads(content)
    print("JSON is valid")
except json.JSONDecodeError as e:
    print(f"Error: {e.msg} at line {e.lineno}, col {e.colno}")
    lines = content.splitlines()
    if e.lineno <= len(lines):
        print(f"Line {e.lineno}: {lines[e.lineno-1]}")
except Exception as e:
    print(f"Unexpected error: {e}")
