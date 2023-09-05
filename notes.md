# Chat applications communication techniques
# Problem
Immediate communication between services.
User does not know how things work underneath, but he just wants
to see things quickly/have a feeling of an app being responsive.

# Techniques
- http pooling
- websockets
- server-sent events

# HTTP pooling
Connection pooling refers to reusage of existing pre-established connections to make HTTP requests, rather than creating a new connection for each service request, be it a connection of accessing remote REST API endpoint, or a backend database instance.

So, what is long polling? HTTP Long Polling is a variation of standard polling that **emulates** a server pushing messages to a client (or browser) efficiently.

Long polling was one of the first techniques developed to allow a server to ‘push’ data to a client and because of its longevity, it has near-ubiquitous support in all browsers and web technologies.  Even in an era with protocols specifically designed for persistent bidirectional communication (such as WebSockets), the ability to long poll still has a place as a fallback mechanism that will work everywhere.

How long is Long pooling?  It depends on the `HTTP Keep-Alive header`

# Websockets
The WebSocket Protocol establishes **full-duplex, bidirectional communication** between a client and server. This two-way flow is unique to WebSocket connections, and it means they can transfer data very quickly and efficiently. While there are many great uses for WebSockets, there are also environments where it will work better to use a different approach, like long polling.

# Server-sent events
Server-Side Events (SSE) = technology for sending real-time updates from the server to the client over HTTP.

Advantages of SSE:

    Real-time Updates: SSE provides a mechanism for servers to push data updates to clients instantly.
    Simple Implementation: Easy to implement as it uses standard HTTP and JavaScript EventSource API.
    One-Way Communication: SSE allows one-way communication from server to client.
    Quiz Potential: Mention two advantages of using Server-Side Events.

Format and Usage:

    SSE uses a specific MIME type: text/event-stream.
    Messages are sent as a stream of text, each preceded by a "data" field.
    Events can have custom names, assigned via the "event" field.
    Example: