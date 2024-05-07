# New Note in Single Page App Diagram
Instead of sending a new note to the server, then letting the server add it to the array before rerequesting every single file or document, the single page app instead just updates the list of notes locally on the browser using JavaScript, and sends the new note to the server once so the server can just update its own array separately.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201
    deactivate server

    Note right of browser: The server responds with a 201 status code, <br/> indicating that a new note has been created using the JSON sent in the POST request

```

