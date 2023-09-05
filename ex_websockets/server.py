from fastapi import FastAPI, WebSocket
from datetime import datetime
import json
import asyncio
import uvicorn
app = FastAPI()

# List to keep track of connected WebSocket clients
connected_clients = []

# Broadcast messages to all connected clients
async def broadcast(message: any):
    for client in connected_clients:
        await client.send_text(message)

# Define the WebSocket route
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    connected_clients.append(websocket)

    try:
        while True:
            now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            await broadcast(json.dumps({"time": now}))
            await asyncio.sleep(5)  # Wait for X second before sending the next message
    except Exception as exc:
        print(exc)
        connected_clients.remove(websocket)

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
